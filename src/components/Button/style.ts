import styled from "styled-components";
import { mainColor, secondColor } from "../../consts";
type Props = {
  disabled?: boolean;
  mode: "success" | "default";
};
export const StyledButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 5px;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
  cursor: ${({ disabled }: Props) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }: Props) => (disabled ? "0.7" : "1")};
  background-color: ${({ mode }: Props) =>
    mode === "default" ? secondColor : mainColor};
  color: ${({ mode }: Props) => (mode === "default" ? "#000" : "#fff")};
  font-family: 'IRANSans';
  display: flex;
  justify-content: center;
  align-items: center;
`;
