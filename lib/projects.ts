export type ProjectVisual = { src: string; alt: string; caption: string };
export type ProjectMaterial = { label: string; href: string; detail?: string };
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
  caveat?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "exoplanet-atmosphere-surrogates", number: "01", category: "M.Sc. thesis · Computational astrophysics · 2025–26",
    title: "Surrogate models for exoplanet atmospheres",
    summary: "Testing whether compact machine-learning models can reproduce detailed disequilibrium chemistry calculations for the hot Jupiter HD 189733b.",
    cover: "/images/cover-exoplanet.webp", coverAlt: "Generated illustration of a giant exoplanet above its glowing atmosphere",
    overview: [
      "This thesis studies disequilibrium chemistry in the atmosphere of HD 189733b, where vertical transport and photochemistry can shift molecular abundances away from local chemical equilibrium.",
      "The goal is to explore machine-learning surrogates that approximate expensive atmospheric calculations while preserving a meaningful comparison to established chemistry tools.",
    ],
    approach: [
      "Build atmospheric inputs from temperature-pressure profiles and physical parameters, then compare predicted abundance profiles against reference calculations.",
      "Explore LSTM and autoencoder approaches for representing vertical structure and mapping the inputs to molecular mixing ratios. Validate against FastChem and VULCAN outputs.",
    ],
    outcomes: ["A thesis-stage modelling and validation workflow focused on H₂O, CH₄, CO, and CO₂ profiles.", "The supplied plots document model architecture and comparison against VULCAN reference cases; they do not imply a published benchmark or completed retrieval system."],
    tags: ["Scientific ML", "LSTM", "Autoencoders", "Atmospheric chemistry"],
    visuals: [
      { src: "/images/exoplanet-surrogate.webp", alt: "Surrogate model predictions compared with VULCAN reference profiles", caption: "Validation plots from the supplied thesis materials." },
      { src: "/images/exoplanet-architecture.svg", alt: "Simplified workflow diagram for the exoplanet abundance surrogate", caption: "Redrawn from the supplied architecture figure for readability; FastChem and VULCAN are shown as validation references." },
    ],
    materials: [{ label: "View thesis PDF", href: "/materials/exoplanet-atmosphere-thesis.pdf", detail: "Thesis material supplied for the portfolio" }],
    caveat: "The source thesis PDF is not published here; the figures are included as a concise project visual. Replace the thesis link with a public manuscript or repository when available.",
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
    title: "Predictive irrigation for low-cost agriculture",
    summary: "A fellowship project exploring sensor-informed irrigation recommendations with Jain Irrigation, alongside published work on machine learning for sustainable agriculture.",
    cover: "/images/cover-irrigation.webp", coverAlt: "Generated illustration of sustainable agriculture with smart irrigation sensors",
    overview: [
      "As project lead, I worked on predictive irrigation with Jain Irrigation, combining environmental and IoT sensor data to support water-aware decisions.",
      "The work connects an applied fellowship project with broader research on integrating IoT and machine learning into low-cost sustainable agriculture.",
    ],
    approach: ["Use sensor and environmental context to inform irrigation decisions.", "A LinkedIn project post describes the model as showing potential to save up to 70% of water. This is a reported potential outcome, not an independently audited or universally transferable result."],
    outcomes: ["Contributed to the Springer chapter on IoT4Irrigation and a first-author Elsevier chapter on predictive irrigation.", "The published workflow graphic below is from the supplied SpringerLink article assets."],
    tags: ["IoT", "Predictive analytics", "Sustainable agriculture"],
    visuals: [{ src: "/images/irrigation-publication-figure.webp", alt: "Workflow diagram from the IoT4Irrigation publication", caption: "Workflow figure from the supplied IoT4Irrigation article material." }],
    materials: [
      { label: "Elsevier chapter", href: "https://doi.org/10.1016/B978-0-443-24139-0.00022-9", detail: "First author · Predictive Irrigation: Current Practice and Future Prospects" },
      { label: "Springer chapter", href: "https://doi.org/10.1007/978-3-031-74701-4_24", detail: "Co-author · IoT4Irrigation" },
      { label: "Chanakya Fellowship certificate", href: "/materials/chanakya-fellowship-certificate.pdf" },
    ],
    caveat: "The up-to-70% water-saving figure is reported in a LinkedIn project post and the supplied CV. Underlying measurement details were not included in the source materials reviewed for this site.",
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

