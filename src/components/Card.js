import image from "../assets/images/3.jpg";
import style from "../styles/Card.module.css";

 const Card = () => {
  return (
      <div className={style.card}>
        <img src={image} alt="Card Title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={style.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
  );
}
export default Card;