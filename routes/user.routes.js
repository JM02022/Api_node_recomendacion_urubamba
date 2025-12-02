// src/routes/user.routes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Login simple
router.post("/login", userController.login);

module.exports = router;
