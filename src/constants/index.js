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
	favtutor,
	intervue,
	prabhavati,
	todquest,
	kaustubh,
	pushpender,
	token,
	cli,
	fp,
	socrates,
	universal
} from "../assets";

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

const currentMonth = new Date().getMonth() - 1;

const experiences = [
	{
		title: "Full Stack Development (Meteor)",
		company_name: "UniversalChart",
		icon: prabhavati,
		iconBg: "#383E56",
		date: `Feb 2023 - Oct 2023`,
		points: [
			"During the development of the meteor React project, I had the opportunity to make a meaningful contribution to the healthcare sector. By creating a platform that focuses on hospital facilities and patient-related information such as diagnostic reports, document references, observations, and immunizations, I aimed to improve the overall patient experience and enhance the efficiency of healthcare providers. ",
			"In the frontend development of the project, I utilized React to build a highly interactive and dynamic user interface, leveraging its component-based architecture for code reusability and maintainability. Additionally, I incorporated Tailwind CSS to streamline the styling process, allowing for easy customization and responsive design implementation.",
			"On the backend side, I implemented server-side logic using Meteor's built-in capabilities and JavaScript. I created RESTful APIs to handle data retrieval, updates, and other backend operations with MongoDB. Additionally, I integrated third-party APIs for features such as document referencing and immunization data retrieval. ",
		],
	},
	{
		title: "Full Stack Intern (MERN)",
		company_name: "Todquest Enterprises Pvt. Ltd.",
		icon: todquest,
		iconBg: "#383E56",
		date: "Nov 2022 - Feb 2023",
		points: [
			"Contributed in Educational Resources Planning project, developed new test creation and questions categories back-end integrated and responsive UIs with respective Postman tested APIs, which will be used by the schools to create tests for students and upload new questions on the platform. Contributed in a source code written by the senior developers. ",
			"Contributed in an Safewent app, developed multiple Postman tested APIs for all User services like Otps, Products, Categories, Cart etc. along with admin dashboard with backend integrated and responsive UIs in React, used for purchasing online products for users safe travel. ",
			"Contributed in an ecommerce web app, which will be used for purchasing clothes online, developed add deals, categories responsive back-end integrated UIs with multiple postman tested simple CRUD Apis to some complexity.",
		],
	},
	{
		title: "Full Stack Engineer",
		company_name: "TVH Consulting",
		icon: intervue,
		iconBg: "#E6DEDD",
		date: "July 2022 - Nov 2022",
		points: [
			"Developed 2000+ programming-related questions on Node.js, Express.js, React.js, MongoDB and Git etc. asked in 500+ interviews held on Intervue. Created Data Structures and Algorithms problems with test cases from scratch.",
			"Worked with Engineering team while developing Javascript projects & DSA problems in C++.",
		],
	},
	{
		title: "Technical Content Writer",
		company_name: "FavTutor",
		icon: favtutor,
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
		icon: prabhavati,
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
			"It was pleasure working with Amresh  during his internship at Intervue. Apart from technical content-writing skills, i was impressed with Amresh's ability to meet tight deadlines without compromising on the quality of work and his professionalism he has shown..",
		name: "Pushpender Rautela",
		designation: "Co-founder",
		company: "Intervue.io",
		image: pushpender,
	},
	{
		testimonial:
			"I had the pleasure of working with Amresh  during his internship at FavTutor. I was extremely impressed with Amresh's technical content-writing skills. He was able to quickly grasp complex technical concepts and communicate them in a clear and engaging way. In addition to his technical writing skills, Amresh also demonstrated a strong work ethic and a positive attitude.",
		name: "Kaustubh Saini",
		designation: "CEO",
		company: "FavTutor",
		image: kaustubh,
	},
];
const projects = [
	{
		name: "UniversalChart",
		description:
			"I leveraged a tech stack consisting of Meteor, React, MongoDB, Tailwind CSS, and JavaScript to develop a user-friendly interface with seamless data management and efficient server-side logic. This experience allowed me to contribute to the healthcare sector by creating a scalable and intuitive platform for hospital facilities, patient records, and various medical functionalities.",
		tags: [
			{
				name: "meteor",
				color: "blue-text-gradient",
			},
			{
				name: "react",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind css",
				color: "red-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
		],
		// image: fp,
		image: universal,
		source_code_link: "https://github.com/Brunom8218",
		source_code_link: "https://Universalchart.com/",
	},
	{
		name: "Learn With Socrates",
		description:
			"Developed comprehensive test cases for back-end using pytest and graphene test client, ensuring the reliability and stability of the platform. Contributed to the development of Chip Leader Ai project, utilizing React/Bootstrap, PHP/REST/MySQL, and Firebase to create a high-performance and scalable platform. Reviewed code, debugged and corrected issues, and merged 1200+ pull requests with Github, ensuring the quality and stability of the codebase. Actively contributed ideas and suggestions 2+ times a week in meetings and delivered regular updates on deadlines, designs, and enhancements, ensuring effective communication and collaboration within the team.",
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
				name: "php",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
		],
		// image: fp,
		image: socrates,
		source_code_link: "https://github.com/Brunom8218",
		source_code_link: "https://www.Learnwithsocrates.com/",
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
		image: cli,
		source_code_link: "https://github.com/Brunom8218",
	},
	// {
	// 	name: "Complete Authentication API",
	// 	description:
	// 		"A user can register, login, reset password using mail. JWT authentication API tested with Postman.",
	// 	tags: [
	// 		{
	// 			name: "nodejs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "expressjs",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "mongodb",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: token,
	// 	source_code_link: "https://github.com/Brunom8218",
	// },
];

export { services, technologies, experiences, testimonials, projects };
