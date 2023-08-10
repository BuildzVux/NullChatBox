const chatBox = document.getElementById('chat-box');
const nameContainer = document.getElementById('name-container');
const nameInput = document.getElementById('name-input');
const renameButton = document.getElementById('rename-button');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let userName = '';

renameButton.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    if (newName !== '') {
        userName = newName;
        nameInput.value = '';
        nameContainer.style.display = 'none';
    }
});

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();

    if (userName !== '' && message !== '') {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = `<span class="user-name">${userName}:</span> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
        messageInput.value = '';
    }
}
