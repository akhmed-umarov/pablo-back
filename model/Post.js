import mongoose from "mongoose";
import { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    //айди пользователя создателя поста
    userId: {
      type: Number,
      require: true,
    },
    //айди самого поста
    id: {
      type: Number,
      require: true,
      unique: true,
    },
    //Название поста
    title: {
      type: String,
      default: "",
      require: true,
    },
    //тело поста
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

export default mongoose.model("Post", PostSchema);
