import "dotenv/config";
import { app } from "./app.js";
import { dbConnection } from "./src/config/dbConnection.js";

const port = process.env.PORT;

const connection = async () => {
  try {
    await dbConnection();
    app.listen(port, () => {
      console.log(`server running on port: ${port}`);
    });
  } catch (error) {
    console.log("something went wrong while connecting to server");
  }
};

connection();
