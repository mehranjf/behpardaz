import styled from "styled-components";
import { mainColor } from "../../consts";
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;

  label {
    position: absolute;
    transition: ease-out 0.2s;
    pointer-events: none;
    font-size: 15px;
    bottom: 7px;
    color: #9e9e9e;

    &.active {
      font-size: 13px;
      color: ${mainColor};
      bottom: 35px;

      ~ input {
        border-bottom: 1px solid ${mainColor};
        box-shadow: 0 1px 0 0 ${mainColor};
      }
    }

    span {
      color: red;
      padding-right: 3px;
    }
  }

  input {
    border: 0;
    height: 40px;
    font-size: 15px;
    transition: ease-out 0.2s;
    border-bottom: 1px solid #9e9e9e;

    &:focus {
      outline: none;
    }
    &:disabled {
      background-color: transparent;
      opacity: 0.7;
    }
  }
`;
