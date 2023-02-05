import {ButtonInterface} from "./Button.interface";
import {PropsWithChildren} from "react";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({children, ...props}:PropsWithChildren<ButtonInterface>):JSX.Element => {

    return(
        <button {...props} className={cn(styles.button, props.className)}>{children}</button>
    )
}
