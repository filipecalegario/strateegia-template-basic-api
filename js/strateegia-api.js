const API_URL_PROJECTS = 'https://api.strateegia.digital/projects/v1/';
const API_URL_USERS = 'https://api.strateegia.digital/users/v1/';

export async function auth(username, password) {
    const base64Login = btoa(`${username}:${password}`);

    const response = await fetch(`${API_URL_USERS}auth/signin`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64Login}`
        }
    });

    const data = await response.json();

    return data.access_token;
}

export async function getAllProjects(token) {

    const response = await fetch(`${API_URL_PROJECTS}project?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getProjectById(token, projectId) {

    const response = await fetch(`${API_URL_PROJECTS}project/${projectId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getAllDivergencePointsByMapId(token, mapId) {

    const response = await fetch(`${API_URL_PROJECTS}map/${mapId}/divergence-point?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getMapById(token, mapId) {

    const response = await fetch(`${API_URL_PROJECTS}map/${mapId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getDivergencePointById(token, contentId) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${contentId}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getParentComments(token, contentId, questionId) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${contentId}/question/${questionId}/comment?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getCommentsGroupedByQuestionReport(token, divPointId) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${divPointId}/comment/report?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getUser(token) {

    const response = await fetch(`${API_URL_USERS}user/me`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

// async function addKitToUser(token:string, kit: any) {
//     const JSONkit = JSON.stringify(kit);

//     const response = await fetch(`${API_URL}`, {
//         method: 'post',
//         headers:{
//             'Content-Type': 'application/json', 
//             'Authorization': `Bearer ${token}`
//         },
//         body: `${JSONkit}`
//     });

//     return await response.json();
// }