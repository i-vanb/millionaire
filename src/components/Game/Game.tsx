import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GameContext} from "../../context/Game.context";
import {DialogInterface} from "./Dialog.interface";
import styles from './Game.module.css';
import {Button} from "../Button/Button";
import {ScoreList} from "../ScoreList/ScoreList";
import Questions from "../Questions/QuestionsContainer";
import {Modal} from "../Modal/Modal";
import {Dialog} from "./Dialog";

export const Game = (): JSX.Element => {
    const {clear, reset} = useContext(GameContext);
    const navigate = useNavigate();

    useEffect(()=>{
        reset();
    }, [])

    const [modalWindow, setModalWindow] = useState<DialogInterface|null>(null);
    const closeModal = () => setModalWindow(null);

    const restartHandler = () => {
        closeModal();
        reset();
    }
    const exitHandler = () => {
        navigate('/');
        clear();
    }
    const exitGame = () => {
        setModalWindow({
            message: "Are you sure you want to finish the game?",
            reject: closeModal,
            resolve: exitHandler
        })
    }

    const restartGame = () => {
        setModalWindow({
            message: "Are you sure you want to restart the game?",
            reject: closeModal,
            resolve: restartHandler
        })
    }

    return (
        <div className={styles.Game}>
            <div className={styles.Info}>
                <div className={styles.Menu}>
                    <Button onClick={exitGame}>Exit</Button>
                    <Button onClick={restartGame}>Restart</Button>
                </div>
                <ScoreList/>
            </div>
            <Questions/>
            <Modal isOpen={!!modalWindow} close={closeModal}>
                {modalWindow &&
                    <Dialog message={modalWindow.message}
                            resolve={modalWindow.resolve}
                            reject={modalWindow.reject}
                />}
            </Modal>
        </div>
    )
}
