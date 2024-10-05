import clsx from "clsx";
import css from "../../App.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedIn, selectUserData } from "../../redux/auth/selectors.js";
import { apiLogout } from "../../redux/auth/operations.js";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(css.navLink, {
    [css.active]: isActive,
  });
};

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const isSignedIn = useSelector(selectIsSignedIn);
  // const isSignedIn = true

  const userData = useSelector(selectUserData)

  const onLogout = () => {
dispatch(apiLogout())
  }

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home Page
          </NavLink>
          {isSignedIn ? 
            <>
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts Page
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
              <NavLink className={getNavLinkClassName} to="/campers">
              Campers
              </NavLink>
              <div>
                <span>Hello {userData.name}</span>
                <button type="button" onClick={onLogout}>Logout</button>
              </div>
            </>
           : 
            <>
              <NavLink className={getNavLinkClassName} to="/register">
                Registration Page
              </NavLink>
              <NavLink className={getNavLinkClassName} to="/login">
                Login Page
              </NavLink>
            </>
          }
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
