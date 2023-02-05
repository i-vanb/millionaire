import styles from "./Questions.module.css";
import {Button} from "../Button/Button";
import cn from "classnames";
import {QuestionsProps} from "./Questions.interface";

export const Questions = ({currentQuestion, userAnswer, setUserAnswer, correctAnswer}:QuestionsProps):JSX.Element => {
    const LETTERS = ["A", "B", "C", "D"];

    return (
        <>
            <div className={styles.Question}>
                <p>{currentQuestion?.question}</p>
            </div>
            <div className={styles.Answers}>
                {currentQuestion?.options?.map((answer, index) =>
                        <div className={styles.AnswerRow} key={index}>
                            <span>
                                {LETTERS[index]}
                            </span>
                            <Button disabled={!!userAnswer}
                                    onClick={()=>setUserAnswer(answer)}
                                    className={cn(styles.AnswerBtn, {
                                        [styles.answered]: answer === userAnswer,
                                        [styles.rightAnswer]: answer === correctAnswer
                                    })}
                            >
                                {answer}
                            </Button>
                        </div>
                    )
                }
            </div>

        </>
    )
}
