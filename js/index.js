import { auth } from "./strateegia-api.js";

function login() {
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", (e) => {
        console.log("btnLogin clicked");
        const usernameElement = document.getElementById("username");
        const passwordElement = document.getElementById("password");

        const username = usernameElement.value;
        const password = passwordElement.value;

        auth(username, password).then((token) => {
            console.log(token);
            localStorage.setItem("strateegiaAccessToken", token);
            location.href = "main.html";
        });
    });
}

login();