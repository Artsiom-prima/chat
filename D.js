document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const loader = document.querySelector('.loader');

    if (userInput.value.trim() === '') return;

    // Добавляем сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerHTML = `<p>${userInput.value}</p>`;
    chatBox.appendChild(userMessage);

    // Показываем анимацию загрузки
    loader.style.display = 'block';

    // Очищаем поле ввода
    userInput.value = '';

    // Имитация ответа от бота (можно заменить на реальный запрос к AI)
    setTimeout(() => {
        loader.style.display = 'none';
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerHTML = `<p>Спасибо за ваш запрос! Вот несколько вариантов туров...</p>`;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}