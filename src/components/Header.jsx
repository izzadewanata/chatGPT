import React from 'react'

export default function Header() {
  return (
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
                <h4 className="text">What's weather in Sydney today?</h4>
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
  )
}
