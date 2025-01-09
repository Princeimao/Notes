import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized request, Token not found",
      });
    }

    const result = jwt.verify(token, process.env.SECRET_TOKEN);

    req.user = result;
    next();
  } catch (error) {
    console.log(
      "something went wrong while getting user or Unauthorized request",
      error
    );
  }
};
