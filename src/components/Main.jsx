import React from 'react'

export default function Main() {
  return (
    <section className="typing-area">
        <form action="#" className="typing-form">
            <div className="input-wrapper">
                <input 
                    type="text"
                    placeholder="Enter a prompt here" 
                    className="typing-input"
                    required />
                <button><i class="icon fa-solid fa-paper-plane"></i></button>
            </div>
            <div className="action-buttons">
                <i class="icon fa-regular fa-sun"></i>
                <i class="icon fa-regular fa-trash-can"></i>
            </div>
        </form>
        <p className="disclaimer-text">
            MicroGPT may display inaccurate information, including about people, ensure to double-check its response.<br/>
            by Izza Sinatrya
        </p>
    </section>
  )
}
