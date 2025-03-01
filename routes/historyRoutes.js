const express = require("express");
const {
  startNewChat,
  sendMessage,
  getChatHistory,
  getChatById,
} = require("../controllers/historyController");

const router = express.Router();
const multer = require("multer");

// Configure Multer for Image Uploads
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Start a new chat session
router.post("/new", startNewChat);

// Send a message in an existing chat
router.post("/:chatId", upload.single("image"), sendMessage);

// Get all chat history
router.get("/", getChatHistory);

// GET /api/chat/:chatId - Get a chat by ID
router.get("/:chatId", getChatById);

module.exports = router;
