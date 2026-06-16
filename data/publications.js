// SQuIGGLE publications + filter definitions.
// Edit the JSON-shaped object below to add / reorder / re-tag papers.
// Papers are rendered top-to-bottom in the order listed here.
// Each paper's `themes` controls which filter chips show it (any match = visible).
// Each paper's `tags` is the visible chip row on the card (purely cosmetic).
// `thumb` is an image filename inside images/; if missing, a forestgreen "Figure pending" placeholder shows.

window.SQUIGGLE_PUBS = {
  "filters": [
    { "key": "all",    "label": "All" },
    { "key": "sdss",    "label": "SDSS" },
    { "key": "desi",    "label": "DESI" },
    { "key": "survey", "label": "Demographics" },
    { "key": "gas",    "label": "Cold gas" },
    { "key": "pops",   "label": "Stellar pops" },
    { "key": "struct", "label": "Morphology & mergers" },
    { "key": "env", "label": "Environment" },
    { "key": "kin",    "label": "Kinematics" },
    { "key": "agn",    "label": "AGN"}
  ],
  "papers": [
    {
      "year": 2026,
      "authors": "Knowlton et al.",
      "title": "A Possible Protocluster of Galaxies Serendipitously Discovered in the Field of an Intermediate-Redshift Post-Starburst Galaxy",
      "teaser": "Imaging serendipitously reveals an overdensity of sub-mm-detected galaxies behind a SQuIGGLE post-starburst, tracing early-universe protocluster formation.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2026RNAAS..10..102K/abstract",
      "arxiv":  "https://arxiv.org/abs/2604.19651",
      "thumb":  "knowlton_2026.png",
      "themes": ["env","sdss"],
      "tags":   ["Environment"]
    },
    {
      "year": 2026,
      "authors": "D'Onofrio et al.",
      "title": "Molecular Gas Excitation in z ~ 0.7 Gas-Rich Post-Starburst Galaxies",
      "teaser": "ALMA CO line ratios constrain the excitation conditions of the cold molecular gas left behind in recently quenched massive galaxies, revealing moderately excited CO SLEDs.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2026ApJ..1003...52D/abstract",
      "arxiv":  "https://arxiv.org/abs/2602.17766",
      "thumb":  "donofrio_2026.png",
      "themes": ["gas","sdss"],
      "tags":   ["Cold gas"]
    },
    {
      "year": 2025,
      "authors": "Setton et al.",
      "title": "Buried Star Formation Cannot Explain the Rapidly Fading CO(2–1) Luminosity in Massive z ~ 0.7 Post-Starbursts",
      "teaser": "ALMA CO(2–1) and multi-wavelength SED fitting confirm the trend between burst age and molecular gas content, but star formation rates inferred using energy balance remain systematically uncertain and dependent on dust-prior choices.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2025AJ....170..351S/abstract",
      "arxiv":  "https://arxiv.org/abs/2509.00148",
      "thumb":  "setton_2025.png",
      "themes": ["gas","pops","sdss"],
      "tags":   ["Cold gas","Stellar pops"]
    },
    {
      "year": 2025,
      "authors": "Cenci et al.",
      "title": "The Nature of Post-Starburst Galaxies: Real Deal or Masquerading Impostors?",
      "teaser": "A simulation-grounded look at what selection-based post-starburst samples actually contain — and how many are bona fide rapid quenchers versus look-alikes.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2025arXiv250900146C/abstract",
      "arxiv":  "https://arxiv.org/abs/2509.00146",
      "thumb":  "cenci_2025.png",
      "themes": ["pops","survey","simulations"],
      "tags":   ["Stellar pops","Demographics","Simulations"]
    },
    {
      "year": 2025,
      "authors": "Kumar et al.",
      "title": "Meet the Neighbors: Gas-Rich \"Buddy Galaxies\" Are Common Around Recently Quenched Massive Galaxies",
      "teaser": "ALMA detects gas-rich companions in the immediate environments of SQuIGGLE post-starbursts, probing their halos.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2025RNAAS...9..243K/abstract",
      "arxiv":  "https://arxiv.org/abs/2509.03366",
      "thumb":  "kumar_2025.png",
      "themes": ["gas", "env","sdss"],
      "tags":   ["Cold gas", "Environment"]
    },
    {
      "year": 2025,
      "authors": "D'Onofrio et al.",
      "title": "Quenching Through Tidal Gas Removal in z ~ 0.7 Post-Starbursts",
      "teaser": "ALMA detections of molecular gas in the tidal tails of post-starburst galaxies suggest that tidal removal of cold gas is a viable quenching pathway.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2025arXiv250721249D/abstract",
      "arxiv":  "https://arxiv.org/abs/2507.21249",
      "thumb":  "donofrio25.png",
      "themes": ["gas", "struct","sdss"],
      "tags":   ["Cold gas", "Mergers"]
    },
    {
      "year": 2025,
      "authors": "Zhu et al.",
      "title": "Low Ongoing Star Formation Rates in Gas-Rich Post-Starburst Galaxies",
      "teaser": "Multi-tracer SFR limits confirm that the lingering molecular gas in SQuIGGLE post-starbursts is not forming stars at the expected rate.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2025ApJ...981...60Z/abstract",
      "arxiv":  "https://arxiv.org/abs/2501.16459",
      "thumb":  "zhu_2025.png",
      "themes": ["gas", "pops","sdss"],
      "tags":   ["Cold gas", "Stellar pops"]
    },
    {
      "year": 2024,
      "authors": "Zhang et al.",
      "title": "DESI Massive Post-Starburst Galaxies at z ~ 1.2 Have Compact Structures and Dense Cores",
      "teaser": "HST imaging of the DESI post-starburst sample reveals dense cores already in place at z > 1.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2024ApJ...976...36Z/abstract",
      "arxiv":  "https://arxiv.org/abs/2407.21257",
      "thumb":  "zhang_2024.png",
      "themes": ["struct","desi"],
      "tags":   ["Morphology"]
    },
    {
      "year": 2023,
      "authors": "Verrico et al.",
      "title": "Merger Signatures in Recently-Quenched Galaxies at z ~ 0.7",
      "teaser": "HSC imaging shows merger signatures are common in post-starburst galaxies, implying a link between major mergers and rapid quenching.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2022arXiv221116532V/abstract",
      "arxiv":  "https://arxiv.org/abs/2211.16532",
      "thumb":  "verrico_2022.png",
      "themes": ["struct","sdss"],
      "tags":   ["Morphology", "Mergers"]
    },
    {
      "year": 2023,
      "authors": "Setton et al.",
      "title": "DESI Survey Validation Spectra Reveal an Increasing Fraction of Recently Quenched Galaxies at z ~ 1",
      "teaser": "Early DESI spectra extend SQuIGGLE-style selection beyond SDSS, finding that the fraction of recently quenched massive galaxies rises sharply toward z ~ 1.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2023ApJ...947L..31S/abstract",
      "arxiv":  "https://arxiv.org/abs/2212.05070",
      "thumb":  "setton_2023.png",
      "themes": ["survey", "pops","desi"],
      "tags":   ["Demographics", "Stellar pops"]
    },
    {
      "year": 2022,
      "authors": "Spilker et al.",
      "title": "Star Formation Suppression by Tidal Removal of Cold Molecular Gas",
      "teaser": "A resolved ALMA case study of one SQuIGGLE galaxy losing its cold gas reservoir along an extended tidal feature.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2022arXiv220813917S/abstract",
      "arxiv":  "https://arxiv.org/abs/2208.13917",
      "thumb":  "spilker_2022.png",
      "themes": ["gas", "struct","sdss"],
      "tags":   ["Cold gas", "Mergers"]
    },
    {
      "year": 2022,
      "authors": "Suess et al.",
      "title": "Recovering the Star Formation Histories of Recently-Quenched Galaxies: The Impact of Model and Prior Choices",
      "teaser": "Tests of SED-fitting machinery on SQuIGGLE-like post-starbursts show how model and prior choices shape the recovered burst shape and quenching time.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2022ApJ...935..146S/abstract",
      "arxiv":  "https://arxiv.org/abs/2207.02883",
      "thumb":  "suess_2022_sps.png",
      "themes": ["pops","sdss"],
      "tags":   ["Stellar pops"]
    },
    {
      "year": 2022,
      "authors": "Suess et al.",
      "title": "SQuIGGLE: Studying Quenching in Intermediate-z Galaxies — Gas, Angular Momentum, and Evolution",
      "teaser": "The SQuIGGLE survey paper: sample definition, selection from SDSS spectroscopy, and the multi-wavelength program design.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2021arXiv211114878S/abstract",
      "arxiv":  "https://arxiv.org/abs/2111.14878",
      "thumb":  "suess2021_plot.png",
      "themes": ["survey","pops","sdss"],
      "tags":   ["Demographics", "Stellar pops"]
    },
    {
      "year": 2022,
      "authors": "Setton et al.",
      "title": "The Compact Structures of z ~ 0.7 Post-Starburst Galaxies",
      "teaser": "HST imaging of SQuIGGLE galaxies reveals systematically small sizes, consistent with compact progenitors of rapid quenching.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2022arXiv220308835S/abstract",
      "arxiv":  "https://arxiv.org/abs/2203.08835",
      "thumb":  "setton2022_plot.png",
      "themes": ["struct","sdss"],
      "tags":   ["Morphology"]
    },
    {
      "year": 2022,
      "authors": "Bezanson et al.",
      "title": "Star Formation Truncation Precedes Loss of Molecular Gas by ~100 Myr",
      "teaser": "Comparing SED-derived burst ages to ALMA CO detections: star formation stops first, and the gas reservoir lingers.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2021arXiv211114877B/abstract",
      "arxiv":  "https://arxiv.org/abs/2111.14877",
      "thumb":  "bezanson2021_plot.png",
      "themes": ["gas","sdss"],
      "tags":   ["Cold gas"]
    },
    {
      "year": 2020,
      "authors": "Setton et al.",
      "title": "Massive z ~ 0.6 Post-Starburst Galaxies Exhibit Flat Age Gradients",
      "teaser": "Resolved Balmer indices reveal that post-starburst galaxies quenched on roughly synchronous timescales at all radii.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2020ApJ...905...79S/abstract",
      "arxiv":  "https://arxiv.org/abs/2010.04734",
      "thumb":  "setton_2020.png",
      "themes": ["struct","sdss"],
      "tags":   ["Morphology","Kinematics"]
    },
    {
      "year": 2020,
      "authors": "Greene et al.",
      "title": "The Role of Active Galactic Nuclei in the Quenching of Massive Galaxies",
      "teaser": "Optical AGN diagnostics across the SQuIGGLE sample find an elevated AGN fraction in the youngest post-starburst galaxies.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2020ApJ...899L...9G/abstract",
      "arxiv":  "https://arxiv.org/abs/2007.05011",
      "thumb":  "greene_2020.png",
      "themes": ["agn","sdss"],
      "tags":   ["AGN"]
    },
    {
      "year": 2018,
      "authors": "Hunt et al.",
      "title": "Stellar and Molecular Gas Rotation in a Recently Quenched Massive Galaxy",
      "teaser": "Resolved kinematics of one SQuIGGLE galaxy show coherent stellar and molecular gas rotation, ruling out a violent recent merger.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2018ApJ...860L..18H/abstract",
      "arxiv":  "https://arxiv.org/abs/1806.01853",
      "thumb":  "hunt_2018.png",
      "themes": ["kin", "gas","sdss"],
      "tags":   ["Kinematics", "Cold gas"]
    },
    {
      "year": 2017,
      "authors": "Suess et al.",
      "title": "Massive Quenched Galaxies at z ~ 0.7 Retain Large Molecular Gas Reservoirs",
      "teaser": "The discovery paper: ALMA CO(2–1) detections show that recently quenched massive galaxies at z ~ 0.7 surprisingly hold onto their gas.",
      "ads":    "https://ui.adsabs.harvard.edu/abs/2017ApJ...846L..14S/abstract",
      "arxiv":  "https://arxiv.org/abs/1709.03990",
      "thumb":  "suess_2017.png",
      "themes": ["gas","sdss"],
      "tags":   ["Cold gas"]
    }
  ]
};
