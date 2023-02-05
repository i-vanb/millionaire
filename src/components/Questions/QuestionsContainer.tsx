import {GameContext} from "../../context/Game.context";
import {useContext} from "react";
import styles from "./Questions.module.css";
import {Questions} from "./Questions";
import {ProcessMessage} from "./ProcessMessage";


const QuestionsContainer = ():JSX.Element|null => {
    const {setUserAnswer, currentQuestion, next} = useContext(GameContext);

    if(!currentQuestion.question) return null;

    return (
        <div className={styles.Main}>
            <ProcessMessage next={next}
                            isSuccess={!!currentQuestion.success}
                            isDone={!!currentQuestion.correctAnswer}
                            isWinner={currentQuestion.win===1000000}
            />
            <Questions currentQuestion={currentQuestion}
                       correctAnswer={currentQuestion.correctAnswer}
                       setUserAnswer={setUserAnswer}
                       userAnswer={currentQuestion.userAnswer}
            />
        </div>
    )

}

export default QuestionsContainer;
