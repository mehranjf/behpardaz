import styled from "styled-components";
export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .inputWrapper {
    box-sizing: border-box;
    width: 50%;
    padding: 0.5rem 1rem;
    @media all and (max-width: 768px) {
      width: 100%;
    }
  }
  .buttonWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
