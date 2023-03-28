import { ReactNode } from "react";
import "./Button.scss";

interface ButtonProps {
  text: string | number;
  variant?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  icon?: ReactNode;
}
const Button: React.FC<ButtonProps> = ({ text, variant, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`defaultButton ${variant}`}
      type={type}
    >
      {text}
    </button>
  );
};

export { Button };
