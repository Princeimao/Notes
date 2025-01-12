import userModel from "../models/user.model.js";
import todoModel from "../models/todo.model.js";
import listModel from "../models/list.model.js";
import { todoSchemaValidation } from "../validation/todo.validation.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, list } = todoSchemaValidation.parse(
      req.body
    );
    console.log("first", title, description, dueDate, list);
    const { email } = req.user;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    const userList = await listModel.findOne({
      _id: list,
      $or: [{ user: user._id }, { user: null }],
    });

    if (!userList) {
      return res.status(404).json({
        success: false,
        message: "List not found",
      });
    }

    const createdTodo = await todoModel.create({
      title,
      description,
      dueDate,
      admin: user._id,
    });

    if (!createdTodo) {
      return res.status(400).json({
        success: false,
        message: "Unable to create Todo",
      });
    }

    userList.todos.push(createdTodo._id);
    user.todos.push(createdTodo._id);

    await user.save();
    await userList.save();

    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todo: createdTodo,
    });
  } catch (error) {
    console.log("something went wrong while creating todo", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
