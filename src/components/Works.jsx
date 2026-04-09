import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, external } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { fadeIn } from "../utils/motion";

const ProjectCard = ({
	name,
	description,
	tags,
	image,
	link_type,
	source_code_link,
}) => {
	return (
		<Tilt
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
		>
			<div className="relative w-full h-[230px]">
				{image ? (
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
				) : (
					<div className="w-full h-full bg-secondary rounded-2xl">
						<p className="text-white text-2xl flex justify-center pt-24">
							Coming Soon...
						</p>
					</div>
				)}
				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<img
							src={link_type && link_type == "github" ? github : external}
							alt="github"
							className="w-1/2 h-1/2object-contain"
						/>
					</div>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white text-[24px] font-bold">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={tag.name}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>
		</Tilt>
	);
};

const Works = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<>
			<p className={`${styles.sectionSubText} text-center`}>My work</p>
			<h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) =>
					!isMobile ? (
						<motion.div
							variants={fadeIn("up", "spring", index * 0.5, 0.75)}
							key={`project-${index}`}
						>
							<ProjectCard
								index={index}
								{...project}
							/>
						</motion.div>
					) : (
						<ProjectCard
							key={`project-${index}`}
							index={index}
							{...project}
						/>
					),
				)}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");
