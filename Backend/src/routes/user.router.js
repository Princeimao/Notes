import express from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  RegisterUser,
} from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(loginUser);
router.route("/getUser").get(authMiddleware, getUser);
router.route("/logout").get(authMiddleware, logoutUser);

export default router;
