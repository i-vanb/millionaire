import {PropsWithChildren, useState} from "react";
import styles from "./Modal.module.css";
import {ButtonCloseIcon} from "../Button/ButtonCloseIcon";

export const Modal = ({ children, isOpen, close }:PropsWithChildren<ModalInterface>) => {

    return (
        <>
            {isOpen && (
                <div className={styles.Modal}>
                    <div className={styles.Content}>
                        <ButtonCloseIcon onClick={close} className={styles.ButtonIcon} />
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};


interface ModalInterface {
    isOpen: boolean;
    close: ()=>void;
}
