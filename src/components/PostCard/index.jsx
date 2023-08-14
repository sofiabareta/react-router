import { Link } from 'react-router-dom';
import styles from './Post.module.css'
import MainButton from 'components/MainButton';

const PostCard = ({ post }) => {
    return (
        <li className={styles.post}>
            <Link to={`/posts/${post.id}`}>
                <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt="" />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <MainButton>Ler</MainButton>
            </Link>
        </li>
    );
}
 
export default PostCard;