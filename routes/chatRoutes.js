const express = require("express");
const {
  handleChat,
  handleChatWithImage,
} = require("../controllers/chatController");
const multer = require("multer");

const router = express.Router();

// Multer Config for File Uploads
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Chat Routes
router.post("/", handleChat);
router.post("/chat-with-image", upload.single("image"), handleChatWithImage);

module.exports = router;
