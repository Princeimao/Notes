import listModel from "../models/list.model.js";
import userModel from "../models/user.model.js";
import { listSchemaValidation } from "../validation/list.validation.js";

// const seedDefaultLists = async () => {
//   const defaultLists = [
//     { name: "Personal", isDefault: true, color: "#FDBAA3" },
//     { name: "Work", isDefault: true, color: "#4D4D4D" },
//   ];

//   for (const list of defaultLists) {
//     const existingList = await listModel.findOne({
//       name: list.name,
//       isDefault: true,
//       color: list.color,
//     });

//     if (!existingList) {
//       await listModel.create(list);
//     }
//   }

//   console.log("Default lists seeded!");
// };

export const createList = async (req, res) => {
  //seedDefaultLists();
  try {
    const { list, color } = listSchemaValidation.parse(req.body);
    const { email } = req.user;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }
    const Createdlist = await listModel.create({
      list,
      color,
      admin: user._id,
    });

    if (!Createdlist) {
      return res.status(400).json({
        success: false,
        message: "Unable to create List",
      });
    }

    user.list.push(Createdlist._id);
    await user.save();

    res.status(200).json({
      success: true,
      message: "list Created Successfully",
    });
  } catch (error) {
    console.log("something went wrong while creating list", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateList = async (req, res) => {
  try {
    const update = req.body;
    const { id } = req.params;
    const { email } = req.user;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    const updatedList = await listModel.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!updatedList) {
      return res.status(400).json({
        success: false,
        message: "Unable to update List",
      });
    }

    res.status(200).json({
      success: true,
      message: "list Updated successfully",
      list: updateList,
    });
  } catch (error) {
    console.log("something went wrong while updating list", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getAllList = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userModel.findOne({ email }).populate("list");
    if (!user) {
      res.status(400).json({
        success: false,
        message: "Unauthorized request Or Unable to find the user",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get all List successfully",
      list: user.list,
    });
  } catch (error) {
    console.log("something went wrong while getting list", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.user;

    const deleteList = await listModel.findByIdAndDelete(id);
    if (!deleteList) {
      res.status(500).json({
        success: false,
        message: "something went wrong while deleting the list",
      });
    }

    await userModel.findOneAndUpdate({ email }, { $pull: { list: id } });

    res.status(200).json({
      success: true,
      message: "List deleted successfully",
    });
  } catch (error) {
    console.log("something went wrong while creating list", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
