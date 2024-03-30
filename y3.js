function sendMessage() {
    var userInput = document.getElementById("user-input").value;

    // Display user message
    displayMessage(userInput, 'user');

    // Simulate bot response (replace with actual ChatGPT integration)
    setTimeout(function () {
        var botResponse = "This is a bot response to '" + userInput + "'";
        displayMessage(botResponse, 'bot');
    }, 500);
}

function displayMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");
    var chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    chatMessage.classList.add(sender);
    chatMessage.innerHTML = "<p>" + message + "</p>";
    chatBox.appendChild(chatMessage);
}
