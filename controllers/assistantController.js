const assistants = [
  {
    id: 1,
    name: "CodeMaster",
    icon: "🖥️",
    description: "Your AI coding assistant",
  },
  {
    id: 2,
    name: "HealthBot",
    icon: "💊",
    description: "AI for medical guidance",
  },
  {
    id: 3,
    name: "FinanceGuru",
    icon: "📊",
    description: "Expert in finance and trading",
  },
  {
    id: 4,
    name: "CreativeMind",
    icon: "🎨",
    description: "AI for creative writing & design",
  },
];

const getAssistants = (req, res) => {
  res.json(assistants);
};

module.exports = { getAssistants };
