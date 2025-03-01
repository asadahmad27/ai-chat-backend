const express = require("express");
const { getAssistants } = require("../controllers/assistantController");

const router = express.Router();

router.get("/", getAssistants);

module.exports = router;
