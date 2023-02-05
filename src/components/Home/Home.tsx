import styles from './Home.module.css';
import {NavLink} from "react-router-dom";

export const Home = ():JSX.Element => {

    return(
        <div className={styles.Home}>
            <NavLink to='/start'>Start game<span/></NavLink>
            <NavLink to='/menu'>Menu<span/></NavLink>
        </div>
    )
}
