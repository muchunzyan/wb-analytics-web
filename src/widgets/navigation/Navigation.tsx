import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/about'>О нас</NavLink>
        </nav>
    )
}

export default Navigation