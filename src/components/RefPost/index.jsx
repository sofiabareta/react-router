import styles from './RefPost.module.css'

const RefPost = ({ children, fotoCapa, titulo}) => {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{ backgroundImage: `url(${fotoCapa})`}}>

            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>
            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    );
}
 
export default RefPost;