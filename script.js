document.addEventListener("DOMContentLoaded", function() {
    var chatDisplay = document.getElementById("chat-display");
    var userInput = document.getElementById("user-input");
    var sendBtn = document.getElementById("send-btn");
  
    sendBtn.addEventListener("click", function() {
      var userMessage = userInput.value.trim();
      if (userMessage !== "") {
        displayMessage(userMessage, "user");
        processUserMessage(userMessage);
        userInput.value = "";
      }
    });
  
    function displayMessage(message, sender) {
      var messageDiv = document.createElement("div");
      messageDiv.className = "message " + sender;
      messageDiv.textContent = message;
      chatDisplay.appendChild(messageDiv);
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  
    function processUserMessage(message) {
      // Add your AI logic here to generate a response
      var response = generateResponse(message);
      displayMessage(response, "bot");
    }
       
    function generateResponse(message) {
      // Convert the user's message to lowercase for easier comparison
      var lowercaseMessage = message.toLowerCase();
      
      // Define some rules and corresponding responses
      var rules = [
        {
          pattern: "hi", 
          response: "Hi there!"
        },
        {
          pattern: "how are you",
          response: "I'm doing well, thank you!"
        },
        {
          pattern: "goodbye",
          response: "Goodbye! Have a great day!"
        },
        {
          pattern: "help",
          response: "How can I assist you?"
        },
        {
          pattern: "thank you",
          response: "You're welcome!"
        },
        {
          pattern: "default",
          response: "I'm sorry, I didn't understand that."
        }
      ];
      
      // Check if any rule matches the user's message
      for (var i = 0; i < rules.length; i++) {
        var pattern = rules[i].pattern;
        var response = rules[i].response;
      
        // If the user's message matches the pattern, return the corresponding response
        if (lowercaseMessage.includes(pattern)) {
          return response;
        }
      }
      
      // If no rule matches, return the default response
      return rules.find(rule => rule.pattern === "default").response;
    }
    
  });