import styles from './Menu.module.css';
import {NavLink} from "react-router-dom";
import {ChangeEvent, useContext, useState} from "react";
import {GameContext} from "../../context/Game.context";

export const Menu = ():JSX.Element => {
    const {amount, setAmount} = useContext(GameContext);
    const [value, setValue] = useState<number>(amount);

    const setValueHandler = (e:ChangeEvent<HTMLInputElement>) => setValue(parseInt(e.target.value));
    const applySettings = () => setAmount(value);

    return(
        <div className={styles.Menu}>
            <div>
                <label>Amount of questions</label>
                <input type="number"
                       value={value}
                       onChange={setValueHandler}
                       min="1"
                />
            </div>
            <div className={styles.control}>
                <NavLink to="/" onMouseDown={applySettings}>Apply</NavLink>
                <NavLink to="/">Cancel</NavLink>
            </div>
        </div>
    )
}
