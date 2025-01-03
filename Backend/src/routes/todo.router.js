import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controller/todo.controller.js";
import { authMiddleware } from "../controller/user.controller.js";

const router = express.Router();

router.route("/createTodo").post(authMiddleware, createTodo);
router.route("/getTodos").get(authMiddleware, getAllTodo);
router.route("/updateTodo/:id").put(authMiddleware, updateTodo);
router.route("deleteTodo/:id").delete(authMiddleware, deleteTodo);

export default router;
