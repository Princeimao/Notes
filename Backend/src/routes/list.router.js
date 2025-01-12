import express from "express";

import { authMiddleware } from "../middleware/Auth.middleware.js";
import { createList } from "../controller/list.controller.js";

const router = express.Router();

router.route("/createList").post(authMiddleware, createList);

export default router;
