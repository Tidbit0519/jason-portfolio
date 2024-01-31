import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github, external } from "../assets"
import { SectionWrapper } from "../hoc"
import { gameProjects, webProjects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link_type,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link_type == "github"? github : external}
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
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>

        <div className="w-full flex">
          <div className="mt-3 text-secondary text-[17px] max-w-3xl leading=[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </div>
        </div>
      </motion.div>

      <p
        className={`${styles.sectionSubText} ${styles.paddingY} flex justify-center items-center`}
      >
        Web Development
      </p>
      <div className="flex flex-wrap gap-7">
        {webProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

      <p
        className={`${styles.sectionSubText} ${styles.paddingY} flex justify-center items-center`}
      >
        Game Development
      </p>
      <div className="flex flex-wrap gap-7">
        {gameProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
