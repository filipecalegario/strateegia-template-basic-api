import { getAllProjects, getProjectById, getAllDivergencePointsByMapId, getCommentsGroupedByQuestionReport } from "https://unpkg.com/strateegia-api/strateegia-api.js";

let users = [];
const accessToken = localStorage.getItem("strateegiaAccessToken");

export async function initializeProjectList() {
    const labs = await getAllProjects(accessToken)
    console.log("getAllProjects()");
    console.log(labs);
    let listProjects = [];
    for (let i = 0; i < labs.length; i++) {
        let currentLab = labs[i];
        if (currentLab.lab.name == null) {
            currentLab.lab.name = "Personal";
        }
        for (let j = 0; j < currentLab.projects.length; j++) {
            const project = currentLab.projects[j];
            const newProject = {
                "id": project.id,
                "title": project.title,
                "lab_id": currentLab.lab.id,
                "lab_title": currentLab.lab.name
            };
            listProjects.push(newProject);
        }
    }

    let options = d3.select("#projects-list");
    options.selectAll('option').remove();
    listProjects.forEach(function (project) {
        options.append('option').attr('value', project.id).text(`${project.lab_title} -> ${project.title}`);
    });
    options.on("change", () => {
        let selectedProject = d3.select("#projects-list").property('value');
        localStorage.setItem("selectedProject", selectedProject);
        console.log(selectedProject);
        updateMapList(selectedProject);
    });

    localStorage.setItem("selectedProject", listProjects[0].id);
    updateMapList(listProjects[0].id);
}

async function updateMapList(selectedProject) {
    users = [];
    let project = await getProjectById(accessToken, selectedProject);
    console.log("getProjectById()");
    console.log(project);
    project.users.forEach(user => {
        users.push({ id: user.id, name: user.name });
    });
    
    localStorage.setItem("users", JSON.stringify(users));

    let options = d3.select("#maps-list");
    options.selectAll('option').remove();
    project.maps.forEach(function (map) {
        options.append('option').attr('value', map.id).text(map.title);
    });
    options.on("change", () => {
        let selectedMap = d3.select("#maps-list").property('value');
        localStorage.setItem("selectedMap", selectedMap);
        console.log(selectedMap);
        updateDivPointList(selectedMap);
    });

    const mapId = project.maps[0].id;
    localStorage.setItem("selectedMap", mapId);
    updateDivPointList(mapId);
}

async function updateDivPointList(selectedMap) {
    getAllDivergencePointsByMapId(accessToken, selectedMap).then(map => {
        console.log("getAllDivergencePointsByMapId()");
        console.log(map);
        let options = d3.select("#divpoints-list");
        options.selectAll("option").remove();
        if (map.content.length > 0) {
            map.content.forEach(function (divPoint) {
                options.append("option").attr("value", divPoint.id).text(divPoint.tool.title);
            });
            options.on("change", () => {
                let selectedDivPoint = d3.select("#divpoints-list").property("value");
                setSelectedDivPoint(selectedDivPoint);
            });

            let initialSelectedDivPoint = map.content[0].id;
            setSelectedDivPoint(initialSelectedDivPoint);
        } else {
            console.log("Não há pontos de divergência associados ao mapa selecionado");
        }
    });
}

async function setSelectedDivPoint(divPointId) {
    localStorage.setItem("selectedDivPoint", divPointId);
    const questions = await getCommentsGroupedByQuestionReport(accessToken, divPointId);
    
    if (questions.length > 0) {
        console.log(questions);
    } else {
        console.log("Não há respostas associadas ao ponto de divergência selecionado");
    }
}