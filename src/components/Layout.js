import style from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <div className={style.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;