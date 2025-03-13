import "./button.css";

export type ButtonProps = {
  onClick: () => void;
  text?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Button = ({
  onClick,
  text,
  className,
  size,
  disabled,
  style,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        className ||
        `color-white bg-color-primary border-none border-radius-5 size-${
          size ?? "medium"
        }`
      }
      disabled={disabled}
      style={style}
    >
      {text || children}
    </button>
  );
};
