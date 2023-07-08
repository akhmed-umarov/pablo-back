import mongoose from "mongoose";
import { Schema } from "mongoose";

const CommentUserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export default mongoose.model("CommentUser", CommentUserSchema);
