import userModel from "../models/user.model.js";
import todoModel from "../models/Todo.model.js";
import { todoSchemaValidation } from "../validation/todo.validation.js";

export const createTodo = async (req, res) => {
  try {
    const { email } = req.user;
    const { title, description } = todoSchemaValidation.parse(req.body);

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    const todo = await todoModel.create({
      title,
      description,
      admin: user._id,
    });

    user.todos.push(todo._id);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Todo Created Successfully",
    });
  } catch (error) {
    console.log("something went wrong while creating a todo", error);
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userModel.findOne({ email }).populate("todos");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get todos Successfully",
      user: {
        name: user.name,
        email: user.email,
        todos: user.todos,
      },
    });
  } catch (error) {
    console.log("something went wrong while getting todo", error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const updatedTodo = await todoModel.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "todo Updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    console.log("something went wrong while updating a todo", error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params;
    const { email } = req.user;

    const deleteTodo = await todoModel.findOneAndDelete(id);

    if (deleteTodo) {
      return res.status(500).json({
        success: false,
        message: "something went wrong while deleting todo",
      });
    }

    await userModel.findOneAndUpdate(email, { $pull: { todos: id } });
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.log("something went wrong while deleting the todo", error);
  }
};
