import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({
  videoFile: {
    type: String,    // cloudinary url
    require: true
  },
  thumbnail: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  duration: {
    type: number,
    require: true
  },
  views: {
    type: number,
    require: true
  },
  isPublished: {
    type: Boolean,
    require: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
},{timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.models("video", videoSchema)