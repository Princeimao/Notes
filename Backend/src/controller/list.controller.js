import listModel from "../models/list.model.js";
import userModel from "../models/user.model.js";
import { listSchemaValidation } from "../validation/list.validation.js";

const seedDefaultLists = async () => {
  const defaultLists = [
    { name: "Personal", isDefault: true, color: "#FDBAA3" },
    { name: "Work", isDefault: true, color: "#4D4D4D" },
  ];

  for (const list of defaultLists) {
    const existingList = await listModel.findOne({
      name: list.name,
      isDefault: true,
      color: list.color,
    });

    if (!existingList) {
      await listModel.create(list);
    }
  }

  console.log("Default lists seeded!");
};

export const createList = async (req, res) => {
  //seedDefaultLists();
  try {
    const { list, color } = listSchemaValidation.parse(req.body);
    const { email } = req.user;
    console.log("first", email);

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }
    console.log("second", user);
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
      message: "note Created Successfully",
    });
  } catch (error) {
    console.log("something went wrong while creating list", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
