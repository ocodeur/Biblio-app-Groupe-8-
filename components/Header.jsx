import styles from './Header.module.css';
import logo from '@/public/logo.webp';
import MenuNav from './MenuNav';

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
           
            <h1>CANADATOURS</h1>
        </div>
        <MenuNav/>
    </header>
}