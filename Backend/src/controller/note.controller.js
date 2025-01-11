import userModel from "../models/user.model.js";
import noteModel from "../models/Note.model.js";
import { noteSchemaValidation } from "../validation/note.validation.js";

export const createNote = async (req, res) => {
  try {
    const { email } = req.user;
    const { title, description } = noteSchemaValidation.parse(req.body);

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    const note = await noteModel.create({
      title,
      description,
      admin: user._id,
    });

    user.notes.push(note._id);
    await user.save();

    res.status(200).json({
      success: true,
      message: "note Created Successfully",
    });
  } catch (error) {
    console.log("something went wrong while creating a note", error);
  }
};

export const getAllNote = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await userModel.findOne({ email }).populate("notes");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    res.status(200).json({
      success: true,
      message: "Get note Successfully",
      user: {
        name: user.name,
        email: user.email,
        notes: user.notes,
      },
    });
  } catch (error) {
    console.log("something went wrong while getting note", error);
  }
};

export const updateNote = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const updatedNote = await noteModel.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "note not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "note Updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.log("something went wrong while updating a note", error);
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { email } = req.user;

    const deleteNote = await noteModel.findOneAndDelete({ _id: id });

    if (!deleteNote) {
      return res
        .status(404)
        .json({ success: false, message: "Note not found" });
    }

    await userModel.findOneAndUpdate({ email }, { $pull: { notes: id } });

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.log("something went wrong while deleting the note", error);
  }
};
