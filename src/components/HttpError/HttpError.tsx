import {Modal} from "../Modal/Modal";
import styles from "../Questions/Questions.module.css";
import {Button} from "../Button/Button";
import {useContext} from "react";
import {GameContext} from "../../context/Game.context";

export const HttpError = () => {
    const {httpError, closeError} = useContext(GameContext);

    return(
        <Modal isOpen={!!httpError} close={closeError}>
            <div className={styles.DialogHeader}>
                <p>{httpError}</p>
            </div>
            <div className={styles.DialogControl}>
                <Button onClick={closeError}>OK</Button>
            </div>
        </Modal>
    )
}


