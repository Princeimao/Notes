import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/Todo_List`);
    console.log(`connected to database successfully`);
  } catch (error) {
    console.log("something went wrong while connecting to database");
    process.exit(1);
  }
};
