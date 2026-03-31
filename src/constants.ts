import { Project, Experience, Certification, PositionOfResponsibility, ExtraCurricular } from './types';

export const PERSONAL_INFO = {
  name: "Anubhav Kumar",
  email: "meanubhavkr@gmail.com",
  altEmail: "btech15204.23@bitmesra.ac.in",
  phone: "+91 9279004758",
  linkedin: "https://www.linkedin.com/in/anubhav-singh-a140142bb/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcUm%2FKFU2Q9uXyRyFuol%2BRA%3D%3D",
  github: "https://github.com/Anu7hav",
  profileImage: "https://i.ibb.co/sdx1n9JH/profile.jpg", // Attempting a direct link format, or user can update
  education: {
    institute: "Birla Institute of Technology, Mesra",
    location: "Ranchi",
    period: "Sep 2023 – Jun 2027",
    degree: "B.Tech in Electronics and Communication Engineering"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Full-Stack Web Development Intern",
    company: "IIT Patna",
    location: "Bihar, India",
    period: "Dec 2025 – Jan 2026",
    description: [
      "Designed, developed, and deployed web applications with hands-on experience in frontend and backend technologies",
      "Built responsive and user-friendly web interfaces with backend logic and REST APIs",
      "Integrated databases, managed data flow, and performed debugging, testing, and optimization",
      "Collaborated with the team to deliver functional and scalable solutions"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MEME-ME",
    description: [
      "Developed a web page that adds top and bottom captions to an image uploaded by the user.",
      "Helpful for meme creators and image editors seeking quick captioning tools.",
      "Currently adding a download feature enabling users to save the captioned image directly."
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Anu7hav/MEME-ME",
    link: "https://overjoyed22.github.io/MEME-ME/"
  },
  {
    title: "CLI-MATE",
    description: [
      "Developed a web page delivering real-time weather data for any city entered by the user.",
      "Displays key metrics including temperature, humidity, and wind speed in a clean interface.",
      "Integrated a third-party weather API to ensure accurate and up-to-date information."
    ],
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/Anu7hav/CLI-MATE",
    link: "https://overjoyed22.github.io/CLI-MATE"
  }
];

export const SKILLS = {
  languages: ["C", "C++", "Python", "Javascript (beginner)"],
  frontend: ["HTML", "CSS", "JavaScript"],
  backend: ["REST APIs"],
  tools: ["Git", "GitHub"],
  softSkills: ["Leadership", "Event Management", "Public Speaking", "Technical Writing"]
};

export const CERTIFICATIONS: Certification[] = [
  { name: "Machine Learning Specialization", issuer: "Andrew Ng, Coursera" },
  { name: "MATLAB, Simulink & Signal Processing Onramp", issuer: "MathWorks" },
  { name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle University" }
];

export const POSITIONS: PositionOfResponsibility[] = [
  { role: "Student Campus Ambassador", organization: "Google Gemini" },
  { role: "Secretary", organization: "SRD Cell — BIT Mesra" },
  { role: "Member", organization: "IEEE Student Chapter — BIT Mesra" },
  { role: "Head", organization: "TECHNIKA 2025–26 — BIT Mesra" },
  { role: "Head", organization: "Prakrida 2025–26 — BIT Mesra" }
];

export const EXTRA_CURRICULAR: ExtraCurricular[] = [
  { activity: "Smart India Hackathon (SIH)", role: "Team Leader" },
  { activity: "Basketball", role: "Represented institute at inter-college level" },
  { activity: "Darpan, Drama Club", role: "Lead Actor" },
  { activity: "Volleyball", role: "Represented institute at inter-college level" },
  { activity: "Kabaddi", role: "Represented School at Cluster and Zonal level" }
];
