import Button from "./Button";
import { DownloadCircle } from "iconoir-react";
import { MenuScale } from "iconoir-react";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4">
        <a href="#">RhysMILLER.</a>
        <nav>
          <ul className=" flex gap-4 justify-evenly items-center">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button
          variant="resumeDownload"
          btnText="Resume"
          href="#"
          download="true"
          icon={DownloadCircle}
        />
        <MenuScale className="hidden" />
      </header>
    </>
  );
}
