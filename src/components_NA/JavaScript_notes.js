// Requirements

const typingForm = document.querySelector('.typing-form')
const chatList = document.querySelector('.chat-list')

let userMessage = null

const createMessageElement = (content, className) => {
    const div = document.createElement('div')
    div.classList.add("message", className)
    div.innerHTML = content
    return div
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector('.typing-input').value.trim()
    if(!userMessage) return;

    const html = `<div className="message-content">
                <img src="robot.png" alt="Avatar Image" className="avatar" />
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>`
    const outgoingMessageDiv = createMessageElement(html, 'outgoing')
    outgoingMessageDiv.querySelector('.text').innerText = userMessage
    chatList.appendChild(outgoingMessageDiv)
}

typingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    handleOutgoingChat()
})    