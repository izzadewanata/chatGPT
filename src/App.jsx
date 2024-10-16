import { useState } from "react";

function App() {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // API Configuration
  const API_KEY = "AIzaSyAsEvSJ1WEU5ix3Yjuv6xQAyQRf4OBAL-g"; // Add your API key
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  // Create message element
  const createMessageElement = (content, messageClass, isLoading) => {
    return (
      <div className={`message ${messageClass}`}>
        <div className="message-content">
          <img src={messageClass === "incoming" ? "gemini.svg" : "robot.png"} alt="Avatar Image" className="avatar" />
          <p className="text">{content}</p>
          {isLoading && (
            <div className="loading-indicator">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
          )}
        </div>
        <span className="icon fa-solid fa-copy"></span>
      </div>
    );
  };

  // Fetch response from the API based on user message
  const generateAPIResponse = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userMessage }],
            },
          ],
        }),
      });

      const data = await response.json();
      const apiResponse = data?.candidates[0].content.parts[0].text;
      setMessages((prevMessages) =>
        prevMessages.map((msg, idx) =>
          idx === prevMessages.length - 1
            ? { ...msg, content: apiResponse, loading: false }
            : msg
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle sending outgoing chat messages
  const handleOutgoingChat = (e) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: userMessage, messageClass: "outgoing", loading: false },
    ]);
    setUserMessage(""); // clear input field

    // Show loading animation and request API response
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: "", messageClass: "incoming", loading: true },
    ]);

    setTimeout(() => {
      generateAPIResponse();
    }, 500);
  };

  return (
    <>
      <header className="header">
        {/* Greeting */}
        <h2 className="title">Hello, there!</h2>
        <h4 className="subtitle">How can I help you today?</h4>

        {/* Suggestion List */}
        <ul className="suggestion-list">
          <li className="suggestion">
            <h4 className="text">Show me the latest news today</h4>
            <i className="icon fa-solid fa-newspaper"></i>
          </li>
          <li className="suggestion">
            <h4 className="text">What's the weather today in Sydney?</h4>
            <i className="icon fa-solid fa-temperature-half"></i>
          </li>
          <li className="suggestion">
            <h4 className="text">Who was the 16th president of the United States?</h4>
            <i className="icon fa-solid fa-book-open"></i>
          </li>
          <li className="suggestion">
            <h4 className="text">Calculate the square root of 144</h4>
            <i className="icon fa-solid fa-calculator"></i>
          </li>
        </ul>
      </header>

      <div className="chat-list">
        {messages.map((msg, index) => (
          <div key={index}>
            {createMessageElement(msg.content, msg.messageClass, msg.loading)}
          </div>
        ))}
      </div>

      <div className="typing-area">
        <form action="#" className="typing-form" onSubmit={handleOutgoingChat}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="typing-input"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            />
            <button type="submit" className="icon fa-solid fa-paper-plane"></button>
          </div>
          <div className="action-buttons">
            <i className="icon fa-regular fa-sun"></i>
            <i className="icon fa-regular fa-trash-can"></i>
          </div>
        </form>

        <p className="note">
          MicroGPT may display inaccurate information. Ensure to double-check its response.
          <br />
          by Izza Sinatrya
        </p>
      </div>
    </>
  );
}

export default App;
