import styles from './Menu.module.css'
import MenuLink from './MenuLink';

const Menu = () => {
    return ( 
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='/about'>About</MenuLink>
            </nav>
        </header>
     );
}
 
export default Menu;