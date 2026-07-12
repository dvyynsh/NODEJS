import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async(req, res) => {
    // get user detailes from frontend
    // validation - shoudn't be empty
    // check if user already exists
    // cheack for images, cheack for avatar
    // upload to cloudinary
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation 
    // return res

    const { fullname, email, username, password } = req.body
    console.log("email: ", email);

    // if ( fullname == "" ){
    //     throw new ApiError(400, "full name is req.")
    // }
    // rather than one by one typing all
    if (
        [ fullname, email, username, password ].some( (field) =>
            field?.trim() === "" )
    ) {
        throw new ApiError(400, "All fields are req.")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (existedUser){
        throw new ApiError(409, "User with email already exists")
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if (!avatarLocalPath){
        throw new ApiError(400, "Avatar file is req.")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = coverImageLocalPath ? await uploadOnCloudinary(coverImageLocalPath) : null

    if (!avatar){
        throw new ApiError(400, "Avatar upload failed.")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User Registered successfully")
    )
})

const generateAccessAndRefreshTokens = async(userId) => {
    try{
       const user = await User.findbyId(userId)
       const accessToken = user.generateAccessToken()
       const refreshToken = user.generateRefreshToken()
       user.refreshToken = refreshToken
       await user.save({validateBeforeSave: false})
       return{accessToken, refreshToken} 

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token")
    }
}
 
const loginUser = asyncHandler( async(req, res) => {
    // req body -> data
    // username or email
    // find the user 
    // password check
    // access and refresh token
    // send cookie

    const {email, username, password} = req.body
    if(!username && !email){
        throw new ApiError(400, "Username or password req...")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]  // jisse bhi register kiya ho take it any one
    })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid){
        throw new ApiError(401, "Password Incorrect")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).
    select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, 
                refreshToken 
            },
            "User logged In SucessFully"
        )
    )
})

const logoutUser = asyncHandler(async(req, res) => { 
    User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
})


export {
    registerUser,
    loginUser,
    logoutUser
}