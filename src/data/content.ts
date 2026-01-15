export const PROFILE = {
  name: "Abhishek Kale",
  tagline: "Building scalable solutions at the intersection of Software, Data, and Business.",
  subtitle: "Software Engineer turned Technical Consultant and Data Analyst with global experience across enterprise systems, analytics, and strategy.",
  github: "https://github.com/abhishekkale2209",
  linkedin: "https://www.linkedin.com/in/abhishekkaleak47/",
  email: "abhishekkale.tech1998@gmail.com",
  phone: ["+44 7442259621", "+91 9607055147"],
  location: "UK / India",
};

export const ABOUT = {
  intro: `I'm Abhishek Kale — a Computer Engineering graduate with a passion for building systems that scale and solving problems that matter.`,
  body: `With 1.5+ years at Avaya working on enterprise-grade communication platforms, Linux infrastructure, and virtualization on a $500M project, I developed a deep understanding of how mission-critical systems operate.

At FootfallCam, I served as a Technical Consultant managing 500+ global accounts, handling customer data pipelines, IoT device health monitoring, and providing data-driven insights to clients across Europe, GCC, and beyond.

At Lloyds Metals and Energy Limited, I monitored production projects using live machine data, applied data engineering techniques for cleaning and transformation, and built Power BI dashboards for production issues and failure analysis.

Currently at Infinite, I support 500+ Avaya customers working with KVM, Docker, Kubernetes, and microservices architecture.

After completing my MBA with Distinction in the UK, I'm focused on roles at the intersection of data, technology, and business strategy.`,
  stats: [
    { value: "$500M", label: "Avaya Project" },
    { value: "500+", label: "Global Accounts" },
    { value: "MBA", label: "with Distinction" },
    { value: "9.4", label: "CGPA Bachelor's" },
  ],
};

export const EXPERIENCE = [
  {
    id: "infinite",
    company: "Infinite Computer Solutions",
    role: "Systems Engineer",
    duration: "Current",
    location: "India",
    problem: "Supporting 500+ enterprise customers running Avaya communication platforms requiring high availability and rapid incident resolution.",
    approach: "Managing containerized deployments with Docker and Kubernetes. Implementing monitoring with Grafana. Working with KVM virtualization and microservices using Spring Boot.",
    outcome: "Ensuring 99.9% uptime for mission-critical communication systems across 500+ enterprise customers.",
    tech: ["KVM", "Docker", "Kubernetes", "Grafana", "Spring Boot", "Microservices"],
  },
  {
    id: "lloyds",
    company: "Lloyds Metals and Energy Limited",
    role: "Data Analyst",
    duration: "Contract",
    location: "India",
    problem: "Steel production operations required real-time monitoring of live machine data and business metrics for a major industrial project.",
    approach: "Monitored production projects using live machine and business data. Applied data engineering techniques for data cleaning and transformation. Built Power BI dashboards for production monitoring, failure analysis, and operational insights.",
    outcome: "Enabled data-driven decision making for production optimization and reduced downtime through proactive failure analysis.",
    tech: ["SQL", "Python", "Power BI", "Data Engineering", "Data Analytics"],
  },
  {
    id: "footfallcam",
    company: "FootfallCam",
    role: "Technical Consultant",
    duration: "~1 year",
    location: "UK (Global clients)",
    problem: "Global retail and enterprise clients needed technical expertise for IoT device health monitoring, data pipeline management, and actionable analytics insights.",
    approach: "Managed customer data pipelines and performed data cleaning/transformation. Monitored product health of IoT devices across deployments. Consulted clients on data-driven insights for Pandora, The Body Shop, B&Q, L'Occitane, National Gallery, Sky UK. Led UK technical team of 4.",
    outcome: "Ensured data quality and IoT system reliability across 500+ accounts. Delivered technical solutions for NEOM and international airport tenders.",
    tech: ["Odoo", "SQL", "Python", "Databricks", "Power BI", "REST APIs", "IoT"],
  },
  {
    id: "avaya",
    company: "Avaya",
    role: "Software Development Engineer",
    duration: "1.5 years",
    location: "India (US-led teams)",
    problem: "Enterprise communication platforms required reliable, secure, and scalable infrastructure for a $500M government project.",
    approach: "Worked on Linux-based systems, KVM virtualization, and on-prem servers. Acted as Product Owner for AVP and ASP. Delivered Terraform-based PoC for Azure.",
    outcome: "Contributed to $500M MOD Algeria government project. Led technical assessments during Log4j security incident.",
    tech: ["Linux", "Azure", "VMware", "RedHat", "Terraform", "Python", "Bash"],
  },
];

export const INTERNSHIPS = [
  {
    id: "cdac",
    company: "CDAC India",
    role: "Research Intern",
    description: "Developed AR-based cognitive learning solutions using Unity3D and machine learning.",
    tech: ["Unity3D", "C#", "ML", "Android", "AR", "VR"],
    publication: {
      title: "Real-Time Interactive AR for Cognitive Learning",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-29713-7_12",
      publisher: "Springer",
    },
  },
  {
    id: "makois",
    company: "Makois",
    role: "ML/AI Intern",
    description: "Worked on NLP and language models for AI applications.",
    tech: ["NLP", "BERT", "GPT", "ML", "AI"],
    publication: {
      title: "Published Research",
      link: "https://www.linkedin.com/in/abhishekkaleak47/overlay/1734177876199/single-media-viewer/?profileId=ACoAACR0k4sBif1EffOcfVsI8zF7SVIHcvY_Nvw",
      publisher: "LinkedIn",
    },
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
  "Programming & Data": ["Python", "SQL", "Java", "JavaScript", "Bash", "C#"],
  "Cloud & Infrastructure": ["Linux", "Azure", "VMware", "RedHat", "KVM", "Docker", "Kubernetes"],
  "Analytics & BI": ["Power BI", "Databricks", "Grafana", "Data Engineering", "Data Visualization", "REST APIs"],
  "AI & ML": ["NLP", "BERT", "GPT", "Machine Learning", "Unity3D", "AR/VR"],
  "Consulting & Strategy": ["Stakeholder Management", "Solution Design", "Project Management", "Business Analysis", "Agile"],
};

export const PROJECTS = [
  {
    title: "Terraform Azure PoC",
    category: "Software",
    description: "Automated VM provisioning on Microsoft Azure using Terraform for enterprise deployment.",
    tech: ["Terraform", "Azure", "Python"],
  },
  {
    title: "Retail Analytics Dashboards",
    category: "Data",
    description: "Custom analytics dashboards for global brands including Pandora, The Body Shop, and B&Q.",
    tech: ["Power BI", "SQL", "REST APIs"],
  },
  {
    title: "Production Monitoring System",
    category: "Data",
    description: "Real-time production monitoring and failure analysis dashboards for steel manufacturing.",
    tech: ["Power BI", "Python", "SQL", "Data Engineering"],
  },
];

export const VISION = {
  headline: "Where I'm Heading",
  text: `I'm actively transitioning into roles that combine technical depth with strategic impact — Data Analyst, Business Analyst, Technology Consulting, and Product roles.

I'm strengthening my expertise in SQL, Python, and Data Science while continuing to build on my foundation in systems thinking, stakeholder management, and problem decomposition. My goal is to work on problems where data-driven insights translate into meaningful business outcomes.`,
};
