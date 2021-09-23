import { Link } from "react-router-dom";
import style from "../styles/Card.module.css";

const Card = ({ video }) => {
  const { noq, title, youtubeID } = video;
  return (
    <Link to={`/quiz/${youtubeID}`}>
      <div className={style.card}>
        <img src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
          alt={title} />
        <p>{title}</p>
        <div className={style.qmeta}>
          <p>{noq} Questions</p>
          <p>Total Point : {noq * 2}</p>
        </div>
      </div>
    </Link>
  );
}
export default Card;