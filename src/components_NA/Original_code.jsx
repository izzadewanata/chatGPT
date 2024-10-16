function App() {

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
                  <i class="icon fa-solid fa-newspaper"></i>
              </li>
              <li className="suggestion">
                  <h4 className="text">What's the weather today in Sydney?</h4>
                  <i class="icon fa-solid fa-temperature-half"></i>
              </li>
              <li className="suggestion">
                  <h4 className="text">Who was the 16th president of the United States?</h4>
                  <i class="icon fa-solid fa-book-open"></i>
              </li>
              <li className="suggestion">
                  <h4 className="text">Calculate the square root of 144</h4>
                  <i class="icon fa-solid fa-calculator"></i>
              </li>
          </ul>
        </header>
  
      <div className="chat-list">
          {/* <div className="message incoming loading">
              <div className="message-content">
                  <img src="gemini.svg" alt="Gemini Image" className="avatar" />
                  <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="loading-indicator">
                      <div className="loading-bar"></div>
                      <div className="loading-bar"></div>
                      <div className="loading-bar"></div>
                  </div>
              </div>
              <span class="icon fa-solid fa-copy"></span>
          </div> */}
      </div>
  
      <div className="typing-area">
          <form action="#" className="typing-form">
              <div className="input-wrapper">
                  <input 
                      type="text"
                      placeholder="Enter a prompt here" 
                      className="typing-input"
                      required />
                  <button className='icon fa-solid fa-paper-plane'></button>
              </div>
              <div className="action-buttons">
                  <i class="icon fa-regular fa-sun"></i>
                  <i class="icon fa-regular fa-trash-can"></i>
              </div>
          </form>
          
          <p className="note">
              MicroGPT may display inaccurate information. Ensure to double-check its response.<br/>
              by Izza Sinatrya
          </p>
  
      </div>
  
      </>
    )
  }
  
  export default App