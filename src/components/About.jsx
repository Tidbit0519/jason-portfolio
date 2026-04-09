import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
			>
				Experience in full-stack development using tools
				like <span className="font-bold">Ruby on Rails, React, ASP.NET Core, and more. </span>
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, "about");
