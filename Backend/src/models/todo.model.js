import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  list: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
  dueDate: {
    type: Date,
  },
  subtodo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtodo",
    },
  ],
});

export default mongoose.model("todo", todoSchema);
