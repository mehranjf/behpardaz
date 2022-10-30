import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";
import { baseUrl } from "../../consts";
import { IUserInfo } from "../../model/user";

const UserList = () => {
  const [users, setUsers] = useState<IUserInfo[]>([] as IUserInfo[]);
  const navigate = useNavigate();
  const getData = () => {
    axios.get(`${baseUrl}/users`).then((res) => setUsers(res.data));
  };
  useEffect(getData, []);
  const columns = [
    {
      header: "شناسه",
      accessor: "id",
    },
    {
      header: "نام",
      accessor: "firstName",
    },
    {
      header: "نام خانوادگی",
      accessor: "lastName",
    },
    {
      header: "شهر",
      accessor: "city",
    },
    {
      header: "آدرس",
      accessor: "address",
    },
  ];
  const gotoDetail = (item: IUserInfo) => {
    navigate(`user/${item.id}`);
  };
  const tableOperation = {
    text: "ویرایش",
    operationFunc: gotoDetail,
  };
  const createNewUser = () => {
    navigate(`user/insert`);
  };
  return (
    <>
      <PageTitle
        title="لیست کاربران"
        button={true}
        buttonText={"افزودن کاربر"}
        buttonFunc={createNewUser}
      />
      <Table
        header={columns}
        data={users}
        operation={true}
        operationDetail={tableOperation}
      />
    </>
  );
};
export default UserList;
