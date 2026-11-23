// --------------------------------
// contents of page stats
// --------------------------------

const projects = document.getElementById("projects-container");

projects.append(

    // Applied Stats Playground
    createProject(
        "Applied Stats Playground",
        `
        Explore fundamental concepts of regression modeling.
        `,
        [
            {
                text: "Live Shiny App",
                url: "https://serge-zaugg-jjdd0hpbdapyc.share.connect.posit.cloud/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/didactic_stats_app",
                external: true
            }
        ],
        "../pics/screenshot_appl_stats.png"
    ),

    // Random Effects / Mixed Models
    createProject(
        "Random Effects Models",
        `
        Explore the basic mechanics of mixed models and clustered data.
        `,
        [
            {
                text: "Live Shiny App",
                url: "https://serge-zaugg-pydjbphjadcd0.share.connect.posit.cloud/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/didactic_randeff_app",
                external: true
            }
        ],
        "../pics/screenshot_randeff.png"
    ),

    // Underpowered Research
    createProject(
        "Underpowered Research Undermines Science",
        `
        Explore the consequences of low statistical power, including Type M errors and the reliability of published research.
        `,
        [
            {
                text: "Live Shiny App",
                url: "https://serge-zaugg-jbd0hdajdppyc.share.connect.posit.cloud/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/type_m_error",
                external: true
            }
        ],
        "../pics/screenshot_underpowered.png"
    ),

    // ML Performance Metrics
    createProject(
        "Machine Learning Performance Metrics",
        `
        Explore and compare performance metrics used to evaluate machine learning models.
        `,
        [
            {
                text: "Live Streamlit App",
                url: "https://ml-performance-metrics.streamlit.app/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/ml_performance_metrics/",
                external: true
            }
        ],
        "../pics/screenshot_mlmetrics.png"
    ),

    // Pure Noise Features
    createProject(
        "Impact of Pure Noise Features on Predictive Performance",
        `
        Investigate how irrelevant features influence model performance and predictive accuracy.
        `,
        [
            {
                text: "Live Streamlit App",
                url: "https://pure-noise-features.streamlit.app/",
                external: true
            },
            {
                text: "GitHub",
                url: "https://github.com/sergezaugg/pure_noise_dashb/",
                external: true
            }
        ],
        "../pics/screenshot_purenoise.png"
    )

);
