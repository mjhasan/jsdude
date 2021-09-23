import { useState } from "react";
import { useParams } from "react-router";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

export default function Quiz() {
  const {id} = useParams()
  // const { loading, error, questions } = useQuestions(id)
  const [currentQuestions, setCurrentQuestions] = useState(0)
  console.log(id);
  // console.log(questions);
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
