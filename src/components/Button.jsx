export default function Button({
  btnText,
  href,
  download = "false",
  variant,
  icon: Icon,
  ...props
}) {
  return (
    <a className={variant} href={href} download={download} {...props}>
      {btnText}
      {Icon && <Icon className="mr-2" />}
    </a>
  );
}
