import { motion } from "framer-motion";
import fadeInVariant from "../animations/animations";

export default function About() {
  return (
    <>
      <motion.div
        id="about"
        className=" flex flex-col justify-center items-center scroll-mt-36 m-6 my-20 lg:mx-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold pb-12 text-center">
          About<span className="text-blue-600">.</span>
        </h2>
        <p className="text-center text-lg font-light leading-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos odit
          unde cumque similique ex? Omnis laborum neque sed repudiandae repellat
          voluptates, facere magnam molestias, quaerat, eveniet numquam tempore
          non consectetur voluptatibus modi voluptatem deserunt nobis! A esse
          deserunt nihil magnam ratione corporis, quos cupiditate voluptatum
          unde possimus dolore omnis earum.
        </p>
      </motion.div>
    </>
  );
}
