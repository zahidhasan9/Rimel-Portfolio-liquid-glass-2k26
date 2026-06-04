export const experience = [
  {
    role: "Full Stack Developer",
    company: "Independent Projects",
    period: "2024 — Present",
    description:
      "Building MERN and Next.js applications with clean UI, admin workflows, authentication, API integration, and deployment-ready architecture."
  },
  {
    role: "Frontend Developer",
    company: "Portfolio & Product UI",
    period: "2023 — 2024",
    description:
      "Designed responsive landing pages, portfolio systems, dashboards, and reusable UI components focused on clarity, speed, and premium presentation."
  }
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Your University",
    period: "2021 — Present"
  }
];



export type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type WorkExperience = {
  title: string;
  organization: string;
  period: string;
  description?: string;
  points?: string[];
};

export type ProjectItem = {
  title: string;
  type: string;
  description: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type EducationItem = {
  degree: string;
  institute: string;
  result?: string;
  period: string;
};

export type SocialItem = {
  label: string;
  href: string;
};

export const resumePage = {
  name: "Jahid Hasan Rimel",
  role: "Web Application Developer (MERN)",
  location: "Sylhet, Bangladesh, PO: 3101",
  phone: "017 2882 7813",
  email: "zmzahidhasan181@gmail.com",
  downloadCv:
    "https://docs.google.com/document/d/1unvwBb8W30IvAQmRE_Vhodr-5tqZCVqW/edit?usp=share_link&ouid=107183701790810350747&rtpof=true&sd=true",

  objective:
    "Looking for an opportunity as a Full Stack Web Application Developer where I can utilize my interest, skills, knowledge, education, and experience. I am technically strong, dedicated, and a quick learner with practical ability in configuration and troubleshooting of computer-related issues to obtain maximum performance. I am willing to bring these abilities to an organization and continue growing in my career.",

  contacts: [
    {
      label: "Phone",
      value: "017 2882 7813",
      href: "tel:01728827813"
    },
    {
      label: "Email",
      value: "zmzahidhasan181@gmail.com",
      href: "mailto:zmzahidhasan181@gmail.com"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jahid-hasan-rimel",
      href: "https://www.linkedin.com/in/jahid-hasan-rimel/"
    },
    {
      label: "Location",
      value: "Sylhet, Bangladesh, PO: 3101"
    }
  ] satisfies ContactItem[],

  workExperiences: [
    {
      title: "Web Application Developer",
      organization: "Easy Shop IT",
      period: "2023 - Present",
      description:
        "I have always had an interest in programming and learning different frameworks. From that interest, I have been learning web application development and have created many projects. My latest project was the university computer club.",
      points: [
        "Built web applications using MongoDB, React Redux, Express.js, React.js, and Node.js.",
        "Worked on practical full-stack application features including dashboard, authentication, authorization, and data management.",
        "Developed project features based on real user and admin workflows."
      ]
    },
    {
      title: "Leadership",
      organization: "Leading University",
      period: "15.08.21 - 25.08.22",
      description: "Worked with Leading University Computer Club and recruited members.",
      points: [
        "Led weekly meetings and discussed club topics.",
        "Organized data.",
        "Recruited members."
      ]
    },
    {
      title: "Frontend Development",
      organization: "Self Learning & Projects",
      period: "2020 - Present",
      points: [
        "React.js",
        "Material UI",
        "Bootstrap",
        "Redux",
        "Material Table",
        "PHP Basic",
        "Figma"
      ]
    },
    {
      title: "Backend Development",
      organization: "Self Learning & Projects",
      period: "2021 - Present",
      points: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "CORS",
        "Laravel",
        "SQL"
      ]
    }
  ] satisfies WorkExperience[],

  projects: [
    {
      title: "Leading University Computer Club",
      type: "Open Source",
      description:
        "This project was developed using React.js, Node.js, Express.js, MongoDB, Redux.js, CORS, and JWT token. It includes authentication, authorization, validation, and verification.",
      points: [
        "Includes separate dashboard features for admin and user.",
        "Has authentication and authorization with three types of user access.",
        "Users can create accounts, but account activation requires admin approval.",
        "Includes special features such as blood donation system, club event creation, and event management.",
        "Includes multi-functional data tables created with React Material Table, where users can search data by specific fields.",
        "Uses JWT token to provide stronger security for users."
      ]
    }
  ] satisfies ProjectItem[],

  skillGroups: [
    {
      title: "Technical",
      skills: [
        "JavaScript",
        "React",
        "Vue",
        "Python",
        "PHP",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Object-oriented design",
        "Database structure design",
        "Complex web application delivery"
      ]
    },
    {
      title: "Professional",
      skills: [
        "Effective communication",
        "Team player",
        "Strong problem solver",
        "Good time management"
      ]
    }
  ] satisfies SkillGroup[],

  education: [
    {
      degree: "BSc in Computer Science",
      institute: "Leading University Sylhet",
      result: "Cumulative GPA: 3.51/4.0",
      period: "2018 - 2022"
    }
  ] satisfies EducationItem[],

  languages: [
    "English (Professional)",
    "Bangla (Native)"
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/zahidhasan9"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jahid-hasan-rimel/"
    },
    {
      label: "Twitter",
      href: "https://twitter.com/Jahid_Rimel_"
    }
  ] satisfies SocialItem[]
};