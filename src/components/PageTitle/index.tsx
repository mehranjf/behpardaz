import { IPageTitle } from "../../model/pageTitle";
import FormButton from "../Button";
import { StyledWrapper } from "./style";

const PageTitle = ({ title, button, buttonText, buttonFunc }: IPageTitle) => {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      {button && (
        <FormButton onClick={buttonFunc}>{buttonText}</FormButton>
      )}
    </StyledWrapper>
  );
};
export default PageTitle;
