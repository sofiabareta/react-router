import MainButton from 'components/MainButton';
import styles from './NotFound.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
                <p className={styles.paragrafo}>Tem certeza que era isso que estava procurando?</p>
                <div className={styles.botaoContainer} onClick={() => navigate(-1)}>
                    <MainButton size={'lg'}>Voltar</MainButton>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt="Cachorro" />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    );
}
 
export default NotFound;