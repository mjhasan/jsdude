import { Link } from "react-router-dom";
import style from "../styles/Cards.module.css";
import Card from "./Card";

const Cards = () => {
  return (
    <div className={style.cards}>
      <Link to="/quiz">
        <Card />
      </Link>
      <Link to="/quiz">
        <Card />
      </Link>
      <Link to="/quiz">
        <Card />
      </Link>
      <Link to="/quiz">
        <Card />
      </Link>
      <Link to="/quiz">
        <Card />
      </Link>
    </div>
  );
}

export default Cards;