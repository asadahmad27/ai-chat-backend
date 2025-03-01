const { generateMarkdownResponse } = require("../utils/generateMarkDown");

let chats = []; // Store multiple chat sessions

// Start a new chat session
const startNewChat = (req, res) => {
  const chatId = Date.now().toString(); // Unique ID
  const newChat = {
    chatId,
    title: `Chat ${chats.length + 1}`,
    messages: [],
  };
  chats.push(newChat);
  res.json(newChat);
};

// Send message in an existing chat
const sendMessage = (req, res) => {
  const { chatId } = req.params;
  const { message } = req.body;

  const chat = chats.find((c) => c.chatId === chatId);
  if (!chat) return res.status(404).json({ error: "Chat not found" });

  const aiResponse = generateMarkdownResponse(message);
  const newMessage = { user: message, ai: aiResponse };
  chat.messages.push(newMessage);

  res.json(newMessage);
};

// Get all chat history
const getChatHistory = (req, res) => {
  chats = [];
  res.json(chats);
};

module.exports = { startNewChat, sendMessage, getChatHistory };
