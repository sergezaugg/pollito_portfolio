// --------------------------------
// Reusable project component
// --------------------------------

function createProject(title, description, links, image) {

    const item = document.createElement("li");
    item.className = "project-item";

    // Project information
    const info = document.createElement("div");
    info.className = "project-info";

    // Project title
    const heading = document.createElement("h3");
    heading.textContent = title;
    info.appendChild(heading);

    // Project description
    const descriptionBox = document.createElement("div");
    descriptionBox.className = "project-description";

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    descriptionBox.appendChild(paragraph);
    info.appendChild(descriptionBox);

    // Project links
    const linksBox = document.createElement("div");
    linksBox.className = "project-links";

    links.forEach((link) => {

        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.text;

        if (link.external) {
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
        }

        linksBox.appendChild(anchor);
    });

    info.appendChild(linksBox);

    // Project preview
    const preview = document.createElement("div");
    preview.className = "project-preview";

    const img = document.createElement("img");
    img.src = image;
    img.className = "preview-img";
    img.alt = title;

    preview.appendChild(img);

    item.append(info, preview);

    return item;
}