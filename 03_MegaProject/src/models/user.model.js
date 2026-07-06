import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  Username: {
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


export const User = mongoose.model("User", UserSchema)