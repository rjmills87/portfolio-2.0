import Button from "./Button";
import { DownloadCircle } from "iconoir-react";
import { MenuScale } from "iconoir-react";
import { Xmark } from "iconoir-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative mx-0 p-6 flex items-center justify-between lg:py-6 h-20 lg:h-auto lg:border-b-2 border-blue-600 lg:mx-20">
        <a className="text-lg" href="#">
          RhysMILLER<span>.</span>
        </a>
        <nav
          className={`fixed lg:static lg:translate-x-0 z-100 flex flex-col lg:flex-row gap-10 items-start min-h-screen lg:min-h-fit min-w-[50%] lg:min-w-max transition-transform duration-500 ease-in-out p-4 lg:p-0 top-0 lg:top-auto right-0 lg:right-auto bg-blue-600 lg:bg-white ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {isMenuOpen && (
            <Xmark
              height={40}
              width={40}
              className="absolute text-white right-4 top-4 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            />
          )}
          <ul className=" text-xl lg:text-lg text-white lg:text-black flex flex-col lg:flex-row items-start lg:items-center justify-between lg:justify-evenly gap-4 mt-20 lg:mt-0">
            <li className="cursor-pointer transition ease-in-out duration-500 hover:text-blue-600">
              Home
            </li>
            <li className="cursor-pointer transition ease-in-out duration-500 hover:text-blue-600">
              Projects
            </li>
            <li className="cursor-pointer transition ease-in-out duration-500 hover:text-blue-600">
              About
            </li>
            <li className=",cursor-pointer transition ease-in-out duration-500 hover:text-blue-600">
              Contact
            </li>
          </ul>
          <Button
            variant="resumeDownloadMobile"
            btnText="Resume"
            href="#"
            download="true"
            icon={DownloadCircle}
          />
        </nav>
        <Button
          variant="resumeDownloadDesktop"
          btnText="Resume"
          href="#"
          download="true"
          icon={DownloadCircle}
        />
        {!isMenuOpen && (
          <MenuScale
            className="lg:hidden"
            color="blue"
            height={36}
            width={36}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          />
        )}
      </header>
    </>
  );
}
