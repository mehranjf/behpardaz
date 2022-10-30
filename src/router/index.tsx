import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeList } from "./routeList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={<route.element />} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
