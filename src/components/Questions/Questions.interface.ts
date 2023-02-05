import {CurrentQuestion} from "../../context/Game.interface";

export interface QuestionsProps {
    userAnswer?: string;
    setUserAnswer: (userAnswer:string)=>void;
    correctAnswer?:string;
    currentQuestion:CurrentQuestion
}
