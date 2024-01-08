function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageContent = messageInput.value;

    if (messageContent.trim() !== '') {
        const messageHistory = document.getElementById('message-history');
        const message = createMessage('John Doe', getCurrentTime(), messageContent);

        messageHistory.appendChild(message);
        messageInput.value = '';

        // Scroll to the latest message
        messageHistory.scrollTop = messageHistory.scrollHeight;
    }
}

function createMessage(sender, timestamp, content) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `<strong>${sender}</strong> - ${timestamp}<br>${content}`;
    return message;
}

function getCurrentTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}
