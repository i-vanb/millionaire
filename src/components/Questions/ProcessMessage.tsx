import styles from "./Questions.module.css";
import {Button} from "../Button/Button";
import {ProcessMessageProps} from "./ProcessMessage.interface";
import cn from "classnames";

export const ProcessMessage = ({isDone, isSuccess, isWinner, next}:ProcessMessageProps):JSX.Element|null => {
    if(!isDone) return null;

    let message = '';

    if(isWinner) {
        message = "Congratulations! You are the winner!";
    } else {
        message = isSuccess ? getSuccessMessage() : getFailMessage();
    }

    return(
        <div className={cn(styles.Prompt, {
            [styles.fail]: !isSuccess,
            [styles.success]: isSuccess,
            [styles.winner]: isWinner
        })}>
            <p>{message}</p>
            {isSuccess && !isWinner && <Button onClick={next}>Next</Button>}
        </div>

    )
}




const successPhrases = ["Great!", "You're look pretty smart", "Nice try, keep it on", "Do you really want to continue?",
    "Hey, you're in the good shape", "What do you take for breakfast?"];

const failPhrases = ["You're loose buddy", "May be next time", "Not your day", "Try to play something else, pal",
    "Oh I'm so sorry, but you failed", "Yeap, shit happens"];

function getFailMessage() {
    const len = failPhrases.length;
    const ran = Math.trunc(Math.random()*100)%len;
    return failPhrases[ran]
}

function getSuccessMessage() {
    const len = successPhrases.length;
    const ran = Math.trunc(Math.random()*100)%len;
    return successPhrases[ran]
}
