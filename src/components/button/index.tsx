import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {DefaultButton} from "./styles";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  width?: string;
  variant: "primary" | "clear";
  onClick: () => void;
  loading?: boolean;
  background?: string;
}
const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  disabled,
  width,
  loading,
  variant = "primary",
  background,
}) => {
  return (
    <DefaultButton
      style={{width}}
      onClick={onClick}
      disabled={loading || disabled}
      variant={variant}
      background={background}
    >
      {text}
      <FontAwesomeIcon icon={faArrowRight} width="20px" height="20px" />
    </DefaultButton>
  );
};
export default Button;
