import UserInsert from "../pages/userAdd";
import UserDetail from "../pages/userDetail";
import UserList from "../pages/userList";

export const routeList = [
  {
    path: "/",
    element: UserList,
  },
  {
    path: "user",
    element: UserList,
  },
  {
    path: "user/insert",
    element: UserInsert,
  },
  {
    path: "user/:id",
    element: UserDetail,
  },

];
