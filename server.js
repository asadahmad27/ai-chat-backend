const express = require("express");
const cors = require("cors");
const path = require("path");

const assistantRoutes = require("./routes/assistantRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();
const PORT = process.env.PORT || 3333;

// CORS Config
const corsOptions = {
  origin: ["http://localhost:5173", "https://ai-chat-psi-flax.vercel.app"],
  methods: "GET,POST,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve static images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/assistants", assistantRoutes);
app.use("/api/history", historyRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("Hello World! API is working.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
