export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  hook: string;
  category: string;
  categoryEmoji: string;
  categoryColor: string;
  features: string[];
  warningSigns: string[];
  description: string;
  metaDescription: string;
}

export const SERVICE_COLUMNS = [
  { title: "EMERGENCY SERVICE", emoji: "🔴", color: "#dc2626" },
  { title: "DRAIN CLEANING", emoji: "🟢", color: "#16a34a" },
  { title: "WATER HEATERS & PIPE REPAIRS", emoji: "🟠", color: "#ea580c" },
  { title: "MAINTENANCE & FIXTURES", emoji: "🔵", color: "#2563eb" },
  { title: "DIAMOND VIP CARE CLUB", emoji: "💎", color: "#FBBF24" },
];

export const SERVICE_AREA_CITIES = [
  "Fullerton",
  "Rancho Cucamonga",
  "Ontario",
  "Fontana",
  "Upland",
  "Chino",
];

export const services: ServiceData[] = [
  // ═══ COLUMN 1: EMERGENCY SERVICE ═══
  {
    slug: "24-7-emergency-response",
    title: "24/7 Emergency Response",
    h1: "24/7 Emergency Plumbing Response in the Inland Empire",
    hook: "When a structural line bursts or backing drains freeze at 2 AM, you don't need a robot. Santos answers the line.",
    category: "EMERGENCY SERVICE",
    categoryEmoji: "🔴",
    categoryColor: "#dc2626",
    features: [
      "Live 24/7 dispatch routing",
      "Transparent flat-rate pricing before work begins",
      "Full structural inspection of affected area",
      "Complete jobsite cleanup and restoration",
    ],
    warningSigns: [
      "Rushing water sounds behind walls",
      "Foundation pooling or standing water",
      "Ceiling stains expanding rapidly",
      "Raw sewage backups in floor drains",
    ],
    description:
      "Plumbing emergencies don't wait for business hours, and neither do we. Santos Plumbing provides round-the-clock emergency response for the Inland Empire and Foothill Communities. Whether it's a burst pipe flooding your home at midnight, a sewer backup threatening your family's health, or a gas leak requiring immediate professional attention, our certified technicians are dispatched within minutes of your call. We arrive fully equipped to diagnose, isolate, and resolve the crisis on the spot — with transparent flat-rate pricing quoted before any work begins. Every emergency call includes a full structural inspection of the affected area to identify secondary damage that less thorough companies might miss. When the worst happens, Santos is the call that gets answered. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino with 24/7 emergency plumbing response.",
    metaDescription:
      "24/7 emergency plumbing response in the Inland Empire. Santos Plumbing dispatches certified technicians around the clock for burst pipes, sewer backups, and gas leaks. Call (909) 256-2244 now.",
  },
  {
    slug: "burst-pipe-repair",
    title: "Burst Pipe Repair",
    h1: "Emergency Burst Pipe Repair — Fast Structural Solutions",
    hook: "A burst pipe floods your home with gallons per minute. Our emergency crews arrive within the hour to isolate, extract, and permanently repair the breach.",
    category: "EMERGENCY SERVICE",
    categoryEmoji: "🔴",
    categoryColor: "#dc2626",
    features: [
      "Structural pipe restoration with copper and PEX replacement",
      "Emergency shut-off safety routing and water extraction",
      "Post-repair pressure testing and flow verification",
      "Flood mitigation protocol with dry-out and prevention plan",
    ],
    warningSigns: [
      "Sudden drop in water pressure",
      "Water stains appearing on ceilings or walls",
      "Unexplained puddles in yard or crawlspace",
      "Sound of running water when all fixtures are off",
    ],
    description:
      "A burst pipe is one of the most destructive plumbing emergencies a homeowner can face. Within minutes, hundreds of gallons of water can flood your living spaces, damaging walls, flooring, furniture, and personal belongings. Santos Plumbing provides emergency burst pipe repair with crews dispatched within the hour to your Inland Empire or Foothill home. Our technicians first isolate the water supply to stop the flooding, then assess the full extent of the damage. We replace damaged sections with premium copper or PEX piping, pressure-test every connection, and provide comprehensive dry-out recommendations to prevent mold growth. Every repair comes with a prevention plan to help you avoid future pipe failures. Don't let a burst pipe become a total loss — call Santos and get it fixed right the first time.",
    metaDescription:
      "Emergency burst pipe repair in the Inland Empire. Santos Plumbing arrives within the hour to stop flooding, repair pipes, and restore your home. Call (909) 256-2244 immediately.",
  },
  {
    slug: "sewer-backup-clearance",
    title: "Sewer Backup Clearance",
    h1: "Professional Sewer Backup Clearance & Restoration",
    hook: "Sewage backing into your home is a health hazard that demands immediate, professional clearance. Santos dispatches equipped technicians who clear the blockage and restore safe flow.",
    category: "EMERGENCY SERVICE",
    categoryEmoji: "🔴",
    categoryColor: "#dc2626",
    features: [
      "Heavy-duty blockage elimination with mechanical and hydro-jet clearing",
      "Cleanout extraction and main line camera inspection",
      "Immediate sanitization pathing and contamination assessment",
      "Root cause report with prevention recommendations",
    ],
    warningSigns: [
      "Multiple drains backing up simultaneously",
      "Gurgling sounds from toilets and tubs",
      "Foul sewage odors in basement or ground floor",
      "Water pooling around floor drain cleanouts",
    ],
    description:
      "Sewage backing into your home is more than a plumbing problem — it's a serious health hazard that demands immediate professional attention. Raw sewage contains bacteria, viruses, and parasites that can make your family sick. Santos Plumbing provides professional sewer backup clearance with equipped technicians who don't just clear the blockage — they find and fix the root cause. We begin with a main line camera inspection to pinpoint the exact location and nature of the obstruction, then deploy mechanical augering or high-pressure hydro-jetting to restore full flow. After the line is clear, we provide a contamination assessment with professional sanitization guidance and a detailed root cause report with prevention recommendations to keep your sewer line flowing freely. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Professional sewer backup clearance in the Inland Empire. Santos Plumbing clears blockages, identifies root causes, and restores safe flow. Call (909) 256-2244 for immediate help.",
  },
  {
    slug: "gas-leak-detection",
    title: "Gas Leak Detection",
    h1: "Professional Gas Leak Detection & Safety Verification",
    hook: "Gas leaks are invisible and lethal. Our certified technicians use precision electronic detection equipment to locate, verify, and help coordinate safe resolution of any gas line compromise.",
    category: "EMERGENCY SERVICE",
    categoryEmoji: "🔴",
    categoryColor: "#dc2626",
    features: [
      "High-precision tracking matrix with electronic detection scanning",
      "Automated safety shut-offs and pressure decay testing",
      "Line re-piping architecture for compromised gas lines",
      "Detailed safety report and emergency coordination protocol",
    ],
    warningSigns: [
      "Rotten egg or sulfur smell in or around home",
      "Hissing sound near gas appliances",
      "Dead or dying vegetation near buried gas lines",
      "Gas meter dial spinning when all appliances are off",
    ],
    description:
      "Gas leaks are invisible, odorless in their natural state, and potentially lethal. While utility companies add a sulfur-like odorant as a safety measure, not all leaks are immediately detectable by smell alone. Santos Plumbing provides professional gas leak detection using precision electronic detection equipment that can locate even the smallest gas line compromise. Our certified technicians perform comprehensive electronic scanning and pressure decay testing to verify the integrity of your gas lines. If a leak is confirmed, we coordinate emergency shut-off procedures and provide a detailed safety report with repair recommendations. Your family's safety is our top priority — if you suspect a gas leak, evacuate immediately and call (909) 256-2244 from a safe location. Serving the Inland Empire and Foothill Communities.",
    metaDescription:
      "Professional gas leak detection in the Inland Empire. Santos Plumbing uses electronic detection and pressure testing to locate gas leaks fast. Call (909) 256-2244 if you suspect a leak.",
  },
  {
    slug: "same-day-urgent-repairs",
    title: "Same-Day Urgent Repairs",
    h1: "Same-Day Urgent Plumbing Repairs — When It Can't Wait",
    hook: "Not every problem is a 2 AM catastrophe, but some issues absolutely cannot wait until next week. Santos provides same-day urgent repair service for plumbing problems that demand immediate professional attention.",
    category: "EMERGENCY SERVICE",
    categoryEmoji: "🔴",
    categoryColor: "#dc2626",
    features: [
      "Priority routing parameters with confirmed arrival window",
      "Rapid-dispatch mechanics and same-day service deployment",
      "Flat-rate diagnostic waivers — know the price before work begins",
      "Code-compliant repair with professional-grade materials and warranty",
    ],
    warningSigns: [
      "Dripping that's getting progressively worse",
      "Fixture failure preventing daily use",
      "Visible corrosion on pipes or connections",
      "Water damage spreading to walls or flooring",
    ],
    description:
      "Not every plumbing problem is a middle-of-the-night catastrophe, but some issues absolutely cannot wait until next week. A dripping pipe that's getting progressively worse, a fixture failure that prevents your family from using essential facilities, or visible corrosion that threatens to become a full-blown leak — these are urgent problems that demand same-day professional attention. Santos Plumbing provides same-day urgent repair service with a confirmed arrival window, so you know exactly when help is coming. We quote upfront flat-rate pricing before any work begins, use professional-grade parts and materials, and ensure every repair meets local code requirements with a full warranty. Don't let a small problem become an expensive emergency — call Santos for same-day service you can count on. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Same-day urgent plumbing repairs in the Inland Empire. Santos Plumbing provides confirmed arrival windows, flat-rate pricing, and code-compliant repairs. Call (909) 256-2244 today.",
  },

  // ═══ COLUMN 2: DRAIN CLEANING ═══
  {
    slug: "clog-removal-snaking",
    title: "Clog Removal & Snaking",
    h1: "Professional Drain Clog Removal & Snaking Solutions",
    hook: "Stubborn kitchen greases and bath blockages cleared out surgically using advanced localized line machinery.",
    category: "DRAIN CLEANING",
    categoryEmoji: "🟢",
    categoryColor: "#16a34a",
    features: [
      "Secondary line clearing — sinks, tubs, and showers",
      "Hair and grease mechanical removal with professional-grade snaking",
      "Camera safety verification checks and line testing",
      "Preventative maintenance recommendations for lasting flow",
    ],
    warningSigns: [
      "Slow draining basins and tubs",
      "Localized standing gurgles from drains",
      "Foul odor coming from drain openings",
      "Water backing up into adjacent fixtures",
    ],
    description:
      "Clogged drains are one of the most common and frustrating plumbing problems homeowners face. Kitchen grease, soap scum, hair, food waste, and mineral buildup gradually restrict flow until water simply won't drain. Santos Plumbing provides professional clog removal and snaking solutions using advanced localized line machinery that clears blockages surgically without damaging your pipes. Unlike chemical drain cleaners that can corrode your plumbing, our mechanical snaking equipment physically removes the obstruction and restores full flow capacity. We don't stop at clearing the clog — we perform secondary trap cleaning and inspection, run camera safety verification checks to confirm the line is fully clear, and provide preventative maintenance recommendations to keep your drains flowing freely. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino with professional drain cleaning solutions.",
    metaDescription:
      "Professional drain clog removal and snaking in the Inland Empire. Santos Plumbing uses professional-grade equipment to clear blockages without pipe damage. Call (909) 256-2244.",
  },
  {
    slug: "hydro-jetting-solutions",
    title: "Hydro Jetting Solutions",
    h1: "High-Pressure Hydro Jetting — Deep Drain & Sewer Cleaning",
    hook: "When mechanical snaking isn't enough, hydro jetting delivers high-pressure water streams that obliterate grease, scale, root intrusion, and decades of buildup to restore pipes to like-new condition.",
    category: "DRAIN CLEANING",
    categoryEmoji: "🟢",
    categoryColor: "#16a34a",
    features: [
      "High-pressure scouring arrays at up to 4,000 PSI",
      "Complete internal pipe descaling and root intrusion elimination",
      "Long-term grease remediation with pre- and post-jetting camera verification",
      "Preventative maintenance schedule recommendation",
    ],
    warningSigns: [
      "Recurring clogs in same drain lines",
      "Slow drainage throughout the home",
      "Gurgling sounds from multiple fixtures",
      "Visible root intrusion on previous camera inspections",
    ],
    description:
      "When mechanical snaking isn't enough to solve your drain problems, hydro jetting delivers the deep cleaning power your pipes need. Using high-pressure water streams at up to 4,000 PSI, our hydro jetting service obliterates grease accumulations, mineral scale, root intrusion, and decades of stubborn buildup — restoring your pipes to like-new condition inside and out. Every hydro jetting job begins with a pre-jetting camera inspection to assess pipe condition and identify any potential weaknesses that could be affected by the high-pressure water. After jetting, we perform a post-jetting camera verification to confirm the line is completely clean and provide a preventative maintenance schedule recommendation to keep your pipes flowing freely long-term. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino with professional hydro jetting solutions.",
    metaDescription:
      "High-pressure hydro jetting service in the Inland Empire. Santos Plumbing blasts away grease, scale, and roots at up to 4,000 PSI. Call (909) 256-2244 for deep drain cleaning.",
  },
  {
    slug: "kitchen-bath-drains",
    title: "Kitchen & Bath Drains",
    h1: "Kitchen & Bath Drain Cleaning — Fast, Clean Solutions",
    hook: "Kitchen grease, soap scum, hair, and food waste build up slowly in your kitchen and bathroom drains until water simply won't go down. Santos clears these everyday blockages quickly and completely.",
    category: "DRAIN CLEANING",
    categoryEmoji: "🟢",
    categoryColor: "#16a34a",
    features: [
      "Specialized grease trap mitigation and P-trap clearing",
      "Food waste removal and garbage disposal line clearing",
      "Bathroom organic matter clearing — hair, soap scum, and residue",
      "Odor elimination and professional drain refresh treatment",
    ],
    warningSigns: [
      "Water pooling in kitchen sink",
      "Slow shower or tub drainage",
      "Foul smells from kitchen or bath drains",
      "Fruit flies hovering near drain openings",
    ],
    description:
      "Kitchen and bathroom drains are the workhorses of your home's plumbing system, and they take a lot of abuse. Kitchen sinks deal with grease, food particles, and soap residue daily. Bathroom sinks, showers, and tubs collect hair, soap scum, toothpaste, and cosmetic residue. Over time, these materials accumulate inside the drain lines, gradually restricting flow until water simply won't go down. Santos Plumbing specializes in clearing these everyday blockages quickly and completely. We clean kitchen grease traps and P-traps, remove bathroom hair and soap scum buildup, clear garbage disposal lines, and eliminate drain odors with our professional drain refresh service. Our goal isn't just to unblock your drain — it's to leave it cleaner and fresher than it's been in months. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Kitchen and bath drain cleaning in the Inland Empire. Santos Plumbing clears grease, hair, soap scum, and food waste fast. Call (909) 256-2244 for clean, fresh drains.",
  },
  {
    slug: "main-sewer-line-cleaning",
    title: "Main Sewer Line Cleaning",
    h1: "Main Sewer Line Cleaning — Protect Your Home's Foundation",
    hook: "Your main sewer line is the critical artery connecting your home to the municipal system. When it clogs, every drain in your house is affected. Santos provides thorough main line cleaning that restores full flow capacity.",
    category: "DRAIN CLEANING",
    categoryEmoji: "🟢",
    categoryColor: "#16a34a",
    features: [
      "Root intrusion clearing and high-torque mechanical snaking",
      "Full main line camera inspection and blockage mapping",
      "Mechanical augering and hydro-jetting deployment",
      "Flow optimization modeling and post-cleaning verification",
    ],
    warningSigns: [
      "All drains in home draining slowly simultaneously",
      "Sewage odors in basement or crawlspace",
      "Wet spots in yard above sewer line",
      "Gurgling from toilets when using other fixtures",
    ],
    description:
      "Your main sewer line is the critical artery connecting your home to the municipal sewer system. When it becomes clogged or restricted, every drain in your house is affected simultaneously. Main line blockages are typically caused by root intrusion, grease buildup, collapsed pipe sections, or accumulated debris that simple drain snaking can't fully resolve. Santos Plumbing provides thorough main sewer line cleaning that restores full flow capacity using a combination of mechanical augering, hydro-jetting, and root cutting technology. We begin with a full main line camera inspection to identify the exact nature and location of the problem, then deploy the appropriate cleaning method. After cleaning, we verify flow restoration with post-cleaning inspection. Protect your home's foundation and prevent sewage backups with professional main line cleaning from Santos. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Main sewer line cleaning in the Inland Empire. Santos Plumbing provides camera inspection, hydro-jetting, and root cutting for main line blockages. Call (909) 256-2244.",
  },
  {
    slug: "preventative-maintenance",
    title: "Preventative Maintenance",
    h1: "Preventative Drain Maintenance — Stop Clogs Before They Start",
    hook: "The best plumbing emergency is the one that never happens. Our preventative drain maintenance program keeps your lines flowing freely year-round with scheduled professional care.",
    category: "DRAIN CLEANING",
    categoryEmoji: "🟢",
    categoryColor: "#16a34a",
    features: [
      "Bi-annual systemic line flushing regimens",
      "Organic enzyme treatment logging and application",
      "Flow tracking with camera inspection and performance metrics",
      "Priority scheduling for any developing issues discovered",
    ],
    warningSigns: [
      "Drains that are slowing but not yet blocked",
      "Faint gurgling sounds after water use",
      "Occasional backups during heavy usage",
      "Home is over 20 years old with original pipes",
    ],
    description:
      "The best plumbing emergency is the one that never happens. Our preventative drain maintenance program is designed to keep your lines flowing freely year-round with scheduled professional care. Instead of waiting for a catastrophic clog or sewage backup, proactive maintenance identifies and resolves developing issues before they become expensive emergencies. Every maintenance visit includes an annual comprehensive drain system inspection with camera technology, scheduled preventive hydro-jetting to remove buildup before it causes blockages, priority scheduling for any issues discovered during inspection, and a detailed system health report documenting the condition of your plumbing. Homes over 20 years old with original pipes especially benefit from preventative maintenance, as aging pipes are more susceptible to root intrusion, scale buildup, and deterioration. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Preventative drain maintenance in the Inland Empire. Santos Plumbing keeps your drains flowing with scheduled inspections and hydro-jetting. Call (909) 256-2244 to enroll.",
  },

  // ═══ COLUMN 3: WATER HEATERS & PIPE REPAIRS ═══
  {
    slug: "water-heater-repair-tune-ups",
    title: "Water Heater Repair & Tune-Ups",
    h1: "Water Heater Repair & Precision System Tune-Ups",
    hook: "Get your hot water restored safely. Complete multi-point mechanical inspection of thermal elements.",
    category: "WATER HEATERS & PIPE REPAIRS",
    categoryEmoji: "🟠",
    categoryColor: "#ea580c",
    features: [
      "Component diagnostics and thermocouple repair arrays",
      "Pressure relief calibration and thermostat verification",
      "Tank safety flush to remove sediment buildup",
      "Sacrificial anode verification and replacement",
    ],
    warningSigns: [
      "Lukewarm water supplies from taps",
      "Pilot ignition failures or frequent relighting",
      "Popping or rumbling tank noises",
      "Visible rust on tank exterior or in hot water",
    ],
    description:
      "Your water heater is one of the hardest-working appliances in your home, delivering hot water on demand for showers, laundry, dishes, and cleaning day after day. Over time, sediment accumulates in the tank, thermal components degrade, and safety mechanisms can fail — often without any visible warning signs until you're suddenly stuck with cold water. Santos Plumbing provides comprehensive water heater repair and precision system tune-ups that restore reliable hot water and extend the life of your unit. Our multi-point inspection covers thermal component testing and calibration, tank safety flushing to remove sediment buildup, sacrificial anode rod verification and replacement, and thermostat and pressure relief valve inspection. Whether your water heater needs a simple tune-up or a more significant repair, our certified technicians diagnose the issue accurately and provide honest recommendations. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Water heater repair and tune-ups in the Inland Empire. Santos Plumbing provides multi-point inspections, sediment flushing, and thermal calibration. Call (909) 256-2244.",
  },
  {
    slug: "tankless-installation-flushes",
    title: "Tankless Installation & Flushes",
    h1: "Tankless Water Heater Installation & Annual Flush Service",
    hook: "Upgrade to endless hot water and energy savings with a professional tankless installation, or keep your existing unit running at peak efficiency with our precision flush service.",
    category: "WATER HEATERS & PIPE REPAIRS",
    categoryEmoji: "🟠",
    categoryColor: "#ea580c",
    features: [
      "High-efficiency heat exchanger descaling and calcium flush routing",
      "Luxury continuous-flow engineering and professional unit sizing",
      "Code-compliant gas and water line installation",
      "Annual descaling flush service with venting verification",
    ],
    warningSigns: [
      "Inconsistent water temperature from tankless unit",
      "Error codes displayed on unit",
      "Reduced flow rate or pressure",
      "Unit more than 12 months since last flush",
    ],
    description:
      "Tankless water heaters deliver endless hot water on demand while using significantly less energy than traditional tank units. But they require professional installation and regular maintenance to perform at their best. Santos Plumbing provides professional tankless water heater installation with expert unit sizing and selection to match your household's hot water demand. Our code-compliant installation includes proper gas and water line connections, venting and combustion air verification, and full system testing before we leave. For existing tankless owners, our annual descaling flush service removes mineral buildup from the heat exchanger — the single most important maintenance task for tankless longevity. Without annual flushing, scale accumulation reduces efficiency, causes temperature fluctuations, and can permanently damage the heat exchanger. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino with tankless expertise.",
    metaDescription:
      "Tankless water heater installation and flush service in the Inland Empire. Santos Plumbing provides expert installation and annual descaling. Call (909) 256-2244.",
  },
  {
    slug: "slab-leak-detection-fixes",
    title: "Slab Leak Detection & Fixes",
    h1: "Slab Leak Detection & Repair — Protect Your Foundation",
    hook: "A slab leak silently erodes the ground beneath your foundation, causing structural damage that compounds daily. Santos uses state-of-the-art thermal and acoustic detection to pinpoint the exact leak location without destructive digging.",
    category: "WATER HEATERS & PIPE REPAIRS",
    categoryEmoji: "🟠",
    categoryColor: "#ea580c",
    features: [
      "Electronic acoustic line locating and precision mapping",
      "Precise foundation isolation without destructive digging",
      "Non-destructive bypass mapping and leak location targeting",
      "Minimally invasive repair options with structural preservation",
    ],
    warningSigns: [
      "Unexplained high water bills",
      "Warm spots on floor surfaces",
      "Sound of running water when all fixtures off",
      "Cracks appearing in walls or flooring",
    ],
    description:
      "A slab leak is one of the most insidious plumbing problems a homeowner can face. Hidden beneath your home's concrete foundation, a leaking pipe silently erodes the ground beneath the slab — causing structural damage that compounds daily, often without any visible signs until the damage is extensive. Santos Plumbing uses state-of-the-art thermal imaging and acoustic listening technology to pinpoint the exact leak location without destructive digging. Our non-invasive detection methods allow us to map the precise location of the leak, enabling minimally invasive repair options that minimize disruption to your home and reduce repair costs. Once the leak is located and repaired, we provide recommendations for preventing future slab leaks, including water pressure regulation and whole-home repiping where appropriate. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Slab leak detection and repair in the Inland Empire. Santos Plumbing uses thermal imaging and acoustic technology to find leaks without digging. Call (909) 256-2244.",
  },
  {
    slug: "copper-pex-whole-home-repiping",
    title: "Copper & PEX Whole-Home Repiping",
    h1: "Whole-Home Repiping — Copper & PEX Solutions",
    hook: "Old galvanized or polybutylene pipes are a ticking time bomb of leaks, low pressure, and water quality issues. Our whole-home repiping service replaces your entire system with premium copper or PEX materials — often in just one day.",
    category: "WATER HEATERS & PIPE REPAIRS",
    categoryEmoji: "🟠",
    categoryColor: "#ea580c",
    features: [
      "Old galvanized extraction paths and complete system removal",
      "Modern structural manifold design with Copper Type L and PEX-A",
      "Multi-point distribution arrays and code-compliant connections",
      "Whole-home pressure testing, flush, and system commissioning",
    ],
    warningSigns: [
      "Home has original galvanized or polybutylene pipes",
      "Discolored or rusty water from taps",
      "Multiple leaks in different areas",
      "Severely reduced water pressure throughout home",
    ],
    description:
      "If your home still has its original galvanized steel or polybutylene pipes, you're living with a ticking time bomb. Galvanized pipes corrode from the inside out, restricting water flow and leaching rust into your drinking water. Polybutylene pipes, installed in millions of homes from the 1970s through the 1990s, are known to fail without warning. Santos Plumbing provides whole-home repiping services that replace your entire plumbing system with premium Copper Type L or PEX-A materials — often in just one day. We begin with a complete system assessment and material recommendation tailored to your home's specific needs, then perform code-compliant installation with proper permits, connections, and whole-home pressure testing. After installation, we flush the entire system to ensure clean, clear water from every tap. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Whole-home repiping with copper and PEX in the Inland Empire. Santos Plumbing replaces old galvanized and polybutylene pipes in as little as one day. Call (909) 256-2244.",
  },
  {
    slug: "advanced-leak-location-repair",
    title: "Advanced Leak Location & Repair",
    h1: "Advanced Leak Location & Precision Repair",
    hook: "Not all leaks are visible. Hidden leaks behind walls, under slabs, and in crawlspaces require advanced detection technology and surgical repair precision. Santos locates the invisible and fixes it permanently.",
    category: "WATER HEATERS & PIPE REPAIRS",
    categoryEmoji: "🟠",
    categoryColor: "#ea580c",
    features: [
      "Thermal imaging overlays and electronic moisture tracking",
      "Deep structural pipe targeting with multi-sensor detection",
      "Wall and slab penetration mapping with acoustic precision",
      "Permanent code-compliant repair with minimally invasive access",
    ],
    warningSigns: [
      "Unexplained moisture or mold growth",
      "Water meter spinning when no water in use",
      "Damp or musty smells in specific rooms",
      "Water stains appearing with no visible source",
    ],
    description:
      "Not all leaks are visible — in fact, the most damaging leaks are often the ones you can't see. Hidden leaks behind walls, under concrete slabs, and in crawlspaces can go undetected for weeks or months, causing extensive structural damage, mold growth, and unnecessarily high water bills. Santos Plumbing specializes in locating and repairing these invisible leaks using advanced multi-sensor detection technology. Our technicians deploy thermal imaging cameras, acoustic listening equipment, and pressure testing simultaneously to pinpoint the exact location of hidden leaks without guesswork or destructive exploration. Once located, we use minimally invasive access techniques to reach the leak and perform permanent code-compliant repairs. Our precision approach saves you money by eliminating unnecessary demolition and reducing repair time. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Advanced leak detection and repair in the Inland Empire. Santos Plumbing uses thermal, acoustic, and pressure technology to find hidden leaks. Call (909) 256-2244.",
  },

  // ═══ COLUMN 4: MAINTENANCE & FIXTURES ═══
  {
    slug: "faucet-sink-tub-installation",
    title: "Faucet, Sink & Tub Installation",
    h1: "Premium Faucet, Sink & Tub Architectural Installations",
    hook: "Upgrade your hardware with minimalist layout features. Precise sealing and absolute fixture execution.",
    category: "MAINTENANCE & FIXTURES",
    categoryEmoji: "🔵",
    categoryColor: "#2563eb",
    features: [
      "Premium hardware trim integrations and custom bathroom fixtures",
      "Leak-free basin sealing with commercial-grade silicone",
      "Structural supply and drain integration",
      "Fixture alignment, operation testing, and code compliance verification",
    ],
    warningSigns: [
      "Steady fixture drips that won't stop",
      "Mineral calcification on fixture surfaces",
      "Handle thread slips or loose mounting",
      "Outdated fixtures reducing home value",
    ],
    description:
      "Upgrading your faucets, sinks, and tubs is one of the most impactful improvements you can make to your home's functionality and value. Whether you're renovating a bathroom, updating a kitchen, or replacing worn-out fixtures that have seen better days, Santos Plumbing provides premium installation services with precise sealing and absolute fixture execution. Our installations include structural supply and drain integration to ensure proper water flow and drainage, code compliance verification for your peace of mind, clean commercial-grade silicone seals that prevent water intrusion and mold growth, and comprehensive fixture alignment and operation testing before we leave. We treat every installation as an architectural detail — because the difference between a good plumbing job and a great one is in the precision of the execution. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Premium faucet, sink, and tub installation in the Inland Empire. Santos Plumbing provides precise, code-compliant fixture installations. Call (909) 256-2244.",
  },
  {
    slug: "toilet-repair-replacement",
    title: "Toilet Repair & Replacement",
    h1: "Toilet Repair & Replacement — Professional Solutions",
    hook: "A running toilet wastes hundreds of gallons daily, and a malfunctioning toilet disrupts your entire household. Santos provides fast, precise toilet repair and premium replacement services with same-day availability.",
    category: "MAINTENANCE & FIXTURES",
    categoryEmoji: "🔵",
    categoryColor: "#2563eb",
    features: [
      "Internal flush valve optimization and fill valve calibration",
      "Wax ring seal replacements and closet flange repair",
      "Dual-flush efficiency upgrades and tank-to-bowl gasket service",
      "Full toilet replacement with code-compliant installation",
    ],
    warningSigns: [
      "Constant running water sound from tank",
      "Weak or incomplete flush",
      "Water pooling around toilet base",
      "Tank taking long to refill after flush",
    ],
    description:
      "A running toilet is more than an annoyance — it can waste hundreds of gallons of water daily, significantly increasing your water bill. A malfunctioning toilet that won't flush properly or leaks at the base disrupts your entire household and can cause water damage to your flooring and subfloor. Santos Plumbing provides fast, precise toilet repair and premium replacement services with same-day availability. Our technicians diagnose and repair common toilet problems including flush valve and fill valve failures, worn wax ring seals, damaged closet flanges, and deteriorated tank-to-bowl gaskets. When repair isn't the most cost-effective option, we provide full toilet replacement with code-compliant installation, including proper wax ring sealing, flange repair if needed, and secure mounting. Don't let a malfunctioning toilet disrupt your home — call Santos for same-day professional service. Serving Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Toilet repair and replacement in the Inland Empire. Santos Plumbing fixes running toilets, leaks, and flush problems with same-day service. Call (909) 256-2244.",
  },
  {
    slug: "garbage-disposal-service",
    title: "Garbage Disposal Service",
    h1: "Garbage Disposal Repair & Installation",
    hook: "A jammed or leaking garbage disposal disrupts your kitchen and can cause drain blockages. Santos repairs and installs all major disposal brands with fast, reliable service.",
    category: "MAINTENANCE & FIXTURES",
    categoryEmoji: "🔵",
    categoryColor: "#2563eb",
    features: [
      "Jam clearing protocols and motor reset procedures",
      "High-torque unit swaps and new disposal installation",
      "Seal and gasket replacement for leak prevention",
      "Safe kitchen drain line optimization and connection verification",
    ],
    warningSigns: [
      "Disposal humming but not spinning",
      "Persistent foul odors from unit",
      "Water leaking from disposal housing",
      "Unit frequently jamming or tripping reset button",
    ],
    description:
      "A jammed or leaking garbage disposal disrupts your kitchen routine and can cause drain blockages that affect your entire sink line. Santos Plumbing repairs and installs all major garbage disposal brands with fast, reliable service. Common disposal problems include jammed grinding mechanisms that hum but won't spin, worn seals and gaskets that cause water leaks from the disposal housing, and frequent jamming or reset button tripping that indicates a unit nearing the end of its service life. Our technicians can clear most jams and perform motor resets on-site, replace worn seals and gaskets to stop leaks, and install new disposal units when replacement is the most cost-effective option. Every installation includes plumbing connection verification and drain line testing to ensure proper operation. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Garbage disposal repair and installation in the Inland Empire. Santos Plumbing fixes jams, leaks, and installs new units fast. Call (909) 256-2244.",
  },
  {
    slug: "whole-home-water-filtration",
    title: "Whole-Home Water Filtration",
    h1: "Whole-Home Water Filtration Systems — Clean Water Throughout",
    hook: "Inland Empire water quality varies by neighborhood. A whole-home filtration system ensures every tap in your house delivers clean, great-tasting water free from chlorine, sediment, and contaminants.",
    category: "MAINTENANCE & FIXTURES",
    categoryEmoji: "🔵",
    categoryColor: "#2563eb",
    features: [
      "Central carbon filtering configurations and sediment removal tracking",
      "Hard water softening architecture and mineral reduction systems",
      "Water quality testing, analysis, and system sizing recommendation",
      "Professional installation at main water line with maintenance plan",
    ],
    warningSigns: [
      "Chlorine taste or smell in tap water",
      "White scale buildup on fixtures",
      "Discolored water from taps",
      "Dry skin or hair after showering",
    ],
    description:
      "Inland Empire water quality varies significantly by neighborhood, and many homeowners are surprised to learn what's actually in their tap water. Municipal water treatment removes harmful pathogens, but chlorine, sediment, dissolved minerals, and other contaminants can still affect the taste, smell, and quality of your water. A whole-home filtration system from Santos Plumbing ensures every tap in your house delivers clean, great-tasting water free from chlorine, sediment, and contaminants. We begin with professional water quality testing and analysis to identify exactly what's in your water, then recommend the right system size and type for your household's needs. Our professional installation at the main water line ensures filtered water reaches every fixture, and we provide a filter replacement schedule and maintenance plan to keep your system performing at its best. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Whole-home water filtration systems in the Inland Empire. Santos Plumbing tests your water and installs the right filtration system. Call (909) 256-2244.",
  },
  {
    slug: "annual-plumbing-safety-inspections",
    title: "Annual Plumbing Safety Inspections",
    h1: "Annual Plumbing Safety Inspection — Your Yearly Peace of Mind",
    hook: "Our comprehensive 100-point safety inspection catches small problems before they become expensive emergencies. It's the smartest investment you can make in your home's plumbing health.",
    category: "MAINTENANCE & FIXTURES",
    categoryEmoji: "🔵",
    categoryColor: "#2563eb",
    features: [
      "Comprehensive 100-point home safety checks and system inspection",
      "Hidden leak scans with thermal and acoustic detection technology",
      "Early component degradation warnings and wear identification",
      "Detailed written report with priority recommendations and action plan",
    ],
    warningSigns: [
      "Home hasn't had a plumbing inspection in over 2 years",
      "Visible corrosion on exposed pipes",
      "Reduced water pressure or flow",
      "Water heater over 10 years old",
    ],
    description:
      "Most homeowners don't think about their plumbing until something goes wrong — but by then, a small problem that could have been caught early has often become an expensive emergency. Our comprehensive 20-point safety inspection is designed to catch small problems before they become costly disasters. It's the smartest investment you can make in your home's plumbing health. Every inspection covers 20 critical points throughout your plumbing system, including water pressure and flow testing, water heater safety verification, drain line condition assessment, fixture and connection inspection, and visible pipe condition evaluation. After the inspection, you receive a detailed written report with priority recommendations ranked by urgency, so you know exactly what needs attention and what can wait. Annual inspections are especially important for homes over 20 years old or with water heaters over 10 years old. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Annual plumbing safety inspections in the Inland Empire. Santos Plumbing's 20-point inspection catches problems before they become emergencies. Call (909) 256-2244.",
  },

  // ═══ COLUMN 5: DIAMOND VIP CARE CLUB ═══
  {
    slug: "diamond-vip-membership",
    title: "$100/Yr Flat-Rate Membership",
    h1: "Join the Santos Diamond VIP Care Club",
    hook: "The definitive neighborhood protection program designed to protect your home and keep cash flow simple.",
    category: "DIAMOND VIP CARE CLUB",
    categoryEmoji: "💎",
    categoryColor: "#FBBF24",
    features: [
      "Fixed $100 emergency drain snaking",
      "24/7 priority response window",
      "Zero holiday surge fees",
      "Early-bird access to new services and promotions",
    ],
    warningSigns: [
      "You've paid emergency surge fees in the past",
      "You want guaranteed priority when you call",
      "You prefer flat-rate pricing with no surprises",
      "You value a long-term relationship with a trusted plumber",
    ],
    description:
      "The Santos Diamond VIP Care Club is the definitive neighborhood protection program designed to protect your home and keep your plumbing costs simple and predictable. For just $100 per year, Diamond VIP members receive fixed $100 emergency drain snaking with no surprise charges, 24/7 priority response windows that put you at the front of the line, zero holiday surge fees so you never pay more for timing, and early-bird access to new services and promotional pricing before they're available to the general public. If you've ever been hit with emergency surge fees, waited hours for a callback during a plumbing crisis, or been surprised by a bill that was higher than expected, the Diamond VIP Care Club is designed for you. It's the smartest $100 you'll spend on your home this year. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Join the Santos Diamond VIP Care Club for $100/year. Fixed drain snaking, priority 24/7 service, and zero surge fees. Call (909) 256-2244 to enroll.",
  },
  {
    slug: "fixed-price-drain-unclogging",
    title: "$100 Fixed-Price Drain Unclogging",
    h1: "$100 Fixed-Price Drain Unclogging — Diamond VIP Exclusive",
    hook: "Diamond VIP members never wonder what a drain unclogging will cost. It's $100. Period. No hidden fees, no surprise line items, no weekend surcharges.",
    category: "DIAMOND VIP CARE CLUB",
    categoryEmoji: "💎",
    categoryColor: "#FBBF24",
    features: [
      "Fixed $100 price for standard drain unclogging",
      "No emergency or weekend surge fees",
      "Priority same-day scheduling",
      "Professional-grade mechanical clearing",
    ],
    warningSigns: [
      "You've been quoted variable pricing for drain work",
      "You've paid surge fees for after-hours service",
      "You want price certainty before work begins",
      "You need reliable same-day drain service",
    ],
    description:
      "Diamond VIP members never wonder what a drain unclogging will cost — it's $100, period. No hidden fees, no surprise line items, no weekend surcharges, no after-hours markup. Just a straightforward, honest price for professional-grade mechanical drain clearing. This exclusive benefit alone can save Diamond VIP members hundreds of dollars per year compared to variable-rate pricing that other companies charge. In addition to the fixed price, Diamond VIP drain unclogging includes priority same-day scheduling so you don't have to wait, and professional-grade mechanical clearing equipment that gets the job done right the first time. If you've been quoted variable pricing for drain work, paid surge fees for after-hours service, or simply want price certainty before any work begins, this benefit pays for your entire membership with a single use. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "$100 fixed-price drain unclogging for Diamond VIP members. No surge fees, no surprises — just honest flat-rate pricing. Call (909) 256-2244 to join.",
  },
  {
    slug: "priority-24-7-service-booking",
    title: "Priority 24/7 Service Booking",
    h1: "Priority 24/7 Service Booking — Diamond VIP Members First",
    hook: "When pipes burst at midnight, Diamond VIP members don't wait in queue. Your call goes straight to the front of the line with guaranteed priority dispatch.",
    category: "DIAMOND VIP CARE CLUB",
    categoryEmoji: "💎",
    categoryColor: "#FBBF24",
    features: [
      "Front-of-queue dispatch for all service calls",
      "24/7 availability including holidays",
      "Dedicated VIP scheduling line",
      "Guaranteed callback within 15 minutes",
    ],
    warningSigns: [
      "You've experienced long wait times for service",
      "You need after-hours emergency response",
      "You want guaranteed callback times",
      "You value being a priority customer",
    ],
    description:
      "When pipes burst at midnight or sewage backs up on a holiday weekend, Diamond VIP members don't wait in queue. Your call goes straight to the front of the line with guaranteed priority dispatch. This means that during peak demand periods — when other companies are telling customers they'll call back tomorrow — Santos Diamond VIP members are already speaking with a technician who's on the way. Priority 24/7 service booking includes front-of-queue dispatch for all service calls, 24/7 availability including all holidays, a dedicated VIP scheduling line that bypasses the general queue, and a guaranteed callback within 15 minutes of your request. If you've ever experienced the frustration of long wait times for service during a plumbing emergency, or if you simply value being treated as a priority customer, this benefit provides the peace of mind you deserve. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Priority 24/7 service booking for Diamond VIP members. Front-of-queue dispatch and guaranteed 15-minute callbacks. Call (909) 256-2244 to join.",
  },
  {
    slug: "no-weekend-surge-fees",
    title: "No Emergency Weekend Surge Fees",
    h1: "No Weekend Surge Fees — Diamond VIP Peace of Mind",
    hook: "Plumbing emergencies don't respect business hours, and neither should fair pricing. Diamond VIP members never pay weekend, holiday, or after-hours surge fees.",
    category: "DIAMOND VIP CARE CLUB",
    categoryEmoji: "💎",
    categoryColor: "#FBBF24",
    features: [
      "Zero weekend surge pricing",
      "Zero holiday surge pricing",
      "Zero after-hours emergency markup",
      "Same flat-rate pricing 365 days a year",
    ],
    warningSigns: [
      "You've paid 2x or 3x rates for weekend service",
      "Holiday emergencies have cost you a premium",
      "You want consistent pricing regardless of timing",
      "You believe emergency service shouldn't cost more",
    ],
    description:
      "Plumbing emergencies don't respect business hours, and neither should fair pricing. Unfortunately, many plumbing companies charge 2x or even 3x their standard rates for weekend, holiday, and after-hours service — precisely when you need help the most. Diamond VIP members never pay weekend surge fees, holiday surge pricing, or after-hours emergency markups of any kind. You receive the same honest flat-rate pricing 365 days a year, whether you call at noon on a Tuesday or midnight on Christmas. This benefit alone can save you hundreds of dollars on a single emergency service call compared to companies that charge surge pricing. If you've ever been hit with a massive bill because your plumbing emergency happened at the wrong time, or if you simply believe that emergency service shouldn't cost more just because it's a weekend, the Diamond VIP Care Club is your answer. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "No weekend surge fees for Diamond VIP members. Same flat-rate pricing 365 days a year — no holiday or after-hours markups. Call (909) 256-2244 to join.",
  },
  {
    slug: "early-bird-pre-launch-access",
    title: "Early-Bird Pre-Launch Access",
    h1: "Early-Bird Pre-Launch Access — Diamond VIP First Look",
    hook: "Diamond VIP members get exclusive first access to new Santos services, technologies, and promotional pricing before they're available to the general public.",
    category: "DIAMOND VIP CARE CLUB",
    categoryEmoji: "💎",
    categoryColor: "#FBBF24",
    features: [
      "Early access to new service offerings",
      "Pre-launch promotional pricing",
      "Beta access to Leak Agent AI features",
      "Exclusive member-only discounts and offers",
    ],
    warningSigns: [
      "You want to be first to try new plumbing technologies",
      "You value exclusive member perks",
      "You like getting the best promotional pricing",
      "You want insider access to Santos innovations",
    ],
    description:
      "Diamond VIP members get exclusive first access to new Santos services, technologies, and promotional pricing before they're available to the general public. As Santos Plumbing continues to innovate and expand our service offerings, Diamond VIP members are always the first to know and the first to benefit. This includes early access to new service offerings before they're widely promoted, pre-launch promotional pricing that rewards our most loyal customers, beta access to Leak Agent AI features and other technology innovations, and exclusive member-only discounts and special offers throughout the year. If you want to be first to try new plumbing technologies, value exclusive member perks, like getting the best promotional pricing, or simply want insider access to Santos innovations as they develop, the Diamond VIP Care Club gives you the VIP treatment you deserve. Santos Plumbing serves Fullerton, Rancho Cucamonga, Ontario, Fontana, Upland, and Chino.",
    metaDescription:
      "Early-bird access to new services and tech for Diamond VIP members. Be first to try innovations and get exclusive pricing. Call (909) 256-2244 to join.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
