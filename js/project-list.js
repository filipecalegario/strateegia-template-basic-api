function initializeProjectList() {
    getAllProjects(access_token).then(labs => {
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
                console.log(`${currentLab.lab.name} -> ${project.title}`);
                listProjects.push({
                    "id": project.id,
                    "title": project.title,
                    "lab_id": currentLab.lab.id,
                    "lab_title": currentLab.lab.name
                });
            }
        }
        // Using d3 to create the list of projects
        let options = d3.select("#projects-list")
            .on("change", () => {
                // Print the selected project id
                let selected_project = d3.select("#projects-list").property('value');
                console.log(selected_project);
            })
            .selectAll("option")
            .data(listProjects);
        options.enter()
            .append("option")
            .attr("value", (d) => { return d.id })
            .text((d) => { return `${d.lab_title} -> ${d.title}` });
    });
}