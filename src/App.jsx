import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/Loader/Loader.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { useDispatch } from "react-redux";
import { apiRefreshUser } from "./redux/auth/operations.js";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";


// import CarPage from "./pages/Carpage.jsx";
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
const CarPage = lazy(() => import("./pages/Carpage.jsx"));


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
            <Route path="/register" element={<RestrictedRoute> <RegistrationPage /> </RestrictedRoute>} />
            <Route path="/login" element={<RestrictedRoute><LoginPage /></RestrictedRoute> } />
            <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
            <Route path="/mailbox" element={<PrivateRoute><MailboxPage /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><ProductsPage /></PrivateRoute>} />
            <Route path="/products/:productId/*" element={<PrivateRoute><ProductDetailsPage /> 
            </PrivateRoute> }/>
            <Route path="/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
            <Route path="/campers" element={<PrivateRoute><CarPage /></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><UsersPage /></PrivateRoute>} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="*" element={ <NotFoundPage />} />
          </Routes>
        </Suspense>
        </Layout>
  );
};

export default App;
