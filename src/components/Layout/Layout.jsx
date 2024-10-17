import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSignedIn,
  selectUserData,
} from "../../redux/auth/selectors.js";
import { apiLogout } from "../../redux/auth/operations.js";
import css from "../../components/Layout/Layout.module.css";
import DarkModelToggle from "../DarkModelToggle/DarkModelToggle.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const getNavLinkClassName = ({ isActive }, mode) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
    [css.dark]: mode === "dark",
    [css.light]: mode === "light",
  });
};

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);
  const userData = useSelector(selectUserData);
  const location = useLocation();
  const { mode } = useContext(ThemeContext); // Используем тему из контекста

  const onLogout = () => {
    dispatch(apiLogout());
  };

  const isHomePage = location.pathname === "/";
  const isContactsPage = location.pathname === "/contacts";
  const isMailBoxPage = location.pathname === "/mailbox";

  return (
    <div
      className={
        isHomePage
          ? css.homeBackground
          : isContactsPage
          ? css.contactsBackground
          : isMailBoxPage
          ? css.mailBoxBackground
          : ""
      }
    >
      <header>
        <nav className={clsx(css.nav, mode)}>
          <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/">
            Home Page
          </NavLink>
          {isSignedIn ? (
            <>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/contacts">
                Contacts Page
              </NavLink>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/mailbox">
                MailBox
              </NavLink>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/products">
                Products
              </NavLink>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/search">
                Search
              </NavLink>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/campers">
                Campers
              </NavLink>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/users">
                Users
              </NavLink>
              <DarkModelToggle />
              <div>
                <span>Hello {userData.name}</span>
                <button type="button" onClick={onLogout}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/register">
                Registration Page
              </NavLink>
              <NavLink className={(link) => getNavLinkClassName(link, mode)} to="/login">
                Login Page
              </NavLink>
            </>
          )}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
