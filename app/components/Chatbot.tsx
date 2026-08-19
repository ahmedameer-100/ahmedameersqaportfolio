"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
};

const quickReplies = [
  "Core Skills",
  "Automation Experience",
  "Featured Projects",
  "Contact Info",
  "Download Resume",
];

const botKnowledge: Record<string, string> = {
  "Core Skills":
    "Ahmed Ameer specializes in Manual Testing (Functional, Regression, API, Database, UI/UX, UAT) and Automation Testing (Selenium, Cypress, Playwright, Python, Postman, CI/CD).",
  "Automation Experience":
    "Ahmed has 3+ years of SQA experience building maintainable automation frameworks using Selenium WebDriver, Cypress, and Playwright with Page Object Model (POM) and CI/CD integration.",
  "Featured Projects":
    "Key projects include Gift Well Soon (E-commerce), Cargo ID Secure (Logistics), InstaCare B2C & B2B (Healthcare), AllZone Technologies, HRMS (Enterprise), and CRCLS.",
  "Contact Info":
    "You can reach Ahmed via email at ahmedameer7337@gmail.com or phone at +92 316 6533606. You can also connect on LinkedIn: https://www.linkedin.com/in/ahmed-ameer-/",
  "Download Resume":
    "You can download Ahmed's CV directly using the 'Download Resume' button at the bottom of the page or in the sidebar!",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I'm Ahmed's AI Portfolio Assistant. Ask me anything about his SQA experience, automation skills, or projects!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let replyText =
        "Thank you for reaching out! Ahmed Ameer is an experienced SQA Engineer skilled in Manual & Automation Testing. Feel free to contact him directly at ahmedameer7337@gmail.com.";

      // Match knowledge keys
      for (const key of Object.keys(botKnowledge)) {
        if (query.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(query.toLowerCase())) {
          replyText = botKnowledge[key];
          break;
        }
      }

      if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
        replyText = "Hi there! How can I help you explore Ahmed's SQA portfolio today?";
      } else if (query.toLowerCase().includes("cv") || query.toLowerCase().includes("resume")) {
        replyText = botKnowledge["Download Resume"];
      } else if (query.toLowerCase().includes("skill") || query.toLowerCase().includes("tool")) {
        replyText = botKnowledge["Core Skills"];
      } else if (query.toLowerCase().includes("project") || query.toLowerCase().includes("work")) {
        replyText = botKnowledge["Featured Projects"];
      } else if (query.toLowerCase().includes("contact") || query.toLowerCase().includes("email") || query.toLowerCase().includes("hire")) {
        replyText = botKnowledge["Contact Info"];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button
          className="chatbot-toggle-btn"
          onClick={() => setIsOpen(true)}
          type="button"
          aria-label="Open QA Assistant Chat"
          data-tooltip="Chat with QA Assistant"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className="chatbot-toggle-badge">AI</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-container panel" role="dialog" aria-label="SQA Assistant Chat">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">QA</div>
              <div>
                <strong>Ahmed's Assistant</strong>
                <small>Online • SQA Specialist</small>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)} type="button" aria-label="Close Chat">
              ×
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble-wrap ${msg.sender}`}>
                <div className={`chat-bubble ${msg.sender}`}>{msg.text}</div>
                <span className="chat-time">{msg.timestamp}</span>
              </div>
            ))}
            {isTyping && (
              <div className="chat-bubble-wrap bot">
                <div className="chat-bubble bot typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-quick-replies">
            {quickReplies.map((reply) => (
              <button key={reply} type="button" onClick={() => handleSend(reply)} className="quick-reply-btn">
                {reply}
              </button>
            ))}
          </div>

          <form
            className="chatbot-input-row"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask about skills, experience, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" aria-label="Send message">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
