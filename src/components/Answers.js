import style from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={style.answers}>
      <Checkbox className={style.answer} text="Test answer" />
    </div>
  );
}

export default Answers;