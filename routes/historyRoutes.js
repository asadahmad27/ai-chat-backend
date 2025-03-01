const express = require("express");
const {
  startNewChat,
  sendMessage,
  getChatHistory,
} = require("../controllers/historyController");

const router = express.Router();

// Start a new chat session
router.post("/new", startNewChat);

// Send a message in an existing chat
router.post("/:chatId", sendMessage);

// Get all chat history
router.get("/", getChatHistory);

module.exports = router;
