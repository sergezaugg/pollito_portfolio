// --------------------------------
// contents of page more
// --------------------------------


const projects = document.getElementById("projects-container");

projects.append(

    createProject(

        "Detecting Peat in Horticultural Substrates",

        `
        Peatland drainage drives biodiversity loss, highlighting the need for reliable peat monitoring in commercial substrates.
        This project, funded by FOEN and conducted by Uni Neuchâtel and METAS, developed a
        decision support system to detect peat-specific testate amoebae in microscopy images.
        I led key technical workflows and developed a data augmentation procedure, a YOLO-based ensemble model 
        and integrated this to a decision support system.
        `,

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


    createProject(

        "Project Providence - Ecological Monitoring",

        `
        Project Providence monitors the ecological health of the Amazon rainforest through acoustic monitoring.
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

        `
        I supported cardiology research involving intracoronary imaging, dedicated statistician for multiple research projects.
        I worked closely with cardiologists to translate clinical research questions into appropriate analytical approaches, 
        developing tailored data preparation and statistical methods to address specific research questions.
        `,

        [
            {
                text: "Find multiple links to articles on G-scholar",
                url: "https://scholar.google.com/citations?user=knRLdEUAAAAJ&hl",
                external: true
            },
            {
                text: " ",
                url: " ",
                external: true
            }
        ],
        "../pics/screenshot_cardio_small.png"
    ),


    createProject(

        "Marine Bioacoutics - Cetacean Monitoring",

        `
        Over several years, I collaborated to applied acoustic research by developing several 
        data pipelines (ML and later DL) to process large volumes of marine acoustic data, with a special focus on whales and dolphins. 
        This work contributed to both ecological research and applied environmental impact assessments (marine construction sites).
        `,

        [
            {
                text: "Methods Article I",
                url: "https://pubs.aip.org/asa/jasa/article-abstract/133/2/902/629588/Extraction-of-pulse-repetition-intervals-from?redirectedFrom=fulltext",
                external: true
            },
            {
                text: "Methods Article II",
                url: "https://www.sciencedirect.com/science/article/abs/pii/S0003682X1000112X",
                external: true
            },
            {
                text: "More on G-scholar",
                url: "https://scholar.google.com/citations?user=knRLdEUAAAAJ&hl",
                external: true
            },
        ],
        "../pics/sperm_whale.png"   
    ),


    createProject(

        "Bird Monitoring with Radar",

        `
        In my early career, I supported researchers and conservation professionals in developing analytical 
        methods to process large volumes of radar data, identify bird signatures and quantify migration 
        patterns over extended periods. This work involved close collaboration with domain specialists 
        and contributed to both ecological research and applied environmental impact assessments (windfarms).
        `,

        [
            {
                text: "Methods Article",
                url: "https://royalsocietypublishing.org/rsif/article-abstract/5/26/1041/65397/Automatic-identification-of-bird-targets-with?redirectedFrom=fulltext",
                external: true
            },
            {
                text: "Application",
                url: "https://nsojournals.onlinelibrary.wiley.com/doi/10.1111/ecog.04025",
                external: true
            }
        ],
        "../pics/screenshot_radar.png"
    ),





);



