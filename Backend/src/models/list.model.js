import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
  list: {
    type: String,
    required: true,
    maxlength: 20,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

export default mongoose.model("sideList", listSchema);
