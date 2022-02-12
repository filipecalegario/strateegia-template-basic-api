import { initializeProjectList } from "./project-list.js";
import { getUser } from "./strateegia-api.js";

const accessToken = localStorage.getItem("strateegiaAccessToken");

if (accessToken == 'undefined') {
    console.log("No access token");
    window.alert("Authentication failed: No access token");
} else {
    console.log(accessToken);
    initializeProjectList(accessToken);
    getUser(accessToken).then((user) => {
        localStorage.setItem("userId", user.id);
    });
}


