export const PROFILE = {
  name: "Abhishek Kale",
  tagline: "Building scalable solutions at the intersection of Software, Data, and Business.",
  subtitle: "Software Engineer turned Consultant and Analyst with global experience across enterprise systems, analytics, and strategy.",
  github: "https://github.com/abhishekkale2209",
  linkedin: "https://linkedin.com/in/abhishekkale",
  email: "abhishek@example.com",
  location: "UK / India",
};

export const BOOT_SEQUENCE = [
  { text: "GRUB Loading abhishek.io kernel...", delay: 0 },
  { text: "", delay: 300 },
  { text: "[    0.001] Initializing Abhishek Kale v2.0...", delay: 500 },
  { text: "[    0.124] Loading core modules:", delay: 800 },
  { text: "            ├── software-engineering.ko .............. [OK]", delay: 1000 },
  { text: "            ├── data-analytics.ko .................... [OK]", delay: 1200 },
  { text: "            ├── business-strategy.ko ................. [OK]", delay: 1400 },
  { text: "            └── consulting.ko ........................ [OK]", delay: 1600 },
  { text: "", delay: 1800 },
  { text: "[    1.205] Mounting experience:", delay: 2000 },
  { text: "            ├── /avaya (1.5 years) ................... [OK]", delay: 2200 },
  { text: "            └── /footfallcam (500+ accounts) ......... [OK]", delay: 2400 },
  { text: "", delay: 2600 },
  { text: "[    2.891] Fetching github.com/abhishekkale2209...", delay: 2800 },
  { text: "            ├── Portfolio Projects ................... [OK]", delay: 3000 },
  { text: "            ├── Data Analysis Work ................... [OK]", delay: 3200 },
  { text: "            └── Open Source Contributions ............ [OK]", delay: 3400 },
  { text: "", delay: 3600 },
  { text: "[    3.500] System ready. Welcome to abhishek.io 🚀", delay: 3800 },
];

export const ABOUT = {
  intro: `I'm Abhishek Kale — a Computer Engineering graduate with a passion for building systems that scale and solving problems that matter.`,
  body: `With 1.5+ years at Avaya working on enterprise-grade communication platforms, Linux infrastructure, and virtualization, I developed a deep understanding of how mission-critical systems operate. I then transitioned to FootfallCam, where I managed 500+ global accounts, designed analytics dashboards for brands like Pandora and The Body Shop, and led consulting engagements across Europe, GCC, and beyond.

After completing my MBA with Distinction in the UK, I'm now focused on roles that sit at the intersection of data, technology, and business strategy — whether that's Data Analytics, Business Analysis, Consulting, or Product.`,
  stats: [
    { value: "1.5+", label: "Years at Avaya" },
    { value: "500+", label: "Global Accounts" },
    { value: "MBA", label: "with Distinction" },
    { value: "9.4", label: "CGPA Bachelor's" },
  ],
};

export const EXPERIENCE = [
  {
    id: "avaya",
    company: "Avaya",
    role: "Software Development Engineer",
    duration: "1.5 years",
    location: "India (US-led teams)",
    problem: "Enterprise communication platforms required reliable, secure, and scalable infrastructure across global deployments.",
    approach: "Worked on Linux-based systems, KVM virtualization, and on-prem servers. Acted as Product Owner for Avaya Virtualization Platform (AVP) and Avaya Service Platform (ASP). Delivered Terraform-based PoC for Azure VM provisioning.",
    outcome: "Contributed to a $50M MOD Algeria government project. Led technical assessments during Log4j security incident. Improved system reliability and automation readiness in mission-critical deployments.",
    tech: ["Linux", "Unix", "KVM", "VMware", "Terraform", "Azure", "Python", "Bash"],
  },
  {
    id: "footfallcam",
    company: "FootfallCam",
    role: "Consulting, Analytics & Sales Engineering",
    duration: "~1 year",
    location: "UK (Global clients)",
    problem: "Global retail and enterprise clients needed actionable insights from people-counting and analytics data to drive business decisions.",
    approach: "Managed end-to-end sales and consulting lifecycle. Designed analytics dashboards for Pandora, The Body Shop, B&Q, L'Occitane, National Gallery, Sky UK. Consulted telecom operators including Airtel and Vodafone Idea. Led UK team of 4.",
    outcome: "Drove data-backed decisions across 500+ accounts. Contributed to tenders for NEOM and international airports. Introduced CRM and AI-based prospecting improvements in Odoo.",
    tech: ["SQL", "Power BI", "REST APIs", "Python", "Excel", "Odoo CRM", "Data Visualization"],
  },
];

export const EDUCATION = [
  {
    degree: "MBA",
    institution: "UK University",
    result: "Distinction",
    focus: "Business Strategy, Consulting, Analytics, Project Management",
  },
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "India",
    result: "CGPA: 9.4",
    focus: "Software Engineering, Systems, Programming",
  },
];

export const CERTIFICATIONS = [
  "APM Student (Project Management)",
  "Agile Requirements Foundations",
  "Business Analysis Foundations",
  "Programming in Java (NPTEL)",
  "Python & Data Structures (NPTEL)",
  "Microsoft JS Programming",
  "Project Management (365 Careers)",
];

export const SKILLS = {
  "Programming & Data": ["Python", "SQL", "Java", "JavaScript", "Bash", "Data Structures"],
  "Cloud & Systems": ["Linux", "Unix", "KVM", "VMware", "Terraform", "Azure", "Enterprise Servers"],
  "Analytics & BI": ["Power BI", "Excel", "Data Visualization", "REST APIs", "SaaS Analytics"],
  "Consulting & Strategy": ["Stakeholder Management", "Solution Design", "Project Management", "Business Analysis", "Agile"],
};

export const PROJECTS = [
  {
    title: "Terraform Azure PoC",
    category: "Software",
    description: "Automated VM provisioning on Microsoft Azure using Terraform for enterprise deployment.",
    tech: ["Terraform", "Azure", "Python"],
    github: "#",
  },
  {
    title: "Retail Analytics Dashboards",
    category: "Data",
    description: "Custom analytics dashboards for global brands including Pandora, The Body Shop, and B&Q.",
    tech: ["Power BI", "SQL", "REST APIs"],
    github: "#",
  },
  {
    title: "CRM Process Optimization",
    category: "Consulting",
    description: "Introduced AI-based prospecting and process improvements in Odoo CRM for sales efficiency.",
    tech: ["Odoo", "Python", "Process Design"],
    github: "#",
  },
];

export const VISION = {
  headline: "Where I'm Heading",
  text: `I'm actively transitioning into roles that combine technical depth with strategic impact — Data Analyst, Business Analyst, Technology Consulting, and Product roles.

I'm strengthening my expertise in SQL, Python, and Data Science while continuing to build on my foundation in systems thinking, stakeholder management, and problem decomposition. My goal is to work on problems where data-driven insights translate into meaningful business outcomes.`,
};
