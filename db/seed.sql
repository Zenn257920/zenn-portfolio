-- Seed data for the Kaung Htet Zan Thar portfolio.
-- Generated from the Neon database (project kaung-portfolio, database neondb).
-- Apply with: psql "$DATABASE_URL" -f db/seed.sql

TRUNCATE profile RESTART IDENTITY CASCADE;
INSERT INTO profile (id, name, title, location, email, phone, bio, availability) VALUES
(1, 'Kaung Htet Zan Thar', 'Frontend Developer', 'Zawana street, Thingangyun Tsp, Yangon', 'kkaunghtetzanthar@gmail.com', '09-666500045', 'I am a passionate Frontend Developer with experience in React, Next.js, TypeScript, and Tailwind CSS. I enjoy building responsive, reusable, and user-friendly web applications while writing clean and maintainable code. I am eager to contribute my skills to creating reliable Software solutions.', 'Open to frontend opportunities');

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
(1, 'Innovix Solutions', 'Junior Frontend Developer', '3 months', '3 months', 'Contributed to the development and maintenance of a Core Insurance System and Customer Care Admin Panel. Developed and maintained responsive, user-friendly interfaces using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.', 'Core Insurance System & Customer Care Admin Panel', 'React, TypeScript, REST APIs', 1),
(2, 'Innovix Solutions', 'Frontend Developer Intern', '3 months', '3 months', 'Contributed to the development and maintenance of a Core Insurance System and Customer Care Admin Panel. Developed and maintained responsive, user-friendly interfaces using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.', 'Core Insurance System & Customer Care Admin Panel', 'React, TypeScript, REST APIs', 2);

TRUNCATE projects RESTART IDENTITY CASCADE;
INSERT INTO projects (id, title, role, period, description, highlight, tech, sort_order) VALUES
(1, 'Core Insurance System', 'Frontend Developer', 'Innovix Solutions', 'Developed and maintained responsive, user-friendly interfaces for a Core Insurance System using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.', 'Responsive interfaces with React and TypeScript', 'React, TypeScript, REST APIs', 1),
(2, 'Customer Care Admin Panel', 'Frontend Developer', 'Innovix Solutions', 'Developed and maintained a responsive, user-friendly Customer Care Admin Panel using React and TypeScript. Integrated REST APIs to retrieve, submit, and manage application data.', 'Admin panel with API-driven data management', 'React, TypeScript, REST APIs', 2);

TRUNCATE services RESTART IDENTITY CASCADE;
INSERT INTO services (id, title, description, sort_order) VALUES
(1, 'Frontend Development', 'Responsive, reusable, user-friendly web applications with React, Next.js, and TypeScript, written with clean and maintainable code.', 1),
(2, 'Responsive UI Development', 'User-friendly interfaces with Tailwind CSS, Bootstrap, Material UI, DaisyUI, and Framer Motion.', 2),
(3, 'API Integration', 'REST API integration with Axios to retrieve, submit, and manage application data.', 3),
(4, 'Forms & State Management', 'Forms with React Hook Form and Zod, and state with Redux Toolkit and Context API.', 4);

TRUNCATE education RESTART IDENTITY CASCADE;
INSERT INTO education (id, school, degree, period, sort_order) VALUES
(1, 'University of Computer Studies, Magway', 'B.C.Sc.', 'Expected Graduate February 2027', 1);

TRUNCATE socials RESTART IDENTITY CASCADE;
INSERT INTO socials (id, platform, url, sort_order) VALUES
(1, 'Email', 'mailto:kkaunghtetzanthar@gmail.com', 1);
