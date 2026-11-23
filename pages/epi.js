// --------------------------------
// contents of page more
// --------------------------------

const projects = document.getElementById("projects-container");

projects.append(

    createProject(
        "Global Influenza Explorer",
        `
        Explore global Influenza detections using data from WHO FluNet.
        `,
        [
            {
                text: "Live Streamlit App",
                url: "https://flunet-explorer.streamlit.app/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/10_flunet_dashboard",
                external: true
            }
        ],
        "../pics/screenshot_glo_inf_expl.png"
    ),

    createProject(
        "Swiss Influenza Monitor",
        `
        Explore Swiss Influenza detections using data from FOPH.
        `,
        [
            {
                text: "Live Streamlit App",
                url: "https://ch-flu-explorer.streamlit.app/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/infectious_desease_mon",
                external: true
            }
        ],
        "../pics/screenshot_sw_infl_mon.png"
    ),

    createProject(
        "Swiss Infectious Disease Explorer",
        `
        Explore detections of multiple disease using data from FOPH.
        `,
        [
            {
                text: "Live Streamlit App",
                url: "https://swiss-infectious-disease-explorer.streamlit.app/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/12_infectious_desease_ch/",
                external: true
            }
        ],
        "../pics/screenshot_swi_epi.png"
    ),

);



