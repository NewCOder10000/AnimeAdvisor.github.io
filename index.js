const searchBar = document.getElementById("item7");
const AnswerArea = document.getElementById("answerArea")

document.addEventListener("DOMContentLoaded", function() {
    searchBar.addEventListener("focus", function() {
        searchBar.placeholder = "";
    });

    searchBar.addEventListener("blur", function() {
        searchBar.placeholder = " 🔎 Search Anime...";
    });
});

/*document.getElementById('chatbot').addEventListener('click', function() {
    const chatbotButton = document.getElementById('chatbot');
    const chatbotWindow = document.getElementById('chatbotWindow');
    
    chatbotButton.classList.toggle('show');

    chatbotWindow.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    AnswerArea.addEventListener("focus", function() {
        this.placeholder = "";
    });

    AnswerArea.addEventListener("blur", function() {
        this.placeholder = " 🔎 Type...";
    });
});*/

window.watsonAssistantChatOptions = {
    integrationID: "d90ea5dc-2bbc-4ca5-9288-4b3f8442d5ce",
    region: "us-south",
    serviceInstanceID: "8a343fcd-a29d-491b-8752-f8d8259a3758",
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function() {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
}, 0);
