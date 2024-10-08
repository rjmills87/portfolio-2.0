import Button from "../components/Button";
import { ArrowUpRightCircle } from "iconoir-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between mx-6 my-32 gap-12 lg:mx-20">
        <div className="flex flex-col lg:w-2/3">
          <span className="text-2xl lg:text-3xl font-light pb-2 text-gray-600">
            Hi, I&apos;m Rhys 👋🏻
          </span>
          <h1 className=" text-6xl md:text-7xl lg:text-8xl font-extrabold pb-4 lg:pb-8">
            <span className="text-blue-600">Front</span>end Developer
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 font-light pb-8 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            accusantium nihil.
          </p>
          <div className="flex items-center gap-4">
            <Button
              btnText="Get in touch"
              variant="heroContact"
              href="#"
              icon={ArrowUpRightCircle}
            />
            <Button
              btnText="Browse Projects"
              variant="heroProjects"
              href="#"
              icon={ArrowUpRightCircle}
            />
          </div>
        </div>
        <div className="rounded-full border-solid border-2 p-5 border-blue-600 border-opacity-70">
          <img
            className="rounded-full max-h-[500px] w-auto border-dotted border-2 p-5 border-blue-600 border-opacity-70"
            src="/src/assets/images/profile-pic.png"
            alt="Rhys Miller"
          />
        </div>
      </div>
    </>
  );
}
