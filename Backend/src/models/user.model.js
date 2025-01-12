import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [3, "Name should atleast 3 character long"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, "Password should atleast 8 character long"],
  },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
  list: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sideList",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.comparePassword = async function (password) {
  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    console.log("something went wrong while comparing password", error);
  }
};

userSchema.methods.generateAccessToken = async function () {
  try {
    const token = await jwt.sign(
      {
        id: this._id,
        name: this.name,
        email: this.email,
      },
      process.env.SECRET_TOKEN,
      {
        expiresIn: "1h",
      }
    );

    return token;
  } catch (error) {
    console.log("something went wrong while generate Access Token", error);
  }
};

export default mongoose.model("User", userSchema);
