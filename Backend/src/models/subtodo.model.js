import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    maxlength: 100,
  },
  isCompleted: {
    type: String,
    default: false,
  },
  todo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "todo",
    required: true,
  },
});

export default mongoose.model("subtodo", subtodoSchema);
