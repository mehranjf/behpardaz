import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  mode?: "success";
}

const FormButton = ({ loading, type, ...props }: IButtonProps) => {
  return (
    <StyledButton
      disabled={props.disabled}
      mode={props.mode ? props.mode : "default"}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default FormButton;
