import express from "express";

import { authMiddleware } from "../middleware/Auth.middleware.js";
import {
  createSubtodo,
  deleteSubtodo,
  getAllSubtodo,
  updateSubtodo,
} from "../controller/subTodo.controller.js";

const router = express.Router();

router.route("/createSubtodo").post(authMiddleware, createSubtodo);
router.route("/updateSubtodo/:id").put(authMiddleware, updateSubtodo);
router.route("/getSubtodo").get(authMiddleware, getAllSubtodo);
router.route("/deleteSubtodo/:id").delete(authMiddleware, deleteSubtodo);

export default router;
