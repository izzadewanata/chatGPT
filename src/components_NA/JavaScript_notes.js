const typingForm = document.querySelector('.typing-form')
const chatList = document.querySelector('.chat-list')

let userMessage = null

// API Configuration
const API_KEY = ""
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`

const createMessageElement = (content, ...classes) => {
    const div = document.createElement('div')
    div.classList.add("message", ...classes)
    div.innerHTML = content
    return div
}

//Fetch response from the API based on user message
const generateAPIResponse = async (incomingMessageDiv) => {
    const textElement = incomingMessageDiv.querySelector('.text')   //Get text element

    // Send a POST request to the API with the user's message
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    role: 'user',
                    parts: [{ text: userMessage }]
                }]
            })
        })

        const data = await response.json()

        const apiResponse = data?.candidates[0].content.parts[0].text
        textElement.innerText = apiResponse

    } catch (error) {
        console.log(error)
    } finally {
        incomingMessageDiv.classList.remove('loading')
    }
}

// Show a loading animation while waiting for the API response
const showLoadingAnimation = () => {
    const html = `<div className="message-content">
                <img src="gemini.svg" alt="Gemini Image" className="avatar" />
                <p className="text"></p>
                <div className="loading-indicator">
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                    <div className="loading-bar"></div>
                </div>
            </div>
            <span class="icon fa-solid fa-copy"></span>`
    const incomingMessageDiv = createMessageElement(html, 'outgoing', 'loading')
    chatList.appendChild(incomingMessageDiv)

    generateAPIResponse()
}

// Handle sending outgoing chat messages
const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector('.typing-input').value.trim()
    if(!userMessage) return;

    const html = `<div className="message-content">
                <img src="robot.png" alt="Avatar Image" className="avatar" />
                <p className="text"></p>
            </div>`
    const outgoingMessageDiv = createMessageElement(html, 'outgoing')
    outgoingMessageDiv.querySelector('.text').innerText = userMessage
    chatList.appendChild(outgoingMessageDiv)
}

typingForm.reset() // clear input field
setTimeout(showLoadingAnimation, 500)   // Show loading animation after a delay

typingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    handleOutgoingChat()
})    