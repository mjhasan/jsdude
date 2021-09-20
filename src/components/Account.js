import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import style from "../styles/Account.module.css";

const Account = () => {
  const { user, logOut } = useAuth()

  return (
    <div className={style.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {
        user ? (
          <>
            <span>{user.displayName}</span>
            <span 
            onClick={logOut}
            className="material-icons-outlined" 
            title="Logout"> logout </span>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )
      }
    </div>
  );
}

export default Account;