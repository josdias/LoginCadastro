// Selecionando elementos do DOM
const loginBtn = document.querySelector('#login-btn');
const closeBtn = document.querySelector('#close-btn');
const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const switchToRegisterBtn = document.querySelector('#switch-to-register');
const switchToLoginBtn = document.querySelector('#switch-to-login');

// Função para exibir a tela de login
function showLogin() {
  loginForm.style.display = 'block';
}

// Função para fechar a tela de login
function closeLogin() {
  loginForm.style.display = 'none';
}

// Função para exibir a tela de cadastro
function showRegister() {
  registerForm.style.display = 'block';
}

// Função para fechar a tela de cadastro
function closeRegister() {
  registerForm.style.display = 'none';
}

// Adicionando evento de clique no botão de login
loginBtn.addEventListener('click', showLogin);

// Adicionando evento de clique no botão de fechar tela de login
closeBtn.addEventListener('click', closeLogin);

// Adicionando evento de clique no botão de cadastro
switchToRegisterBtn.addEventListener('click', showRegister);

// Adicionando evento de clique no botão de fechar tela de cadastro
switchToLoginBtn.addEventListener('click', closeRegister);

