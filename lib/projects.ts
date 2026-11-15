export type ProjectVisual = { src: string; alt: string; caption: string };
export type ProjectMaterial = { label: string; href: string; detail?: string };
export type ProjectStorySection = {
  heading: string;
  text: string;
  visual?: ProjectVisual;
};
export type PortfolioProject = {
  slug: string;
  number: string;
  category: string;
  title: string;
  summary: string;
  cover: string;
  coverAlt: string;
  overview: string[];
  approach: string[];
  outcomes: string[];
  tags: string[];
  visuals: ProjectVisual[];
  materials: ProjectMaterial[];
  materialsTitle?: string;
  storySections?: ProjectStorySection[];
  caveat?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "exoplanet-atmosphere-surrogates", number: "01", category: "M.Sc. thesis · Computational astrophysics · 2025–26",
    title: "Retrieving Disequilibrium Chemical Abundances of Exoplanets using Machine Learning",
    summary: "A physics-based hot-Jupiter disequilibrium-chemistry framework paired with Autoencoder and LSTM surrogates for atmospheric retrieval and parameter estimation.",
    cover: "/images/cover-exoplanet.webp", coverAlt: "Generated illustration of a giant exoplanet above its glowing atmosphere",
    overview: [
      "This research develops a physics-based disequilibrium-chemistry framework for hot-Jupiter atmospheres, incorporating chemical kinetics, vertical mixing, and photochemistry. The supplied temperature–pressure profile and abundance figures document model inputs and outputs for HD 189733b.",
      "Neural-network surrogate models built with Autoencoders and LSTM architectures are used to reproduce atmospheric abundance profiles and support faster atmospheric retrieval and parameter-estimation workflows.",
    ],
    approach: [
      "Developed a physics-based disequilibrium chemistry framework for hot Jupiter atmospheres incorporating chemical kinetics, vertical mixing, and photochemistry.",
      "Developed neural-network surrogate models using Autoencoders and LSTM architectures to accelerate atmospheric retrieval and parameter-estimation workflows.",
      "Applied Scientific Machine Learning, surrogate modelling, numerical optimisation, and computational physics to reproduce atmospheric abundance profiles while reducing computational cost.",
      "Benchmarked the framework against VULCAN and FastChem simulations for validation and performance evaluation.",
    ],
    outcomes: ["The supplied figures show equilibrium and vertically mixed abundance profiles, FastChem comparison cases at 1080 K and 1200 K, and surrogate-fidelity diagnostics on a VULCAN test set.", "The linked thesis and supporting documents provide the detailed methodology, figures, and project context."],
    tags: ["Scientific ML", "LSTM", "Autoencoders", "Atmospheric retrieval", "Exoplanets"],
    visuals: [
      { src: "/images/exoplanet-temperature-pressure-profile.webp", alt: "Temperature-pressure profile for the HD 189733b atmospheric model", caption: "Temperature–pressure profile used for the HD 189733b model." },
      { src: "/images/exoplanet-equilibrium-profile.webp", alt: "Equilibrium CH4, CO, CO2, and H2 mixing-ratio profiles by pressure", caption: "Equilibrium CH₄, CO, CO₂, and H₂ mixing-ratio profiles." },
      { src: "/images/exoplanet-vulcan-benchmark.webp", alt: "Vertical mixing abundance profiles comparing the custom chemistry solver with VULCAN", caption: "1D vertical-mixing benchmark: custom chemistry solver compared with VULCAN." },
      { src: "/images/exoplanet-fastchem-1080k.webp", alt: "Chemical species time evolution compared with FastChem at 1080 kelvin", caption: "Time evolution of chemical species compared with FastChem at 1080 K." },
      { src: "/images/exoplanet-fastchem-1200k.webp", alt: "Chemical species time evolution compared with FastChem at 1200 kelvin", caption: "Time evolution of chemical species compared with FastChem at 1200 K." },
      { src: "/images/exoplanet-surrogate-fidelity.webp", alt: "VULCAN test-set surrogate fidelity plots with per-species RMSE, parity, and mixing-ratio profiles", caption: "Surrogate fidelity on the VULCAN test set: per-species RMSE, parity, and sample mixing-ratio profiles." },
      { src: "/images/exoplanet-thesis-presentation.webp", alt: "Subhra presenting disequilibrium chemistry research to an audience", caption: "Presenting the disequilibrium-chemistry work." },
    ],
    materialsTitle: "Thesis & supporting documentation",
    materials: [
      { label: "Master’s thesis", href: "/materials/exoplanet/masters-thesis.pdf", detail: "Machine Learning Surrogate Modelling of Disequilibrium Chemistry in Exoplanet Atmospheres · 79 pages" },
      { label: "Machine-learning surrogate modelling report", href: "/materials/exoplanet/machine-learning-surrogate-modelling.pdf", detail: "Retrieving Disequilibrium Chemical Abundances of Exoplanets with Machine Learning · 39 pages" },
      { label: "Supplementary disequilibrium chemistry document", href: "/materials/exoplanet/retrieving-disequilibrium-chemistry.pdf", detail: "22-page supplied document; its opening title page still contains generic template placeholders." },
    ],
    storySections: [
      { heading: "Atmospheric structure", text: "The temperature–pressure profile defines the atmospheric layers used to study HD 189733b and provides physical context for the chemistry calculations.", visual: { src: "/images/exoplanet-temperature-pressure-profile.webp", alt: "Temperature-pressure profile for the HD 189733b atmospheric model", caption: "Model temperature as a function of pressure." } },
      { heading: "Equilibrium chemistry", text: "The baseline abundance profiles track key carbon-bearing molecules and hydrogen through the atmosphere, before considering transport-driven disequilibrium.", visual: { src: "/images/exoplanet-equilibrium-profile.webp", alt: "Equilibrium CH4, CO, CO2, and H2 mixing-ratio profiles by pressure", caption: "Equilibrium CH₄, CO, CO₂, and H₂ mixing ratios across pressure levels." } },
      { heading: "Vertical mixing benchmark", text: "Vertical transport can reshape species abundances. This comparison places the custom 1D solver alongside VULCAN reference profiles.", visual: { src: "/images/exoplanet-vulcan-benchmark.webp", alt: "Vertical mixing abundance profiles comparing the custom chemistry solver with VULCAN", caption: "Custom solver and VULCAN vertical-mixing profiles." } },
      { heading: "FastChem comparisons", text: "The chemistry evolution plots compare model species against FastChem at two temperatures, 1080 K and 1200 K.", visual: { src: "/images/exoplanet-fastchem-1080k.webp", alt: "Chemical species time evolution compared with FastChem at 1080 kelvin", caption: "Species time evolution at 1080 K." } },
      { heading: "A second temperature case", text: "The 1200 K case provides a second validation condition for comparing the model’s evolving chemical abundances with FastChem.", visual: { src: "/images/exoplanet-fastchem-1200k.webp", alt: "Chemical species time evolution compared with FastChem at 1200 kelvin", caption: "Species time evolution at 1200 K." } },
      { heading: "Neural-network surrogate", text: "Autoencoder and LSTM surrogate models are assessed against VULCAN test data. The supplied diagnostics show per-species error, parity, and example abundance profiles.", visual: { src: "/images/exoplanet-surrogate-fidelity.webp", alt: "VULCAN test-set surrogate fidelity plots with per-species RMSE, parity, and mixing-ratio profiles", caption: "Surrogate fidelity: species RMSE, parity plot, and sample profiles." } },
      { heading: "Research presentation", text: "Sharing the disequilibrium chemistry work and its modeling approach with an audience.", visual: { src: "/images/exoplanet-thesis-presentation.webp", alt: "Subhra presenting disequilibrium chemistry research to an audience", caption: "Presentation of the master’s thesis research." } },
    ],
  },
  {
    slug: "care-load-forecasting", number: "02", category: "Unified Mentor · Forecasting · 2026",
    title: "Care-load and placement-demand forecasts",
    summary: "A historical time-series benchmark comparing baseline, statistical, and machine-learning forecasts across multiple planning horizons.",
    cover: "/images/cover-forecasting.webp", coverAlt: "Generated abstract visualization of a time-series forecast",
    overview: [
      "This project benchmarks forecasting approaches on historical U.S. Unaccompanied Children programme care-load data and presents the results through an interactive Streamlit dashboard.",
      "The evaluation emphasizes walk-forward validation and comparisons by forecast horizon, rather than relying on a single train/test split.",
    ],
    approach: [
      "Compare SARIMA, persistence, exponential smoothing, random forest, rolling averages, and gradient boosting.",
      "Evaluate forecasts at 1–7, 8–14, and 15–30 day lead bands using a seven-origin historical backtest. The project repository includes the workflow, evaluation plots, and dashboard source.",
    ],
    outcomes: ["SARIMA recorded the lowest MAE among the compared models in each of the reported lead bands.", "Reported MAE values: 18.47 (1–7 days), 42.95 (8–14 days), and 103.73 (15–30 days). These are benchmark results for the project’s evaluated historical sample."],
    tags: ["Time series", "SARIMA", "Rolling-origin validation", "Streamlit"],
    visuals: [
      { src: "/images/care-load-mae.webp", alt: "Walk-forward mean absolute error by model and forecast lead time", caption: "Walk-forward MAE comparison across six models and three forecast lead bands." },
      { src: "/images/care-load-forecast.webp", alt: "Historical and forecast care-load series from the project dashboard", caption: "Example historical series and forecast visualization from the project repository." },
      { src: "/images/rolling-origin.webp", alt: "Diagram of rolling-origin evaluation for time-series forecasting", caption: "Rolling-origin evaluation keeps the forecast horizon visible in the validation process." },
      { src: "/images/forecast-workflow.webp", alt: "Project workflow for forecasting and dashboard reporting", caption: "Data, model evaluation, and dashboard workflow documented in the repository." },
    ],
    materials: [
      { label: "Source repository", href: "https://github.com/asdfdfghgh/PREDICTIVE-FORECASTING-CARE-LOAD-PLACEMENT" },
      { label: "Interactive dashboard", href: "https://predictive-forecasting-care-load-placement-dii84trtc6fqus3fhj5.streamlit.app/" },
      { label: "Project report PDF", href: "https://github.com/asdfdfghgh/PREDICTIVE-FORECASTING-CARE-LOAD-PLACEMENT/blob/main/forecasting_care_load_placement.pdf" },
    ],
    caveat: "This is a planning prototype, not an operationally validated or live-connected service. Its included dataset ends in December 2025, omits Saturdays, and has other missing calendar dates. Refresh and validate the source data before any operational use. The dashboard’s “accuracy” display is 100 − MAPE, not a probability.",
  },
  {
    slug: "predictive-irrigation", number: "03", category: "TIH-IoT Chanakya Fellowship · IIT Bombay · 2023–24",
    title: "Predictive Irrigation Recommendations",
    summary: "An IoT-enabled, machine-learning irrigation decision system developed with Jain Irrigation during the IoT-Chanakya Fellowship (2023–24).",
    cover: "/images/cover-irrigation.webp", coverAlt: "Generated illustration of sustainable agriculture with smart irrigation sensors",
    overview: [
      "Over the 2023–24 IoT-Chanakya Fellowship, I led a team under the supervision of Dr. Subhakar Mishra. Jain Irrigation Systems Ltd. set us the challenge of designing a predictive irrigation system to optimize water use through data-driven decisions.",
      "Open agricultural datasets were limited, so we collected our own measurements using a network of sensors. We trained a neural network on the resulting time-series data to forecast conditions and help decide when and how much to irrigate.",
      "The project connected machine learning, IoT, and sustainable agriculture, and led to my first-author Elsevier chapter and a conference paper presented at Microsoft ICICBDA 2024 (Springer).",
    ],
    approach: [
      "Led development of machine-learning-based predictive irrigation models in collaboration with Jain Irrigation.",
      "Developed IoT-enabled recommendation systems for intelligent irrigation decision support, with the project reporting potential to reduce water wastage by up to 70%.",
      "Integrated environmental and sensor-based datasets for predictive irrigation.",
      "Contributed to peer-reviewed research on AI-driven sustainable agriculture.",
    ],
    outcomes: ["The project reported potential water savings of up to 70%; this is a project-reported result rather than an independently audited field estimate.", "This work shaped my first publication and my continuing interest in practical, data-driven sustainability."],
    tags: ["IoT", "Predictive irrigation", "Neural networks", "Sustainable agriculture"],
    visuals: [],
    storySections: [
      { heading: "Building a sensor network", text: "With few open agricultural datasets available for the challenge, our team collected measurements using connected sensors and trial planting setups.", visual: { src: "/images/irrigation-sensor-trial.webp", alt: "Sensor-connected plant trays used in the predictive irrigation project", caption: "Sensor-connected planting setup for collecting project data." } },
      { heading: "Instrumented growing plots", text: "Soil-moisture sensors and connected electronics supplied time-series observations for model development and irrigation recommendations.", visual: { src: "/images/irrigation-sensor-setup.webp", alt: "IoT sensors and electronics connected to experimental plant pots", caption: "IoT sensor and electronics setup across experimental pots." } },
      { heading: "From measurements to irrigation decisions", text: "The workflow moves from crop and soil-moisture observations through network transfer and data preparation into model training and prediction, which informs an irrigation action.", visual: { src: "/images/irrigation-decision-workflow.webp", alt: "Workflow from crop and soil moisture sensing through model predictions to irrigation action", caption: "Project workflow: sensor data, preparation, model prediction, and irrigation action." } },
    ],
    materials: [
      { label: "Elsevier chapter · first author", href: "https://lnkd.in/exgE48i8", detail: "Predictive Irrigation: Current Practice and Future Prospects" },
      { label: "Microsoft ICICBDA 2024 paper · Springer", href: "https://lnkd.in/eDrKV6YE", detail: "Conference paper presented at ICICBDA 2024." },
      { label: "Springer IoT4Irrigation chapter", href: "https://doi.org/10.1007/978-3-031-74701-4_24", detail: "Related peer-reviewed work on IoT and machine learning for sustainable agriculture." },
      { label: "Chanakya Fellowship certificate", href: "/materials/chanakya-fellowship-certificate.pdf" },
    ],
    caveat: "The up-to-70% water-wastage reduction is a project-reported potential outcome. It should not be read as an independently audited or universal field result.",
  },
  {
    slug: "wildfire-remote-sensing", number: "04", category: "Research internship · IIT Indore · 2024",
    title: "Machine learning for wildfire detection",
    summary: "Remote-sensing and geospatial analysis for wildfire detection in Uttarakhand using satellite and environmental data sources.",
    cover: "/images/cover-wildfire.webp", coverAlt: "Generated illustration of a satellite monitoring a forest fire",
    overview: ["This research internship applied machine-learning and geospatial methods to wildfire detection using data covering Uttarakhand.", "The supplied CV names Sentinel, Landsat, GIS, and NASA Giovanni as project data sources."],
    approach: ["Combine satellite imagery and environmental context in a remote-sensing workflow.", "Explore how geospatial features and machine-learning methods can support detection and analysis."],
    outcomes: ["Research internship work at IIT Indore in 2024.", "A project-specific map or result figure was not among the supplied files, so the visual below is a schematic illustration rather than an output or satellite observation."],
    tags: ["Remote sensing", "Satellite imagery", "Geospatial analysis"],
    visuals: [],
    materials: [{ label: "Contact me for project details", href: "mailto:subhrajyotimishra.official@gmail.com?subject=Wildfire%20research%20project" }],
    caveat: "No project-specific imagery, report, or code was supplied for this internship; the schematic is illustrative only.",
  },
  {
    slug: "dermatrack-concept", number: "05", category: "TIH-IoT TDP-9 · Team proposal presentation",
    title: "DermaTrack multispectral imaging concept",
    summary: "A proposal-stage team concept for point-of-care skin and wound assessment using multispectral imaging and sensor inputs.",
    cover: "/images/cover-dermatrack.webp", coverAlt: "Generated concept illustration of a multispectral skin imaging device",
    overview: ["The supplied TDP presentation describes a proposed AI-assisted, non-contact platform for early skin and wound assessment.", "The concept combines multispectral imaging with proposed thermal, TEWL, and VOC sensor inputs. The deck is a team proposal; it does not document a finished medical device or validated diagnostic."],
    approach: ["Frame an integrated sensing concept and point-of-care workflow.", "Present planned engineering and validation work as objectives, not achieved results."],
    outcomes: ["A team presentation of the DermaTrack proposal.", "No prototype or diagnostic-performance evidence was included in the supplied presentation materials."],
    tags: ["Medtech concept", "Multispectral imaging", "AI-assisted screening"],
    visuals: [],
    materials: [{ label: "Request the team presentation", href: "mailto:subhrajyotimishra.official@gmail.com?subject=DermaTrack%20presentation" }],
    caveat: "Proposal-stage concept only. Nothing here should be interpreted as a validated medical product or clinical claim.",
  },
];

