import { ArrowUpRightCircle } from "iconoir-react";

export default function Project({ name, description, screenshot, alt, src }) {
  return (
    <>
      <img
        src={screenshot}
        alt={alt}
        className="w-auto h-auto rounded-lg border-dotted border-2 p-5 border-blue-600 border-opacity-70"
      />
      <a href={src} className="flex items-center gap-3 py-4">
        <h3 className="text-2xl lg:text-3xl font-bold">{name}</h3>
        <span className="text-blue-600 rounded-full p-1 border-blue-600 border-1 transition duration-300 hover:bg-blue-600 hover:text-white">
          <ArrowUpRightCircle strokeWidth={2} />
        </span>
      </a>
      <p className="text-lg font-light">{description}</p>
    </>
  );
}
