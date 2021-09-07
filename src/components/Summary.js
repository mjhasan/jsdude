import image from "../assets/images/success.png";
import style from "../styles/Summary.module.css";

const Summary = () => {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={style.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}

export default Summary;