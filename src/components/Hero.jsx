import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { ProgrammerCanvas } from "./canvas"
import { textVariant, fadeIn } from "../utils/motion"

const Hero = () => {
  return (
    <section className={`relative w-full h-[720px] mx-auto sm:mb-36 mb-8`}>
      <div
        className={`inset-0 top-[120px] max-w-full mx-auto ${styles.paddingX} flex flex-row items-start gap-5 sm:mb-12 -mb-24`}
      >
        <div className="flex flex-col justify-center items-center mt-5"></div>
        <div>
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915eff]">Jason</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop front-end in React,
              <br className="sm:block-hidden" />
              and aspiring to be a full stack developer.
            </p>
          </motion.div>
        </div>
      </div>

      <ProgrammerCanvas />

      <div className="relative sm:bottom-48 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[14px] max-w-3xl leading-[30px] p-2"
          >
            Scroll down to learn more about me!
          </motion.p>
          <div className="flex justify-center items-center">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "")
