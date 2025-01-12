import express from "express";

import { authMiddleware } from "../middleware/Auth.middleware.js";
import { createTodo } from "../controller/todo.controller.js";

const router = express.Router();

router.route("/createTodo").post(authMiddleware, createTodo);

export default router;
