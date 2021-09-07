import { Link } from "react-router-dom";
import style from "../styles/Account.module.css";

const Account = () => {
  return (
    <div className={style.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}

export default Account;