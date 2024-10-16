import React from 'react'

export default function Output() {

  return (
    <section className="chat-list">

        <div className="message outgoing">
            <div className="message-content">
                <img src="robot.png" alt="Avatar Image" className="avatar" />
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>

        <div className="message incoming">
            <div className="message-content">
                <img src="gemini.svg" alt="Gemini Image" className="avatar" />
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <span class="icon fa-solid fa-copy"></span>
        </div>

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

    </section>
  )
}
