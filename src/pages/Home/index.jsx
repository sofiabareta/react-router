import PostCard from "components/PostCard";
import posts from 'json/posts.json'
import styles from './Home.module.css'

const Home = () => {
    return ( 
        <ul className={styles.posts}>
            {
                posts.map(post => (
                    <PostCard post={post} />
                ))
            }
        </ul>
    );
}
 
export default Home;