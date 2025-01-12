import express from "express";

import { authMiddleware } from "../middleware/Auth.middleware.js";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controller/todo.controller.js";

const router = express.Router();

router.route("/createTodo").post(authMiddleware, createTodo);
router.route("/update/:id").put(authMiddleware, updateTodo);
router.route("/getTodo").get(authMiddleware, getAllTodo);
router.route("/deleteTodo/:id").delete(authMiddleware, deleteTodo);

export default router;
