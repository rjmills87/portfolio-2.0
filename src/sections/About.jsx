import { motion } from "framer-motion";
import animations from "../animations/animations";

export default function About() {
  return (
    <>
      <motion.div
        id="about"
        className=" flex flex-col justify-center items-center scroll-mt-36 m-6 my-20 lg:mx-20"
        variants={animations.fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold pb-12 text-center">
          About<span className="text-blue-600">.</span>
        </h2>
        <p className="text-center text-lg font-light leading-7">
          I&apos;m Rhys, a web developer based in Ipswich, UK, with a passion
          for crafting engaging and user-friendly digital experiences. I&apos;m
          driven by a desire to learn and grow, constantly exploring the latest
          web technologies to build sleek, responsive websites that captivate
          users.
        </p>
      </motion.div>
    </>
  );
}
