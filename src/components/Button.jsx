import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function Button({
  btnText,
  href,
  download = "false",
  variant,
  icon: Icon,
  ...props
}) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium items-center justify-center";

  const variantStyles = {
    resumeDownloadMobile:
      "block lg:hidden flex items-center bg-white text-blue-600 hover:bg-blue-700",
    resumeDownloadDesktop:
      "hidden lg:flex items-center bg-blue-600 text-white hover:bg-blue-700",
    heroContact:
      "flex text-sm lg:text-base items-center bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 border-2 border-blue-600 w-fit",
    heroProjects:
      "flex text-sm lg:text-base items-center bg-white text-gray-600 hover:bg-gray-600 hover:text-white border-2 border-gray-600 w-fit",
    projectPage:
      "flex text-sm lg:text-base items-center bg-white text-blue-600 hover:bg-blue-700 hover:text-white border-2 border-blue-600 w-fit",
    backButton:
      "flex text-sm lg:text-base items-center bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-2 border-blue-600 w-fit",
    toProject:
      "flex text-sm lg:text-base items-center bg-transparent text-blue-600 hover:text-white hover:bg-blue-600 border-2 border-blue-600 w-fit",
  };

  const style = `${baseStyles} ${variantStyles[variant]} `;

  if (download === true) {
    return (
      <motion.a
        className={style}
        href={href}
        download={download}
        {...props}
        whileHover={{ y: -5, x: 3 }}
      >
        {btnText}
        {Icon && <Icon className="ml-2" />}
      </motion.a>
    );
  } else {
    return (
      <motion.div className="w-fit" whileHover={{ y: -5, x: 3 }}>
        <HashLink
          className={style}
          smooth
          to={href}
          download={download}
          {...props}
        >
          {btnText}
          {Icon && <Icon className="ml-2" />}
        </HashLink>
      </motion.div>
    );
  }
}
