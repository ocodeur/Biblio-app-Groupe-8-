import styles from './MenuNav.module.css';

export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Ontario</a></li>
            <li><a href="#"> Québec</a></li>
        </ul>
    </nav>
}