import Button from "./Button";
import { ArrowUpRightCircle } from "iconoir-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between m-6 gap-12 md:m-10 lg:m-20">
        <div className="flex flex-col lg:w-2/3">
          <span className="text-2xl lg:text-3xl font-light pb-2 text-gray-600">
            Hi, I&apos;m Rhys 👋🏻
          </span>
          <h1 className=" text-6xl md:text-7xl lg:text-8xl font-extrabold pb-4 lg:pb-8">
            <span className="text-blue-600">Front</span>end Developer
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-600 font-light pb-8">
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
        <div className="rounded-full border-solid border-2 p-4 border-gray-600 border-opacity-70">
          <img
            className="rounded-full max-h-[500px] w-auto border-solid border-2 p-4 border-blue-600 border-opacity-70"
            src="/src/assets/images/1699022497908.jpeg"
            alt="Rhys Miller"
          />
        </div>
      </div>
    </>
  );
}
