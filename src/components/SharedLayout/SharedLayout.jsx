import { Suspense } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link
            to="/"
            end
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Page is loading. Please wait....</div>}>
        <Outlet location={location} />
      </Suspense>
    </>
  );
};

export default SharedLayout;
