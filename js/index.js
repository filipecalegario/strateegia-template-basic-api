const btnLogin = document.getElementById("btnLogin");

btnLogin?.addEventListener("click", (e) => {
    const usernameElement = document.getElementById("username");
    const passwordElement = document.getElementById("password");

    const username = usernameElement.value;
    const password = passwordElement.value;

    auth(username, password).then((token) => {
        console.log(token);
        localStorage.setItem("strateegia_api_token", token);
        location.href = "main.html";
    });
});