import mongoose from "mongoose";
import { Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    //айди поста
    postId: {
      type: Number,
      require: true,
    },
    //айди самого поста
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    //Название коммента
    name: {
      type: String,
      default: "",
      require: true,
    },
    //тело коммента
    email: {
      type: String,
      require: true,
    },
    //тело коммента
    body: {
      type: String,
      default: "",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Comment", CommentSchema);
