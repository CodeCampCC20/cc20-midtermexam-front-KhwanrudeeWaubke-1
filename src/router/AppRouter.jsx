
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import RegisterPage from "../pages/RegisterPage";
import TodoListPage from "../pages/TodoListPage";
import LoginPage from "../pages/LoginPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TodoListPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
