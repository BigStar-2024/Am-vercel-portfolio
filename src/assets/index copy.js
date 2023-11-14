import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

import { favtutor } from "../assets/company/favtutor.png";
import { intervue } from "../assets/company/intervue.jpeg";
import { prabhavati } from "../assets/company/prabhavati.jpeg";
import { todquest } from "../assets/company/todquest.png";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "MERN Stack Developer",
		icon: web,
	},
	{
		title: "Backend Developer",
		icon: mobile,
	},
	{
		title: "Frontend Developer",
		icon: backend,
	},
	{
		title: "Technical Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];
// favtutor,
// intervue,
// prabhavati,
// todquest
const experiences = [
	{
		title: "Full Stack Intern (MERN)",
		company_name: "Todquest Enterprises Pvt. Ltd.",
		icon: todquest,
		iconBg: "#383E56",
		date: "Feb 2023 - Currently working",
		points: [
			" Lead the development of Learn With Socrates, an educational platform for K-8 students, utilizing cutting-edge technologies such as React/Mui,	Django/GraphQL/Postgres, AWS, Digital Oceans, and CI/CD to ensure optimal performance and scalability.",
			" Implemented custom authentication backends to secure APIs and	integrated OAuth with Google and Facebook to provide seamless and secure user authentication.",
			"Successfully implemented multi-language support (English, Spanish, and	Thai) for the Learn With Socrates using Django translation model and i18next for React front-end, providing a localized experience for users.",
		],
	},
	{
		title: "Technical Content Intern",
		company_name: "Intervue.io",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "July 2022 - Feb 2023",
		points: [
			"Developed 2000+ programming-related questions on Node.js, Express.js, React.js, MongoDB and Git etc. asked in 500+ interviews held on Intervue. Created Data Structures and Algorithms problems with test cases from scratch.",
			"Worked with Engineering team while developing Javascript projects & DSA problems in C++.",
		],
	},
	{
		title: "Technical Content Writer",
		company_name: "FavTutor",
		icon: shopify,
		iconBg: "#383E56",
		date: "Nov 2022 – Jan 2023",
		points: [
			"Researched on Complex C++ in-built functions and writing about them in most engaging and understanding way",
			"35 articles completed, some Ranks on 1st webpage for searches with large users screen time",
		],
	},
	{
		title: " Jr. Full stack developer",
		company_name: "Prabhavati Digital Services Pvt Ltd",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Team project, focused mainly on UI and added features using HTML, CSS and Javascript",
			"Contributed in debugging, Login Page, Admin Panel and implemented CRUD operations on products and categories.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"It was pleasure working with Anubhav Agarwal during his internship at Intervue. Apart from technical content-writing skills, i was impressed with Anubhav's ability to meet tight deadlines without compromising on the quality of work and his professionalism he has shown..",
		name: "Pushpender Rautela",
		designation: "Co-founder",
		company: "Intervue.io",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I had the pleasure of working with Anubhav Agarwal during his internship at FavTutor. I was extremely impressed with Anubhav's technical content-writing skills. He was able to quickly grasp complex technical concepts and communicate them in a clear and engaging way. In addition to his technical writing skills, Anubhav also demonstrated a strong work ethic and a positive attitude.",
		name: "Kaustubh Saini",
		designation: "CEO",
		company: "FavTutor",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
];

const projects = [
	{
		name: "A Flipkart Clone",
		description:
			" User can Signup, Signin and can explore all categories and products available on homepage, apply filters. Each category has it’s own UI with associated products. User can go to any specific product for more details with add to cart | Admin Dashboard | JWT APIs",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://github.com",
	},
	{
		name: "My-CLI - A Command Line Interface",
		description:
			"Automation of Various Operations using commands, implemented custom functions. User can register, login and can do CRUD operations on its data with searching and useful functions with Quiz app functionality",
		tags: [
			{
				name: "nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "express",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://github.com",
	},
	{
		name: "Complete Authentication API",
		description:
			"A user can register, login, reset password using mail. JWT authentication API tested with Postman.",
		tags: [
			{
				name: "nodejs",
				color: "blue-text-gradient",
			},
			{
				name: "expressjs",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com",
	},
];

export { services, technologies, experiences, testimonials, projects };
