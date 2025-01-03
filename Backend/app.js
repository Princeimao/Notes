import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// routes

import userRouter from "./src/routes/user.router.js";
import todoRouter from "./src/routes/todo.router.js";

app.use("/api/user/auth", userRouter);
app.use("/api/todo", todoRouter);
