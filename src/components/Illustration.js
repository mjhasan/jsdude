import signupImage from "../assets/images/signup.svg";
import style from "../styles/Illustration.module.css";

const Illustration = () => {
  return (
    <div className={style.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}

export default Illustration;