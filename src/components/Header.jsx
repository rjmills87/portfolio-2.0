import Button from "./Button";

export default function Header() {
  return (
    <>
      <header>
        <a href="#">RhysMILLER.</a>
        <nav>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Button btnText="Download Resume" />
      </header>
    </>
  );
}
