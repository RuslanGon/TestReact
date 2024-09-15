import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader/Loader.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { useDispatch } from "react-redux";
import { apiRefreshUser } from "./redux/auth/operations.js";
// import RegistrationPage from "./pages/RegistrationPage.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import ContactsPage from "./pages/ContactsPage.jsx";

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
const RegistrationPage = lazy(() => import('./pages/RegistrationPage.jsx'));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));

const App = () => {

const dispatch = useDispatch()
useEffect(() => {
  dispatch(apiRefreshUser())
}, [dispatch])

  return (
    <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/mailbox" element={<MailboxPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId/*" element={<ProductDetailsPage />}/>
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        </Layout>
  );
};

export default App;
