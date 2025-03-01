const { generateMarkdownResponse } = require("../utils/generateMarkDown");

let chats = []; // Store multiple chat sessions

// Start a new chat session
const startNewChat = (req, res) => {
  const chatId = Date.now().toString(); // Unique ID
  const currentDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }); // Format: "Mar 3, 2025, 10:30 AM"

  const newChat = {
    chatId,
    title: `New Chat ${chats.length + 1}`,
    date: currentDate, // ✅ Add Date Here
    messages: [],
  };

  chats.push(newChat);
  res.json(newChat);
};

// Send message with or without an image
const sendMessage = (req, res) => {
  const { chatId } = req.params;
  const { message } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  // Find chat by ID
  const chat = chats.find((c) => c.chatId === chatId);
  if (!chat) return res.status(404).json({ error: "Chat not found" });

  if (!message && !imageUrl) {
    return res.status(400).json({ error: "Message or image is required" });
  }

  // ✅ Create user message object
  const userMessage = {
    id: Date.now().toString(),
    chatId,
    sender: "user",
    message: message || "",
    type: imageUrl ? "image" : "text",
    timestamp: new Date().toISOString(),
    imageUrl,
  };

  chat.messages.push(userMessage); // Store user message separately

  // ✅ Create AI response object
  const aiResponse = {
    id: (Date.now() + 1).toString(),
    chatId,
    sender: "ai",
    message: generateMarkdownResponse(message),
    type: "text",
    timestamp: new Date().toISOString(),
    imageUrl: null,
  };

  // Delay AI response by 2 seconds
  setTimeout(() => {
    chat.messages.push(aiResponse);
  }, 2000);

  res.status(200).json(userMessage); // Return only user message initially
};

// Get all chat history
const getChatHistory = (req, res) => {
  res.json(chats);
};

// Get Chat by ID
const getChatById = (req, res) => {
  const { chatId } = req.params;
  const chat = chats.find((c) => c.chatId === chatId);

  if (!chat) {
    return res.status(404).json({ error: "Chat not found" });
  }

  res.json(chat);
};

module.exports = { startNewChat, sendMessage, getChatHistory, getChatById };
