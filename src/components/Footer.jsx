import { Linkedin } from "iconoir-react";
import { GithubCircle } from "iconoir-react";
import { X } from "iconoir-react";
import { Copyright } from "iconoir-react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="flex flex-col-reverse gap-3 lg:gap-0 lg:flex-row items-center justify-between mx-6 py-6 lg:py-6 border-t-2 border-blue-600 lg:mx-20">
        <div className="flex">
          <Copyright />
          <span>{year} Rhys Miller</span>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/rjmills87" target="_blank">
            <GithubCircle
              height={35}
              width={35}
              className="hover:text-blue-600 transition ease-in-out duration-500"
            />
          </a>
          <a href="https://www.linkedin.com/in/rjmills87/" target="_blank">
            <Linkedin
              height={35}
              width={35}
              className="hover:text-blue-600 transition ease-in-out duration-500"
            />
          </a>
          <a href="https://x.com/rjmills87" target="_blank">
            <X
              height={35}
              width={35}
              className="hover:text-blue-600 transition ease-in-out duration-500"
            />
          </a>
        </div>
      </footer>
    </>
  );
}
