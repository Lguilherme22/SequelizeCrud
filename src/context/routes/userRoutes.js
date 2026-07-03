const express = require("express");

const createUser = require("../../use-case/user/createUser");
const getAllUsers = require("../../use-case/user/getUsers");
const getUserById = require("../../use-case/user/getUserID");
const updateUser = require("../../use-case/user/updateUser");
const deleteUser = require("../../use-case/user/deleteUser");

const requestValidator = require("../../validator")

const router = express.Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.post("/users", requestValidator,createUser);

router.put("/users/:id", requestValidator,updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;