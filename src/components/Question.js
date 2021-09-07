import style from "../styles/Question.module.css";
import Answers from "./Answers";

const Question = () => {
  return (
    <div className={style.question}>
      <div className={style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}

export default Question;