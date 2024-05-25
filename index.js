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

document.getElementById('chatbot').addEventListener('click', function() {
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
});
