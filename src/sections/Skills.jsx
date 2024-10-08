export default function Skills() {
  const mySkills = [
    {
      skillName: "HTML",
      skillIcon: "/src/assets/images/skills/html-5.svg",
    },
    {
      skillName: "CSS",
      skillIcon: "/src/assets/images/skills/css-3.svg",
    },
    {
      skillName: "JavaScript",
      skillIcon: "/src/assets/images/skills/javascript.svg",
    },
    {
      skillName: "React JS",
      skillIcon: "/src/assets/images/skills/react.svg",
    },
    {
      skillName: "Tailwind CSS",
      skillIcon: "/src/assets/images/skills/tailwind.svg",
    },
  ];
  return (
    <>
      <div className="my-20 lg:mx-20 lg:my-10">
        <h2 className="text-5xl lg:text-6xl font-bold pb-12 text-center">
          Skills<span className="text-blue-600">.</span>
        </h2>
        <div className="flex flex-wrap gap-8 justify-evenly items-center">
          {mySkills &&
            mySkills.map((skill) => (
              <div
                key={skill.skillName}
                className="flex flex-col justify-center items-center gap-4"
              >
                <div className="rounded-full border-solid border-2 p-5 border-blue-600 border-opacity-70">
                  <div className="rounded-full border-dotted border-2 p-5 border-blue-600 border-opacity-70">
                    <img
                      className="max-h-28 w-auto p-4 "
                      src={skill.skillIcon}
                      alt={skill.skillName}
                    />
                  </div>
                </div>
                <span className="text-xl font-bold">
                  {skill.skillName}
                  <span className="text-blue-600">.</span>
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
