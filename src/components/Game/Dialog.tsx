import styles from "./Game.module.css";
import {Button} from "../Button/Button";
import {DialogInterface} from "./Dialog.interface";

export const Dialog = ({message, reject, resolve}: DialogInterface): JSX.Element => {
    return (
        <>
            <div className={styles.DialogHeader}>
                <p>{message}</p>
            </div>
            <div className={styles.DialogControl}>
                <Button onClick={resolve}>Yes</Button>
                <Button onClick={reject}>No</Button>
            </div>
        </>
    )
}
