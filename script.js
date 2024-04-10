// Adicionando evento de clique para animação do campo de usuário
const usernameInput = document.getElementById('username');

usernameInput.addEventListener('click', function() {
    this.parentNode.classList.add('input-focused');
});

// Adicionando evento de clique fora do campo de usuário para remover a classe de foco
document.addEventListener('click', function(event) {
    if (!usernameInput.contains(event.target)) {
        usernameInput.parentNode.classList.remove('input-focused');
    }
});
