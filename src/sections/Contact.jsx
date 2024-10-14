import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div id="contact" className="m-6 my-20 lg:mx-20">
        <h2 className="text-5xl lg:text-6xl font-bold pb-10 text-center">
          Contact<span className="text-blue-600">.</span>
        </h2>
        <p className="text-center pb-10 text-lg">
          I am available for freelance work. If you are interested in hiring me
          for your project, please contact me.
        </p>
        <ContactForm />
      </div>
    </>
  );
}
