import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.5, 0.75)}
		className=" bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full max-h-[480px] flex flex-col justify-between"
	>
		<p className="text-white font-black text-[48px]">&quot;</p>

		<div className="mb-8">
			<p className="text-white tracking-wider text-[16px] leading-relaxed">
				{testimonial}
			</p>
		</div>

		<div className="flex justify-between items-center gap-1 mt-auto">
			<div className="flex-1 flex flex-col">
				<p className="text-white font-medium text-[16px]">
					<span className="blue-text-gradient">@</span> {name}
				</p>
				<p className="mt-1 text-secondary text-[12px]">
					{designation} of {company}
				</p>
			</div>

			<img
				src={image}
				alt={`feedback_by-${name}`}
				className="w-10 h-10 rounded-full object-cover"
			/>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className={`mt-12 bg-black-100 rounded-[20px]`}>
			<div
				className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Testimonials.</h2>
				</motion.div>
			</div>
			<div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
			<div className={`pb-14 ${styles.paddingX} flex justify-center`}>
				<a
					href="https://www.linkedin.com/in/jasonbantzetan/details/recommendations/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-secondary hover:text-white text-[14px] transition-colors"
				>
					View more on LinkedIn →
				</a>
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");
