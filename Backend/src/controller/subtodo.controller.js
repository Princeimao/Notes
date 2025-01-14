import subtodoModel from "../models/subtodo.model.js";
import todoModel from "../models/todo.model.js";
import { subtodoSchemaValidation } from "../validation/todo.validation.js";

export const createSubtodo = async (req, res) => {
  try {
    const { title, todoId } = subtodoSchemaValidation.parse(req.body);

    const todo = await todoModel.findById(todoId);

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Todo not found",
      });
    }

    const createSubtodo = await subtodoModel.create({
      title,
    });

    if (!createSubtodo) {
      return res.status(500).json({
        success: false,
        message: "Unable to create Subtodo",
      });
    }

    todo.subtodo.push(createSubtodo._id);

    res.status(201).json({
      success: true,
      message: "Subtodo created successfully",
      todo: createSubtodo,
    });
  } catch (error) {
    console.log("some thing went wrong while creating subtodo", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateSubtodo = async (req, res) => {
  try {
    const update = req.body;
    const { id } = req.params;

    const updateSubtodo = await subtodoModel.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updateSubtodo) {
      return res.status(500).json({
        success: false,
        message: "Unable to update Subtodo",
      });
    }

    res.status(201).json({
      success: true,
      message: "Subtodo created successfully",
      todo: createSubtodo,
    });
  } catch (error) {
    console.log("some thing went wrong while creating subtodo", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllSubtodo = async (req, res) => {
  try {
    const id = req.params;

    const todo = await todoModel.findOne(id).populate("subtodo");

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized user or unable to find todo",
      });
    }

    res.status(201).json({
      success: true,
      message: "Subtodo created successfully",
      subtodo: todo.subtodo,
    });
  } catch (error) {
    console.log("some thing went wrong while creating subtodo", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteSubtodo = async (req, res) => {
  try {
    const id = req.params;

    const todo = await todoModel.findOne(id).populate("subtodo");

    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized user or unable to find todo",
      });
    }

    res.status(201).json({
      success: true,
      message: "Subtodo created successfully",
      subtodo: todo.subtodo,
    });
  } catch (error) {
    console.log("some thing went wrong while creating subtodo", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
