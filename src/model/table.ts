export interface ITableHeader {
  header: string;
  accessor: string;
}
export interface IDataTable<T> {
  header: Array<ITableHeader>;
  data: Array<T>;
  operation: boolean;
  operationDetail?: {
    text: string;
    operationFunc: (item: T) => void;
  };
}
