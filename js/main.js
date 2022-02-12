const accessToken = localStorage.getItem("strateegia_api_token");

if (accessToken == 'undefined') {
    console.log("No access token");
    window.alert("Authentication failed: No access token");
} else {
    console.log(accessToken);
    initializeProjectList(accessToken);
    getUser(accessToken).then((user) => {
        localStorage.setItem("user_id", user.id);
    });
}


