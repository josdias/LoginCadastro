const presentationLogin = document.querySelector(".presentation-login");
const presentationRegister = document.querySelector(".presentation-register");
const formLogin = document.querySelector(".form-login");
const fomrRegister = document.querySelector(".form-register")
const login = document.querySelector(".login");
const register = document.querySelector(".register");
setTimeout(remover, 2000);

function openRegister() {
  presentationRegister.classList.remove("animation-right");
  fomrRegister.classList.remove("animation-left");
  presentationLogin.classList.add("animation-left");
  formLogin.classList.add("animation-right");
  setTimeout(function () {
    login.classList.add("remove");
    login.classList.remove("add");
    register.classList.add("add");
    register.classList.remove("remove");
  }, 900);
}

function openLogin() {
  presentationLogin.classList.remove("animation-left");
  formLogin.classList.remove("animation-right");
  presentationRegister.classList.add("animation-right");
  fomrRegister.classList.add("animation-left");
  setTimeout(function () {
    login.classList.remove("remove");
    login.classList.add("add");
    register.classList.add("remove");
    register.classList.remove("add");
  }, 900);
}
