import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"; // bearer token (Jo isko Bear karta he usko data send)
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  avatar: {
    type: String,
    require: true
  },
  coverImage: {
    type: String,
  },
  watchHistory:[      // it is an array
    {
      type: Schema.Types.ObjectId,
      ref: "Video"
    }
  ],
  password: {
    type: String,
    require: [true,"pasword is required"]
  },
  refreshToken: {
    type: String
  }
},{ timestamps: true})

// for encyption jab bhi save ho raha ho uske pahle pass ko encypt kar do
userSchema.pre("Save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcypt.hash(this.password, 10)      
  // took pass and bcypt will encypt, but also asked for how many rounds
  next()
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
  return jwt.sign({
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}

userSchema.methods.generateRefreshToken = function(){
  return jwt.sign({
      _id: this._id,
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
  }
  )
}

export const User = mongoose.model("User", UserSchema)