import styled from "styled-components";
import { mainColor, secondColor } from "../../consts";
export const TableStyled = styled.div`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    margin: 0 auto;
    overflow-x: auto;
    thead tr {
      background-color: ${mainColor};
      color: #ffffff;
      text-align: right;
    }
    th,
    td {
      padding: 12px 15px;
    }
    tbody tr {
      border-bottom: 1px solid ${secondColor};
    }
    tbody tr:nth-of-type(even) {
      background-color: #f6f6f6;
    }
    tbody tr:last-of-type {
      border-bottom: 2px solid ${mainColor};
    }
    tbody tr.active-row {
      font-weight: bold;
      color: #009879;
    }
    button{
      outline: none;
      border: none;
      background-color: ${secondColor};
      color: #000;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;
