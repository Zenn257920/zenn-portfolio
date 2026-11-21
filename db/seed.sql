-- Seed data for the Kaung Htet Zan Thar portfolio.
-- Generated from the Neon database (project kaung-portfolio, database neondb).
-- Apply with: psql "$DATABASE_URL" -f db/seed.sql


TRUNCATE profile RESTART IDENTITY CASCADE;

INSERT INTO profile (id, name, title, location, email, phone, bio, availability) VALUES
(1, 'Kaung Htet Zan Thar', 'Frontend Developer', 'Zawana street, Thingangyun Tsp, Yangon', 'kkaunghtetzanthar@gmail.com', '09-666500045', 'I am a Frontend Developer based in Yangon, Myanmar, building responsive, reusable, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS. At Innovix Solutions I worked on a Core Insurance System and a Customer Care Admin Panel, developing interfaces with clean, maintainable code and integrating REST APIs to retrieve, submit, and manage application data. I am a B.C.Sc. student at the University of Computer Studies, Magway, expecting to graduate in February 2027, and I am eager to keep learning and contribute to reliable software solutions.', 'Open to frontend opportunities');

TRUNCATE skills RESTART IDENTITY CASCADE;

INSERT INTO skills (id, category, name, sort_order) VALUES
(1, 'Frontend', 'HTML5', 0),
(2, 'Frontend', 'CSS3', 1),
(3, 'Frontend', 'JavaScript', 2),
(4, 'Frontend', 'TypeScript', 3),
(5, 'Frameworks', 'React.js', 4),
(6, 'Frameworks', 'Next.js', 5),
(7, 'Styling', 'Tailwind CSS', 6),
(8, 'Styling', 'Bootstrap', 7),
(9, 'Styling', 'Material UI', 8),
(10, 'Styling', 'DaisyUI', 9),
(11, 'Styling', 'Framer Motion', 10),
(12, 'State Management', 'Redux Toolkit', 11),
(13, 'State Management', 'Context API', 12),
(14, 'API Integration', 'REST APIs', 13),
(15, 'API Integration', 'Axios', 14),
(16, 'Forms & Validation', 'React Hook Form', 15),
(17, 'Forms & Validation', 'Zod', 16),
(18, 'Tools', 'Visual Studio Code', 17),
(19, 'Tools', 'Git Bash', 18),
(20, 'Tools', 'PostgreSQL', 19),
(21, 'Tools', 'Postman', 20),
(22, 'Tools', 'Git', 21),
(23, 'Tools', 'GitHub', 22),
(24, 'Soft Skills', 'Team Work', 23),
(25, 'Soft Skills', 'Communication', 24),
(26, 'Soft Skills', 'Problem Solving', 25),
(27, 'Soft Skills', 'Willingness to Learn', 26);

TRUNCATE experience RESTART IDENTITY CASCADE;

INSERT INTO experience (id, company, role, period, duration, description, highlight, tech, sort_order) VALUES
(1, 'Innovix Solutions', 'Junior Frontend Developer', '3 months', '3 months', 'After my internship, I moved into the Junior Frontend Developer role at Innovix Solutions, taking on more ownership of the frontend work on the Core Insurance System and the Customer Care Admin Panel. I developed and maintained responsive, user-friendly interfaces using React and TypeScript, building reusable components so screens stayed consistent across both products. I integrated REST APIs to retrieve, submit, and manage application data, handling loading and error states so the interfaces stayed reliable. I worked closely with the team to keep the interfaces clean, maintainable, and easy to build on.', 'More ownership of the frontend across both admin products', 'React, TypeScript, REST APIs, Tailwind CSS', 1),
(2, 'Innovix Solutions', 'Frontend Developer Intern', '3 months', '3 months', 'I joined Innovix Solutions as a Frontend Developer Intern, learning the team''s codebase by building real screens for the Core Insurance System and the Customer Care Admin Panel. I developed responsive, user-friendly interfaces using React and TypeScript, and integrated REST APIs to retrieve, submit, and manage application data. Working with the team, I practised writing clean, maintainable code and turning designs into working interfaces that people could actually use.', 'First real product work — responsive interfaces for insurance and customer care', 'React, TypeScript, REST APIs', 2);

TRUNCATE projects RESTART IDENTITY CASCADE;

INSERT INTO projects (id, title, role, period, description, highlight, tech, sort_order) VALUES
(1, 'Core Insurance System', 'Frontend Developer', 'Innovix Solutions', 'A Core Insurance System for managing insurance applications and data. I developed and maintained responsive, user-friendly interfaces using React and TypeScript, building reusable components for the system’s screens and workflows. I integrated REST APIs to retrieve, submit, and manage application data, so the information on screen always reflected what the system held.', 'Insurance workflows rebuilt as responsive, easy-to-use screens', 'React, TypeScript, REST APIs, Tailwind CSS', 1),
(2, 'Customer Care Admin Panel', 'Frontend Developer', 'Innovix Solutions', 'An admin panel for customer care teams to look up, update, and manage customer information. I developed and maintained a responsive, user-friendly interface using React and TypeScript, with reusable components for lists, forms, and detail screens. I integrated REST APIs to retrieve, submit, and manage application data, and used React Hook Form with Zod for validated forms.', 'Admin workflows for support teams, with validated forms and API-driven data', 'React, TypeScript, REST APIs, React Hook Form, Zod', 2),
(3, 'Personal Portfolio', 'Frontend Developer', 'Personal Project', 'This portfolio website — my own site, built to show my work and skills. I built it with Next.js 15, React, and TypeScript, styled with Tailwind CSS and animated with Framer Motion. The content lives in a Neon PostgreSQL database and is fetched live on every visit, the source is on GitHub, and the site is deployed on Vercel.', 'Live data from Neon PostgreSQL, deployed on Vercel', 'Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Neon PostgreSQL', 3);

TRUNCATE services RESTART IDENTITY CASCADE;

INSERT INTO services (id, title, description, sort_order) VALUES
(1, 'Frontend Development', 'I build complete frontends with React, Next.js, and TypeScript — components, pages, and routing — so the product works end to end, not just on one screen. The code is written to be clean and maintainable, so it stays easy to change and build on later.', 1),
(2, 'Responsive UI Development', 'I build interfaces that hold up on phones, tablets, and desktops, using Tailwind CSS, Bootstrap, Material UI, DaisyUI, and Framer Motion. Motion is used to guide attention, and layouts are checked at real sizes so nothing breaks on a small screen.', 2),
(3, 'API Integration', 'I connect the frontend to real data with REST APIs and Axios — fetching lists, submitting forms, and handling loading and error states. The UI stays in sync with what the server returns, so what people see is always up to date.', 3),
(4, 'Forms & State Management', 'I build forms with React Hook Form and Zod that validate as you type, with clear errors and no lost input. Shared state is managed with Redux Toolkit and Context API, so different screens stay consistent with each other.', 4),
(5, 'Reusable Components & Design Systems', 'I build reusable components and consistent interface patterns, so screens share the same building blocks instead of being rebuilt from scratch. That keeps products consistent, easier to maintain, and faster to extend with new features.', 5);

TRUNCATE education RESTART IDENTITY CASCADE;

INSERT INTO education (id, school, degree, period, sort_order) VALUES
(1, 'University of Computer Studies, Magway', 'B.C.Sc.', 'Expected Graduate February 2027', 1);

TRUNCATE socials RESTART IDENTITY CASCADE;

INSERT INTO socials (id, platform, url, sort_order) VALUES
(1, 'Email', 'mailto:kkaunghtetzanthar@gmail.com', 1),
(2, 'GitHub', 'https://github.com/Zenn257920', 2);
