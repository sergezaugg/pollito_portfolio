

const projects = document.getElementById("projects-container");

projects.append(

    createProject(

        "Detecting Peat in Horticultural Substrates",

        `Peatland drainage drives biodiversity loss, highlighting the need for reliable peat monitoring in commercial substrates.
        This project, funded by FOEN and conducted by Uni Neuchâtel and METAS, developed a
        decision support system to detect peat-specific testate amoebae in microscopy images.
        I led key technical workflows and developed a data augmentation procedure, a YOLO-based ensemble model 
        and integrated this to a decision support system.`,
        [
            {
                text: "Methods Article",
                url: "https://www.cambridge.org/core/journals/environmental-data-science/article/decision-support-for-the-identification-of-testate-amoebae-in-microscopy-images-to-detect-peat-presence-in-horticultural-substrates/49281C6324957B472185BDA5B154005C",
                external: true
            },
            {
                text: "Official Report",
                url: "https://www.bafu.admin.ch/de/torf#Forschung-und-Beratung",
                external: true
            }
        ],
        "../pics/peat.png"
    ),

    // Add more epidemiology projects here

    createProject(

        "Project Providence - Ecological Nonitoring",


        `Project Providence monitors the ecological health of the Amazon rainforest through acoustic monitoring.
        Launched in 2016 by the Mamirauá Institute and the Laboratory of Applied Bioacoustics, the project 
        applies machine learning to large-scale bioacoustic data.
        I coordinated key workflows, including data annotation, custom annotation tool 
        development, data management, teaching, and documentation.
        I developed feature extraction methods and end-to-end deep learning pipelines.
        `,

        [
            {
                text: "Methods Article",
                url: "https://arxiv.org/abs/2312.03666v1",
                external: true
            },
            {
                text: "Application",
                url: "https://www.nature.com/articles/s41598-023-36518-1?error=cookies_not_supported&code=86a39bf5-5739-42b5-b65a-8abf0aa50f6c",
                external: true
            }
        ],
        "../pics/providence.png"
    ),



    createProject(

        "Cardiology & Intracoronary Imaging",

        `I supported cardiology research involving intracoronary imaging, dedicated statistician for multiple research projects.
        I worked closely with cardiologists to translate clinical research questions into appropriate analytical approaches, 
        developing tailored data preparation and statistical methods to address specific research questions.
        `,

        [
            {
                text: "Find multiple links to articles on G-scholar",
                url: "https://scholar.google.com/citations?user=knRLdEUAAAAJ&hl",
                external: true
            },
            // {
            //     text: "Application",
            //     url: "https://www.nature.com/articles/s41598-023-36518-1?error=cookies_not_supported&code=86a39bf5-5739-42b5-b65a-8abf0aa50f6c",
            //     external: true
            // }
        ],
        "../pics/screenshot_cardio.png"
    ),



   

);



