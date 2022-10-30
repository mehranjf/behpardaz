import { IDataTable } from "../../model/table";
import { TableStyled } from "./style";

const Table = ({
  header,
  data,
  operation,
  operationDetail,
}: IDataTable<any>) => {
  return (
    <TableStyled>
      <table>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item.header}</th>
            ))}
            {operation && <th>عملیات</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {header.map((headerItem, headerIndex) => {
                return <td key={headerIndex}>{item[headerItem.accessor]}</td>;
              })}
              {operation && (
                <td>
                  <button onClick={() => operationDetail?.operationFunc(item)}>
                    {operationDetail?.text}
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyled>
  );
};
export default Table;
