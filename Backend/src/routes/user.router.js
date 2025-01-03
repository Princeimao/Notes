import express from "express";
import {
  authMiddleware,
  getUser,
  loginUser,
  RegisterUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(loginUser);
router.route("/getUser").get(authMiddleware, getUser);

export default router;
