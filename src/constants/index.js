import {
	html,
	css,
	javascript,
	reactjs,
	ruby,
	rails,
	csharp,
	aspnetcore,
	aws,
	strongmind,
	accessifiers,
	familysearch,
	byuhawaii,
	imi,
	learncanvasai,
	ezvending,
	gladiadog,
	battleship,
	spencer,
	knowlton,
	jothan,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
	},
];

const languages = [
	{
		name: "HTML",
		icon: html,
	},
	{
		name: "CSS",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "Ruby",
		icon: ruby,
	},
	{
		name: "C#",
		icon: csharp,
	},
];

const technologies = [
	{
		name: "Ruby on Rails",
		icon: rails,
	},
	{
		name: "React",
		icon: reactjs,
	},
	{
		name: "ASP.NET Core",
		icon: aspnetcore,
	},
	{
		name: "AWS",
		icon: aws,
	},
];

const experiences = [
	{
		title: "Software Engineer",
		company_name: "StrongMind",
		icon: strongmind,
		iconBg: "#FFFFFF",
		date: "March 2025 - Current",
		points: [
			"Implemented 1EdTech OneRoster–compliant RESTful APIs to roster and index thousands of student records daily from an external SIS.",
			"Contributed to migrating Python-based AWS serverless pipelines to a centralized service to reduce cost, operational complexity, and data errors.",
			"Developed and maintained end - to - end features across a large Rails - based platform, delivering user - facing improvements.",
			"Implemented SAML IdP - initiated SSO and established integration testing using a headless browser.",
		],
	},
	{
		title: "Software Engineer (Volunteer)",
		company_name: "Accessifiers",
		icon: accessifiers,
		iconBg: "#383E56",
		date: "September 2024 - Current",
		points: [
			"Developed a branded learning management system using SASS and Python to reinforce brand identity.",
			"Developed a scalable LMS prototype on Azure with Docker and Tutor(Open edX).",
			"Mentored team members and project sponsor on LMS technologies through creating comprehensive documentation to facilitate knowledge transfer.",
		],
	},
	{
		title: "EIS Student Developer/Analyst",
		company_name: "Brigham Young University-Hawaii",
		icon: byuhawaii,
		iconBg: "#383E56",
		date: "May 2022 - Current",
		points: [
			"Developed a real-time dashboard prototype using React, ASP.NET Core, and MySQL to monitor external services with robust caching and minimum latency.",
			"Developed a REST API using ASP.NET Core and MySQL to automate test record management of 3000 users and reduce manual processing time by 95%",
			"Integrated SAML Single Sign-On with Quicklaunch IdP to replace cookie-based authentication to enhance web app security.",
			"Maintained 9 web applications using Agile practice through code reviews, bug fixes, and version control to improve code quality and reduce technical debt.",
		],
	},
	{
		title: "Front-End Developer Intern",
		company_name: "FamilySearch",
		icon: familysearch,
		iconBg: "#383E56",
		date: "June 2023 - September 2023",
		points: [
			"Developed a transliteration prototype using JavaScript and React to convert Romanized Filipino names into the ancient Baybayin script",
			"Developed a prototype for dynamic rendering of PDF documents within web pages using React and FamilySearch in -house UI components.",
			"Implemented automated unit and integration testing and achieved 100% code coverage in unit testing using react - testing - library and jest",
			"Collaborated with UX/UI designers to implement culturally influenced UI components and pages from Figma to increase engagement and outreach of target audience",
		],
	},
	{
		title: "Project Manager Intern",
		company_name: "Integrated Micro-Electronics, Inc. (IMI Global)",
		icon: imi,
		iconBg: "#383E56",
		date: "January 2022 - April 2022",
		points: [
			"Developed a prototype CRUD web application using XAMP stack to automate the auditing of employees’ training record.",
			"Pioneered an international internship collaboration between IMI and BYUH and achieving a 100% deliverable rate despite 17-hour time zone difference.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"The short time I worked with him I could tell that he will go far in this career, his attitude is amazing and is already learning his style in software engineering!",
		name: "Jothan Kelepolo",
		designation: "Full Stack Engineer",
		company: "Data Surge",
		image: jothan,
	},
	{
		testimonial:
			"I had a wonderful time managing Jason on my team. Although only for a few semesters I know that whatever I threw at him, he would try his absolute best to figure out the solution.",
		name: "Knowlton Itaeeahu",
		designation: "Senior Enterprise Systems Developer",
		company: "Brigham Young Uniersity-Hawaii",
		image: knowlton,
	},
	{
		testimonial:
			"Jason displayed a remarkable ability to swiftly master React and related technologies and consistently delivering high-quality work.",
		name: "Spencer Memmott",
		designation: "Full Stack Engineer",
		company: "FamilySearch",
		image: spencer,
	},
];

const projects = [
	{
		name: "LearnCanvas AI",
		description:
			"A fullstack web application that uses OpenAI's generative AI and Canvas LMS API to provide feedback on students' assignments and submissions",
		tags: [
			{
				name: "React.js",
				color: "blue-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "green-text-gradient",
			},
			{
				name: "Node.js",
				color: "pink-text-gradient",
			},
			{
				name: "Express.js",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "yellow-text-gradient",
			},
			{
				name: "Canvas LMS API",
				color: "red-text-gradient",
			},
			{
				name: "OpenAI API",
				color: "blue-text-gradient",
			},
		],
		image: learncanvasai,
		link_type: "github",
		source_code_link: "https://github.com/Tidbit0519/learncanvas-ai",
	},
	{
		name: "EZ Vending",
		description:
			"A console program that helps BYU users to locate the nearest vending machines to their current building locations, and also recommend snacks based on their desired vending category and budget, and stores their favorite snacks along with purchase dates which they can retrieve to view or delete later.",
		tags: [
			{
				name: "JavaScript",
				color: "blue-text-gradient",
			},
			{
				name: "Node.js",
				color: "green-text-gradient",
			},
			{
				name: "AWS",
				color: "pink-text-gradient",
			},
			{
				name: "Oracle DB",
				color: "orange-text-gradient",
			},
		],
		image: ezvending,
		link_type: "github",
		source_code_link: "https://github.com/Tidbit0519/EzVending",
	},
	{
		name: "Battleship",
		description:
			"A simple 2D android mobile game where user control a battleship on the center of the screen and shoots any incoming airplanes and submarines to get the highest possible score within the time limit.",
		tags: [
			{
				name: "Java",
				color: "blue-text-gradient",
			},
			{
				name: "Android Studio",
				color: "green-text-gradient",
			},
		],
		image: battleship,
		link_type: "github",
		source_code_link: "https://github.com/Tidbit0519/battleship-game",
	},
	{
		name: "Gladiadog",
		description:
			"An action arcade game where the player controls a dog swordsman and defeats a giant slime in a gladiator arena! There are a total of 3 rounds, and only the best time is saved! The game is developed as part of my college's Unity game project, and it is still a prototype. Feel free to leave a feedback!",
		tags: [
			{
				name: "C#",
				color: "blue-text-gradient",
			},
			{
				name: "Unity",
				color: "green-text-gradient",
			},
		],
		image: gladiadog,
		link_type: "external",
		source_code_link: "https://tibit0519.itch.io/gladiadog",
	},
];

export {
	languages,
	technologies,
	experiences,
	projects,
	testimonials,
};
