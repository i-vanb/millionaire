import {ButtonInterface} from "./Button.interface";
import styles from "./Button.module.css";
import cn from "classnames";
import Cross from "../../assets/cross.svg";

export const ButtonCloseIcon = ({className, ...props}:ButtonInterface):JSX.Element => {

    return(
        <button {...props} className={cn(styles.buttonIcon, className)}>
            <Cross />
        </button>
    )
}
