import { AppRoutes } from "./routes";
import { Routes, Route, Outlet } from "react-router-dom";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <>
      <Header title="PROJECT-AMM" />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={AppRoutes.PRODUCTS} element={<Product />} />
        <Route path={AppRoutes.CHECKOUT} element={<Checkout />} />
        <Route path={AppRoutes.SUCCESS} element={<div>Success</div>} />
      </Route>
      <Route>
        <Route path={AppRoutes.LOGIN} element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
