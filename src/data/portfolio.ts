// Fallback snapshot of the portfolio data, generated from the Neon
// database (project "kaung-portfolio", database "neondb").
// Used when DATABASE_URL is not set, so the site builds and runs
// without a live database. The live site reads Neon first — see src/lib/neon.ts.
import type { PortfolioData } from "@/lib/types";

export const fallbackPortfolio: PortfolioData = {
  "profile": [
    {
      "id": 1,
      "name": "Kaung Htet Zan Thar",
      "title": "Frontend Developer",
      "location": "Zawana street, Thingangyun Tsp, Yangon",
      "email": "kkaunghtetzanthar@gmail.com",
      "phone": "09-666500045",
      "bio": "I am a Frontend Developer based in Yangon, Myanmar, building responsive, reusable, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS. At Innovix Solutions I worked on a Core Insurance System and a Customer Care Admin Panel, developing interfaces with clean, maintainable code and integrating REST APIs to retrieve, submit, and manage application data. I am a B.C.Sc. student at the University of Computer Studies, Magway, expecting to graduate in February 2027, and I am eager to keep learning and contribute to reliable software solutions.",
      "availability": "Open to frontend opportunities",
      "created_at": "2026-11-20T23:36:52.476Z"
    }
  ],
  "skills": [
    {
      "id": 1,
      "category": "Frontend",
      "name": "HTML5",
      "sort_order": 0
    },
    {
      "id": 2,
      "category": "Frontend",
      "name": "CSS3",
      "sort_order": 1
    },
    {
      "id": 3,
      "category": "Frontend",
      "name": "JavaScript",
      "sort_order": 2
    },
    {
      "id": 4,
      "category": "Frontend",
      "name": "TypeScript",
      "sort_order": 3
    },
    {
      "id": 5,
      "category": "Frameworks",
      "name": "React.js",
      "sort_order": 4
    },
    {
      "id": 6,
      "category": "Frameworks",
      "name": "Next.js",
      "sort_order": 5
    },
    {
      "id": 7,
      "category": "Styling",
      "name": "Tailwind CSS",
      "sort_order": 6
    },
    {
      "id": 8,
      "category": "Styling",
      "name": "Bootstrap",
      "sort_order": 7
    },
    {
      "id": 9,
      "category": "Styling",
      "name": "Material UI",
      "sort_order": 8
    },
    {
      "id": 10,
      "category": "Styling",
      "name": "DaisyUI",
      "sort_order": 9
    },
    {
      "id": 11,
      "category": "Styling",
      "name": "Framer Motion",
      "sort_order": 10
    },
    {
      "id": 12,
      "category": "State Management",
      "name": "Redux Toolkit",
      "sort_order": 11
    },
    {
      "id": 13,
      "category": "State Management",
      "name": "Context API",
      "sort_order": 12
    },
    {
      "id": 14,
      "category": "API Integration",
      "name": "REST APIs",
      "sort_order": 13
    },
    {
      "id": 15,
      "category": "API Integration",
      "name": "Axios",
      "sort_order": 14
    },
    {
      "id": 16,
      "category": "Forms & Validation",
      "name": "React Hook Form",
      "sort_order": 15
    },
    {
      "id": 17,
      "category": "Forms & Validation",
      "name": "Zod",
      "sort_order": 16
    },
    {
      "id": 18,
      "category": "Tools",
      "name": "Visual Studio Code",
      "sort_order": 17
    },
    {
      "id": 19,
      "category": "Tools",
      "name": "Git Bash",
      "sort_order": 18
    },
    {
      "id": 20,
      "category": "Tools",
      "name": "PostgreSQL",
      "sort_order": 19
    },
    {
      "id": 21,
      "category": "Tools",
      "name": "Postman",
      "sort_order": 20
    },
    {
      "id": 22,
      "category": "Tools",
      "name": "Git",
      "sort_order": 21
    },
    {
      "id": 23,
      "category": "Tools",
      "name": "GitHub",
      "sort_order": 22
    },
    {
      "id": 24,
      "category": "Soft Skills",
      "name": "Team Work",
      "sort_order": 23
    },
    {
      "id": 25,
      "category": "Soft Skills",
      "name": "Communication",
      "sort_order": 24
    },
    {
      "id": 26,
      "category": "Soft Skills",
      "name": "Problem Solving",
      "sort_order": 25
    },
    {
      "id": 27,
      "category": "Soft Skills",
      "name": "Willingness to Learn",
      "sort_order": 26
    }
  ],
  "experience": [
    {
      "id": 1,
      "company": "Innovix Solutions",
      "role": "Junior Frontend Developer",
      "period": "3 months",
      "duration": "3 months",
      "description": "After my internship, I moved into the Junior Frontend Developer role at Innovix Solutions, taking on more ownership of the frontend work on the Core Insurance System and the Customer Care Admin Panel. I developed and maintained responsive, user-friendly interfaces using React and TypeScript, building reusable components so screens stayed consistent across both products. I integrated REST APIs to retrieve, submit, and manage application data, handling loading and error states so the interfaces stayed reliable. I worked closely with the team to keep the interfaces clean, maintainable, and easy to build on.",
      "highlight": "More ownership of the frontend across both admin products",
      "tech": "React, TypeScript, REST APIs, Tailwind CSS",
      "sort_order": 1
    },
    {
      "id": 2,
      "company": "Innovix Solutions",
      "role": "Frontend Developer Intern",
      "period": "3 months",
      "duration": "3 months",
      "description": "I joined Innovix Solutions as a Frontend Developer Intern, learning the team's codebase by building real screens for the Core Insurance System and the Customer Care Admin Panel. I developed responsive, user-friendly interfaces using React and TypeScript, and integrated REST APIs to retrieve, submit, and manage application data. Working with the team, I practised writing clean, maintainable code and turning designs into working interfaces that people could actually use.",
      "highlight": "First real product work — responsive interfaces for insurance and customer care",
      "tech": "React, TypeScript, REST APIs",
      "sort_order": 2
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Core Insurance System",
      "role": "Frontend Developer",
      "period": "Innovix Solutions",
      "description": "A Core Insurance System for managing insurance applications and data. I developed and maintained responsive, user-friendly interfaces using React and TypeScript, building reusable components for the system’s screens and workflows. I integrated REST APIs to retrieve, submit, and manage application data, so the information on screen always reflected what the system held.",
      "highlight": "Insurance workflows rebuilt as responsive, easy-to-use screens",
      "tech": "React, TypeScript, REST APIs, Tailwind CSS",
      "sort_order": 1
    },
    {
      "id": 2,
      "title": "Customer Care Admin Panel",
      "role": "Frontend Developer",
      "period": "Innovix Solutions",
      "description": "An admin panel for customer care teams to look up, update, and manage customer information. I developed and maintained a responsive, user-friendly interface using React and TypeScript, with reusable components for lists, forms, and detail screens. I integrated REST APIs to retrieve, submit, and manage application data, and used React Hook Form with Zod for validated forms.",
      "highlight": "Admin workflows for support teams, with validated forms and API-driven data",
      "tech": "React, TypeScript, REST APIs, React Hook Form, Zod",
      "sort_order": 2
    },
    {
      "id": 3,
      "title": "Personal Portfolio",
      "role": "Frontend Developer",
      "period": "Personal Project",
      "description": "This portfolio website — my own site, built to show my work and skills. I built it with Next.js 15, React, and TypeScript, styled with Tailwind CSS and animated with Framer Motion. The content lives in a Neon PostgreSQL database and is fetched live on every visit, the source is on GitHub, and the site is deployed on Vercel.",
      "highlight": "Live data from Neon PostgreSQL, deployed on Vercel",
      "tech": "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Neon PostgreSQL",
      "sort_order": 3
    }
  ],
  "services": [
    {
      "id": 1,
      "title": "Frontend Development",
      "description": "I build complete frontends with React, Next.js, and TypeScript — components, pages, and routing — so the product works end to end, not just on one screen. The code is written to be clean and maintainable, so it stays easy to change and build on later.",
      "sort_order": 1
    },
    {
      "id": 2,
      "title": "Responsive UI Development",
      "description": "I build interfaces that hold up on phones, tablets, and desktops, using Tailwind CSS, Bootstrap, Material UI, DaisyUI, and Framer Motion. Motion is used to guide attention, and layouts are checked at real sizes so nothing breaks on a small screen.",
      "sort_order": 2
    },
    {
      "id": 3,
      "title": "API Integration",
      "description": "I connect the frontend to real data with REST APIs and Axios — fetching lists, submitting forms, and handling loading and error states. The UI stays in sync with what the server returns, so what people see is always up to date.",
      "sort_order": 3
    },
    {
      "id": 4,
      "title": "Forms & State Management",
      "description": "I build forms with React Hook Form and Zod that validate as you type, with clear errors and no lost input. Shared state is managed with Redux Toolkit and Context API, so different screens stay consistent with each other.",
      "sort_order": 4
    },
    {
      "id": 5,
      "title": "Reusable Components & Design Systems",
      "description": "I build reusable components and consistent interface patterns, so screens share the same building blocks instead of being rebuilt from scratch. That keeps products consistent, easier to maintain, and faster to extend with new features.",
      "sort_order": 5
    }
  ],
  "education": [
    {
      "id": 1,
      "school": "University of Computer Studies, Magway",
      "degree": "B.C.Sc.",
      "period": "Expected Graduate February 2027",
      "sort_order": 1
    }
  ],
  "socials": [
    {
      "id": 1,
      "platform": "Email",
      "url": "mailto:kkaunghtetzanthar@gmail.com",
      "sort_order": 1
    },
    {
      "id": 2,
      "platform": "GitHub",
      "url": "https://github.com/Zenn257920",
      "sort_order": 2
    }
  ]
};
