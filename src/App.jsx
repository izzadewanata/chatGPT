import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  const createMessageElement = (content, className) => {
    return (
      <div className={`message ${className}`}>
        <div className="message-content">
          <img src="robot.png" alt="Avatar Image" className="avatar" />
          <p className="text">{content}</p>
        </div>
      </div>
    );
  };

  const handleOutgoingChat = (e) => {
    e.preventDefault(); // Preventing Form from submitting
    const userMessage = e.target.querySelector('.typing-input').value.trim(); // Remove spaces from userMessage
    if (!userMessage) return;

    const outgoingMessageDiv = createMessageElement(userMessage, 'outgoing');
    setMessages([...messages, outgoingMessageDiv]);

    e.target.reset(); // Clear input field
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
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      <div className="typing-area">
        <form onSubmit={handleOutgoingChat} className="typing-form">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="typing-input"
              required
            />
            <button className="icon fa-solid fa-paper-plane"></button>
          </div>
          <div className="action-buttons">
            <i className="icon fa-regular fa-sun"></i>
            <i className="icon fa-regular fa-trash-can"></i>
          </div>
        </form>
        <p className="note">
          MicroGPT may display inaccurate information. Ensure to double-check
          its response.
          <br />
          by Izza Sinatrya
        </p>
      </div>
      
    </>
  );
}

export default App;
