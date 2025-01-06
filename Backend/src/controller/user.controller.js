import userModel from "../models/user.model.js";
import {
  loginSchemaValidaion,
  registerSchemaValidation,
} from "../validation/user.validation.js";
import { ZodError } from "zod";
import jwt from "jsonwebtoken";

const httpOnlyCookie = {
  httpOnly: true,
  sameSite: "strict",
  secure: true,
};

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = registerSchemaValidation.parse(req.body);

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already exist, Please Login",
      });
    }

    const createdUser = await userModel.create({
      name,
      email,
      password,
    });

    if (!createdUser) {
      return res.status(500).json({
        success: false,
        message: "something went wrong while creating user",
      });
    }

    const token = await createdUser.generateAccessToken();

    res.cookie("Token", token, httpOnlyCookie);

    res.status(200).json({
      user: {
        name: createdUser.name,
        email: createdUser.email,
        token: token,
      },
      success: true,
      message: "user Created Successfully",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: error.issues[0].message,
        name: error.name,
        error,
      });
    }

    console.log("something went wrong while registering user", error);
    res.status(500).json({
      success: false,
      message: error.message,
      name: error.name,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = loginSchemaValidaion.parse(req.body);

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found, Please register",
      });
    }

    const result = await user.comparePassword(password);

    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await user.generateAccessToken();

    res.cookie("Token", token, httpOnlyCookie);

    res.status(200).json({
      success: true,
      user: {
        email: user.email,
        name: user.name,
        token: token,
      },
      message: "User login Successfully",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: error.issues[0].message,
        name: error.name,
        error,
      });
    }

    console.log("something went wrong while registering user", error);
    res.status(500).json({
      success: false,
      message: error.message,
      name: error.name,
    });
  }
};

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized request, Token not found",
      });
    }

    const result = jwt.verify(token, process.env.SECRET_TOKEN);

    req.user = result;
    next();
  } catch (error) {
    console.log(
      "something went wrong while getting user or Unauthorized request",
      error
    );
  }
};

export const getUser = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token or User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User found",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("something went wrong while getting an user", error);
  }
};
