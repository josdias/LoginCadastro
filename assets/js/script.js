const presentationLogin = document.querySelector(".presentation-login");
const presentationRegister = document.querySelector(".presentation-register");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const login = document.querySelector(".login");
const register = document.querySelector(".register");

function openRegister() {
  presentationRegister.classList.remove("animation-right");
  formRegister.classList.remove("animation-left");
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
  formRegister.classList.add("animation-left");
  setTimeout(function () {
    login.classList.remove("remove");
    login.classList.add("add");
    register.classList.add("remove");
    register.classList.remove("add");
  }, 900);
}

/* mobile */

function openRegisterMobile() {
  formLogin.classList.remove("animation-down-top");/* remove down top */
  formRegister.classList.remove("animation-top"); /* remove top */
  formLogin.classList.add("animation-down"); /* add down */
  formRegister.classList.add("animation-top-down"); /* add top down */
  setTimeout(function () {
    login.classList.add("remove");
    login.classList.remove("add");
    register.classList.add("add");
    register.classList.remove("remove");
  }, 900);
}

function openLoginMobile() {
  formRegister.classList.remove("animation-top-down"); /* remove top down */
  formLogin.classList.remove("animation-down"); /* remove down */
  formRegister.classList.add("animation-top"); /* add top */
  formLogin.classList.add("animation-down-top"); /* add down top */
  setTimeout(function () {
    login.classList.remove("remove");
    login.classList.add("add");
    register.classList.add("remove");
    register.classList.remove("add");
  }, 900);
}
