const presentationLogin = document.querySelector(".presentation-login");
const presentationRegister = document.querySelector(".presentation-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const login = document.querySelector(".login");
const register = document.querySelector(".register");

const loginClass = formLogin.classList;
const registerClass = formRegister.classList;

/* remove class */

function removeLogin() {
  login.classList.add("remove");
  login.classList.remove("add");
  register.classList.add("add");
  register.classList.remove("remove");
}

function removeRegister() {
  login.classList.remove("remove");
  login.classList.add("add");
  register.classList.add("remove");
  register.classList.remove("add");
}

function removeMobile() {
  loginClass.remove("animation-down");
  loginClass.remove("animation-down-top");
  registerClass.remove("animation-top-down");
  registerClass.remove("animation-top");
}

/* desktop */

function openRegister() {
  presentationRegister.classList.remove("animation-right");
  registerClass.remove("animation-left");
  presentationLogin.classList.add("animation-left");
  loginClass.add("animation-right");
  setTimeout(function () {
    return removeLogin();
  }, 900);
  return removeMobile();
}

function openLogin() {
  presentationLogin.classList.remove("animation-left");
  loginClass.remove("animation-right");
  presentationRegister.classList.add("animation-right");
  registerClass.add("animation-left");
  setTimeout(function () {
    return removeRegister();
  }, 900);
  return removeMobile();
}

/* mobile */

function openRegisterMobile() {
  loginClass.remove("animation-down-top");
  registerClass.remove("animation-top");
  loginClass.add("animation-down");
  registerClass.add("animation-top-down");
  setTimeout(function () {
    return removeLogin();
  }, 900);
}

function openLoginMobile() {
  registerClass.remove("animation-top-down");
  loginClass.remove("animation-down");
  registerClass.add("animation-top");
  loginClass.add("animation-down-top");
  setTimeout(function () {
    return removeRegister();
  }, 900);
}

function changeTheme() {
  document.body.classList.toggle("dark");
}
