import { NavLink, Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import clsx from "clsx";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader.jsx";

// import MailboxPage from './pages/MailboxPage.jsx';
// import ProductsPage from './pages/ProductsPage.jsx';
// import SearchPage from './pages/SearchPage.jsx';
// import HomePage from './pages/HomePage.jsx';
// import NotFoundPage from './pages/NotFoundPage .jsx';
// import ProductDetailsPage from './pages/ProductDetailsPage.jsx';

const MailboxPage = lazy(() => import("./pages/MailboxPage.jsx"));
const ProductsPage = lazy(() => import("./pages/ProductsPage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage .jsx'))
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage.jsx"));

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const App = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home Page
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/mailbox">
            MailBox
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/products">
            Products
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mailbox" element={<MailboxPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/products/:productId/*"
              element={<ProductDetailsPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
