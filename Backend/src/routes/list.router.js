import express from "express";

import { authMiddleware } from "../middleware/Auth.middleware.js";
import {
  createList,
  deleteList,
  getAllList,
  updateList,
} from "../controller/list.controller.js";

const router = express.Router();

router.route("/createList").post(authMiddleware, createList);
router.route("/updateList/:id").put(authMiddleware, updateList);
router.route("/getList").get(authMiddleware, getAllList);
router.route("/deleteList/:id").delete(authMiddleware, deleteList);

export default router;
