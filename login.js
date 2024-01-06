function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this JSON with a server-side authentication mechanism
    const users = [
        { "username": "Chirag", "password": "123123" },
        { "username": "admin", "password": "123456789" },
        { "username": "rahul", "password": "123456789" },
        { "username": "pravardhan", "password": "123456789" },
        { "username": "suraj", "password": "123456789" },
        // Add more users as needed
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect to the dummy page
        window.location.href = 'dashboard.html';
    } else {
        // Failed login
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
}


function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const messageInput = document.getElementById('chat-input');
    const message = messageInput.value;
    
    const chatMessages = document.getElementById('chat-messages');
    
    // Display user message
    chatMessages.innerHTML += `<p>User: ${message}</p>`;
    
    // Simulate a simple chatbot reply
    setTimeout(() => {
        chatMessages.innerHTML += `<p>Chatbot: Hi! I'm a chatbot. You said: ${message}. Thank you for your feedback</p>`;
    }, 500);
    
    messageInput.value = '';
}

