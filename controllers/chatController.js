const { generateMarkdownResponse } = require("../utils/generateMarkDown");

let chatHistory = [];

const handleChat = (req, res) => {
  const userMessage = req.body.message;
  const aiResponse = generateMarkdownResponse(userMessage);

  chatHistory.push({ user: userMessage, ai: aiResponse });

  res.json({ response: aiResponse });
};

const handleChatWithImage = (req, res) => {
  const { message } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const aiResponse = `**AI Response for Image Upload:**  
  - Image uploaded successfully!  
  - Image URL: ![Uploaded Image](${imageUrl})`;

  res.json({ response: aiResponse, imageUrl });
};

module.exports = { handleChat, handleChatWithImage };
