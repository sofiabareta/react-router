import styles from './MainButton.module.css'

const MainButton = ({ children, size }) => {
    return (
        <button className={`${styles.botao} ${styles[size]}`}>{children}</button>
    );
}
 
export default MainButton;