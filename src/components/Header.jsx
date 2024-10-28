import Button from "./Button";
import { DownloadCircle, MenuScale, Xmark } from "iconoir-react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  // Function to handle scrolling back to home from another route
  const handleNavClick = (hashLink) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(hashLink);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Allow time for the home page to render
    }
  };

  return (
    <header className="sticky top-0 bg-white mx-0 p-6 flex items-center justify-between lg:py-6 h-20 lg:h-auto lg:border-b-2 border-blue-600 lg:mx-20">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Link className="flex items-center text-xl font-semibold" to="/">
          RhysMILLER<span>.</span>
        </Link>
      </motion.div>
      <nav
        className={`fixed lg:static lg:translate-x-0 z-100 flex flex-col lg:flex-row gap-10 items-start min-h-screen lg:min-h-fit min-w-[40%] lg:min-w-max transition-transform duration-500 ease-in-out p-4 lg:p-0 top-0 lg:top-auto right-0 lg:right-auto bg-blue-600 lg:bg-white ${
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
        <ul className="text-xl lg:text-lg text-white lg:text-black flex flex-col lg:flex-row items-start lg:items-center justify-between lg:justify-evenly gap-4 mt-20 lg:mt-0">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer transition ease-in-out duration-500 hover:text-blue-600"
            >
              {item.link.startsWith("#") ? (
                location.pathname === "/" ? (
                  // Use HashLink when already on the homepage
                  <HashLink smooth to={item.link}>
                    {item.name}
                  </HashLink>
                ) : (
                  // Navigate back to the homepage and then scroll
                  <a onClick={() => handleNavClick(item.link)}>{item.name}</a>
                )
              ) : (
                <Link to={item.link}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <Button
          variant="resumeDownloadMobile"
          btnText="Resume"
          href="/src/assets/Rhys-Miller-Resume.pdf"
          download={true}
          icon={DownloadCircle}
        />
      </nav>
      <Button
        variant="resumeDownloadDesktop"
        btnText="Resume"
        href="/src/assets/Rhys-Miller-Resume.pdf"
        download={true}
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
  );
}
