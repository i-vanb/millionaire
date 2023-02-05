import styles from "./ScoreList.module.css";
import {useContext} from "react";
import {GameContext} from "../../context/Game.context";
import {Score} from "../../context/Game.interface";
import cn from 'classnames';
import {priceToString} from "../../helpers/priceToString";


export const ScoreList = ():JSX.Element => {
    const {scores, round} = useContext(GameContext);

    return(
        <div className={styles.Score}>
            {scores.map(i => <ScoreRow key={i.round} {...i} current={round+1} />)}
        </div>
    )
}

const ScoreRow = ({fixed, round, price, current}:Score & { current:number }):JSX.Element => {
    return(
        <div className={cn(styles.ScoreRow, {
            [styles.fixed]: fixed,
            [styles.current]: round === current,
            [styles.past]: round < current,
        })}>
            <div>{round}</div>
            <div>{priceToString(price)}</div>
        </div>
    )
}
