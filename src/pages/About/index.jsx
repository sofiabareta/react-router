import RefPost from "components/RefPost";
import styles from './About.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

const About = () => {
    return ( 
        <RefPost
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>Aloha!</h3>
            <img src={fotoSobreMim} alt="" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus totam eveniet recusandae distinctio vitae ut magni sit laboriosam voluptatem corporis molestias, culpa tempora amet quam est. Atque, voluptates temporibus.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus totam eveniet recusandae distinctio vitae ut magni sit laboriosam voluptatem corporis molestias, culpa tempora amet quam est. Atque, voluptates temporibus.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusamus totam eveniet recusandae distinctio vitae ut magni sit laboriosam voluptatem corporis molestias, culpa tempora amet quam est. Atque, voluptates temporibus.</p>
        </RefPost>
    );
}
 
export default About;