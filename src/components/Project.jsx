import Button from "./Button";
import { ArrowUpRightCircle } from "iconoir-react";

export default function Project({ name, description, screenshot, alt, src }) {
  return (
    <>
      <img
        src={screenshot}
        alt={alt}
        className="w-auto h-auto rounded-lg border-dotted border-2 p-5 mb-4 border-blue-600 border-opacity-70"
      />
      <h3 className="text-2xl lg:text-3xl mb-4 font-bold">
        {name}
        <span className="text-blue-600">.</span>
      </h3>
      <p className="text-lg font-light mb-4">{description}</p>
      <Button
        btnText="View"
        variant="toProject"
        href={src}
        icon={ArrowUpRightCircle}
      />
    </>
  );
}
