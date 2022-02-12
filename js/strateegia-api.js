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

export async function getProjectById(token, project_id) {

    const response = await fetch(`${API_URL_PROJECTS}project/${project_id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getAllDivergencePointsByMapId(token, map_id) {

    const response = await fetch(`${API_URL_PROJECTS}map/${map_id}/divergence-point?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getMapById(token, map_id) {

    const response = await fetch(`${API_URL_PROJECTS}map/${map_id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getDivergencePointById(token, content_id) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${content_id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getParentComments(token, content_id, question_id) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${content_id}/question/${question_id}/comment?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await response.json();

    return data;
}

export async function getCommentsGroupedByQuestionReport(token, content_id) {

    const response = await fetch(`${API_URL_PROJECTS}divergence-point/${content_id}/comment/report?size=5000`, {
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