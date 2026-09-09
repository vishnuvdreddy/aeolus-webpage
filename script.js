document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");

    function renderProjects() {
        container.innerHTML = "";

        projectsData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div>
                    <span class="card-tag">${item.category}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="card-footer">
                    <span>Status: ${item.status}</span>
                </div>
            `;

            container.appendChild(card);
        });
    }
    renderProjects();
});