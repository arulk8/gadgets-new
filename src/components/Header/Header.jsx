import "./Header.css";

const Header = () => {
  return (
    <header className="main-header flex-row flex-aic py-8">
      <div className="header__left--container flex-row flex-aic margin-auto--r">
        <h2 className="logo__name font-bold">
          <a className="no-underline c-aux" href="./index.html">
            Gadgetsnew
          </a>
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
            <li className="main-nav__link px-5 font-medium">
              <a className="no-underline c-aux" href="./auth/index.html">
                Login
              </a>
            </li>
            <li className="main-nav__link px-5 font-medium">
              <a className="no-underline c-aux" href="./whishlist/index.html">
                <div className="badge">
                  <i className="fas fa-heart"></i>
                  <span className="badge__count">3</span>
                </div>
              </a>
            </li>
            <li className="main-nav__link px-5 font-medium">
              <a className="no-underline c-aux" href="./cart/index.html">
                <div className="badge">
                  <i className="fas fa-shopping-cart"></i>
                  <span className="badge__count">3</span>
                </div>
                Cart
              </a>
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
