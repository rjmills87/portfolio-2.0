import Button from "./Button";
import { DownloadCircle } from "iconoir-react";
import { MenuScale } from "iconoir-react";
import { Xmark } from "iconoir-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="relative mx-0 p-4 flex items-center justify-between lg:py-6  lg:border-b-2 border-blue-600 lg:mx-20">
        <a href="#">
          RhysMILLER<span>.</span>
        </a>
        <nav
          className={`fixed z-10 flex flex-col gap-10 items-start  min-h-screen min-w-[50%] transition-transform duration-500 ease-in-out p-4 top-0 right-0 bg-blue-600 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {isMenuOpen && (
            <Xmark
              height={40}
              width={40}
              className="absolute text-white right-4 top-4"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            />
          )}
          <ul className=" text-xl text-white flex flex-col items-start justify-between gap-4 mt-20">
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
            variant="resumeDownload"
            btnText="Resume"
            href="#"
            download="true"
            icon={DownloadCircle}
            aria-label="Open Menu"
          />
        </nav>
        {!isMenuOpen && (
          <MenuScale
            color="blue"
            height={36}
            width={36}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </header>
    </>
  );
}
