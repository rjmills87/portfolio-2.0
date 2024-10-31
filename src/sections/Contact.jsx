import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import fadeInVariant from "../animations/animations";

export default function Contact() {
  return (
    <>
      <motion.div
        id="contact"
        className="m-6 my-20 lg:mx-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold pb-10 text-center">
          Contact<span className="text-blue-600">.</span>
        </h2>
        <p className="text-center pb-10 text-lg">
          I am available for freelance work. If you are interested in hiring me
          for your project, please contact me.
        </p>
        <ContactForm />
      </motion.div>
    </>
  );
}
