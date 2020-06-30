import express from "express";

const userController = express.Router();

userController.get("/", (req, res) => {
  res.status(200);
});

export default userController;
