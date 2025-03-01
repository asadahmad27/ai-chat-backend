const responses = [
  `
## 🤖 AI Response - Text Formatting
> **Your Message:** *"{userMessage}"*  
> _Processing completed..._

---

### ✨ **Markdown Formatting**
- **Bold:** **Lorem ipsum dolor sit amet**  
- *Italic:* _Consectetur adipiscing elit_  
- ~~Strikethrough~~: ~~This text is crossed out~~  
- \`Inline Code:\` \`console.log("Hello, world!")\`

---

### 📝 **Blockquote**
> "This is a famous quote in a blockquote."

`,

  `
### 🖥️ **Code Block Example**
\`\`\`javascript
function greet() {
  return "Hello, Markdown!";
}
console.log(greet());
\`\`\`

---

### 🔗 **Links**
- Visit [Google](https://google.com) for more info.
- Learn **Markdown**: [GitHub Docs](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
  `,

  `
## 🤖 AI Response - Lists & Tables  
> **Your Message:** *"{userMessage}"*  
> _Processing completed..._

---

### 📊 **Tables**
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| **Bold** | _Italic_ | \`Code\` |
| 😀 Emoji | 🌍 Earth | 🎉 Celebration |
`,

  `
## 🤖 AI Response - Images & Quotes  
> **Your Message:** *"{userMessage}"*  
> _Processing completed..._

---

### 🖼️ **Image Example**
![Markdown Logo](https://markdown-here.com/img/icon256.png)

---

### 📌 **Quote of the Day**
> "Innovation distinguishes between a leader and a follower."  
> — Steve Jobs
  `,

  `
## 🤖 AI Response - Mixed Content  
> **Your Message:** *"{userMessage}"*  
> _Processing completed..._

---

### 📌 **Markdown Showcase**
- **Bold:** **Hello World!**  
- *Italic:* _Markdown is fun_  
- ~~Strikethrough~~  
- \`Inline Code\`: \`console.log("Hi!")\`
- **Block Code Example**:
  \`\`\`python
  def greet():
      return "Hello, Python!"
  print(greet())
  \`\`\`
`,
];

/**
 * Returns a random markdown response
 */
const generateMarkdownResponse = (userMessage) => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex].replace("{userMessage}", userMessage);
};

module.exports = { generateMarkdownResponse };
