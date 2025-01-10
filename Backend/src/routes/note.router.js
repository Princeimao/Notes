import express from "express";
import {
  createNote,
  deleteNote,
  getAllNote,
  updateNote,
} from "../controller/note.controller.js";
import { authMiddleware } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.route("/createNote").post(authMiddleware, createNote);
router.route("/getNote").get(authMiddleware, getAllNote);
router.route("/updateNote/:id").put(authMiddleware, updateNote);
router.route("deleteNote/:id").delete(authMiddleware, deleteNote);

export default router;
