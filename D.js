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

    // ��������� ��������� ������������
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerHTML = `<p>${userInput.value}</p>`;
    chatBox.appendChild(userMessage);

    // ���������� �������� ��������
    loader.style.display = 'block';

    // ������� ���� �����
    userInput.value = '';

    // �������� ������ �� ���� (����� �������� �� �������� ������ � AI)
    setTimeout(() => {
        loader.style.display = 'none';
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.innerHTML = `<p>������� �� ��� ������! ��� ��������� ��������� �����...</p>`;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}