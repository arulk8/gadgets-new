import { NavLink } from "react-router-dom";
import { useStore } from "../../store/app-store-context";
import { getInitial } from "../../util";
import "./Header.css";

const Header = () => {
  const {
    isLoggedIn,
    sessionData: { emailData = "" },
    actions,
    wishlist = [],
    cart = [],
  } = useStore();
  const inital = getInitial(emailData);

  const data = isLoggedIn ? (
    <div className="no-underline c-aux">
      {inital}
      {" ["}
      <a onClick={actions.logout} className="btn__link btn__link--error">
        logout
      </a>
      {"]"}
    </div>
  ) : (
    <NavLink className="no-underline c-aux" to="/login">
      Login
    </NavLink>
  );

  return (
    <header className="main-header flex-row flex-aic py-8">
      <div className="header__left--container flex-row flex-aic margin-auto--r">
        <h2 className="logo__name font-bold">
          <NavLink className="no-underline c-aux" to="/">
            Gadgetsnew
          </NavLink>
        </h2>
      </div>

      <div className="header__center--container">
        <form action="">
          <div className="search__container">
            <span className="header__search--icon fas fa-search"></span>
            <input
              className="header__search--bar"
              placeholder="Search"
              type="text"
            />
          </div>
        </form>
      </div>
      <div className="header__right--container margin-auto--l">
        <nav className="main-nav">
          <ul className="main-nav__links flex-row flex-aic list-style-none">
            <li className="main-nav__link px-5 font-medium">{data}</li>
            <li className="main-nav__link px-5 font-medium">
              <NavLink className="no-underline c-aux" to="/wishlist">
                <div className="badge">
                  <i className="fas fa-heart"></i>
                  <span className="badge__count">{wishlist.length}</span>
                </div>
              </NavLink>
            </li>
            <li className="main-nav__link px-5 font-medium">
              <NavLink className="no-underline c-aux" to="/cart">
                <div className="badge">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge__count">{cart.length}</span>
                </div>
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          id="mobile__open"
          className="header_action font-bold px-5 no-underline c-aux"
        >
          <i className="fas fa-bars"></i>
        </button>
        <button
          id="mobile__close"
          className="header_action font-bold px-5 no-underline c-aux hide"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
