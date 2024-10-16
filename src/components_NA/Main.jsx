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

    </section>
  )
}