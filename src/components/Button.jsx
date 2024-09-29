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
    resumeDownload:
      "flex items-center bg-blue-600 text-white hover:bg-blue-700",
  };

  const style = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <a className={style} href={href} download={download} {...props}>
      {btnText}
      {Icon && <Icon className="ml-2" />}
    </a>
  );
}
