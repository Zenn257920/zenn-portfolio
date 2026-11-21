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
      "bio": "I am a passionate Frontend Developer with experience in React, Next.js, TypeScript, and Tailwind CSS. I enjoy building responsive, reusable, and user-friendly web applications while writing clean and maintainable code. I am eager to contribute my skills to creating reliable Software solutions.",
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
      "name": "Postgre",
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
      "description": "Contributed to the development and maintenance of a Core Insurance System and Customer Care Admin Panel. Developed and maintained responsive, user-friendly interfaces using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.",
      "highlight": "Core Insurance System & Customer Care Admin Panel",
      "tech": "React, TypeScript, REST APIs",
      "sort_order": 1
    },
    {
      "id": 2,
      "company": "Innovix Solutions",
      "role": "Frontend Developer Intern",
      "period": "3 months",
      "duration": "3 months",
      "description": "Contributed to the development and maintenance of a Core Insurance System and Customer Care Admin Panel. Developed and maintained responsive, user-friendly interfaces using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.",
      "highlight": "Core Insurance System & Customer Care Admin Panel",
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
      "description": "Developed and maintained responsive, user-friendly interfaces for a Core Insurance System using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.",
      "highlight": "Responsive interfaces with React and TypeScript",
      "tech": "React, TypeScript, REST APIs",
      "sort_order": 1
    },
    {
      "id": 2,
      "title": "Customer Care Admin Panel",
      "role": "Frontend Developer",
      "period": "Innovix Solutions",
      "description": "Developed and maintained a responsive, user-friendly Customer Care Admin Panel using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.",
      "highlight": "Admin panel with API-driven data management",
      "tech": "React, TypeScript, REST APIs",
      "sort_order": 2
    }
  ],
  "services": [
    {
      "id": 1,
      "title": "Frontend Development",
      "description": "Responsive, reusable, user-friendly web applications with React, Next.js, and TypeScript, written with clean and maintainable code.",
      "sort_order": 1
    },
    {
      "id": 2,
      "title": "Responsive UI Development",
      "description": "User-friendly interfaces with Tailwind CSS, Bootstrap, Material UI, DaisyUI, and Framer Motion.",
      "sort_order": 2
    },
    {
      "id": 3,
      "title": "API Integration",
      "description": "REST API integration with Axios to retrieve, submit, and manage application data.",
      "sort_order": 3
    },
    {
      "id": 4,
      "title": "Forms & State Management",
      "description": "Forms with React Hook Form and Zod, and state with Redux Toolkit and Context API.",
      "sort_order": 4
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
    }
  ]
};
