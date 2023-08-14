import { useParams } from "react-router-dom";
import posts from 'json/posts.json'
import RefPost from "components/RefPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import './Post.css'
import NotFound from "pages/NotFound";
import PostCard from "components/PostCard";
import DefaultPage from "components/DefaultPage";

const Post = () => {
    const params = useParams()
    const post = posts.find(post => (
        post.id === Number(params.id)
    ))

    if (!post) {
        return <NotFound />
    }

    const recommendedPosts = posts
        .filter(post => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <DefaultPage>

            <RefPost
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2>Você também pode gostar</h2>
                <ul style={{ display: "flex", justifyContent: "space-between"}}>
                    {
                        recommendedPosts.map(post => (
                            <PostCard post={post} />
                        ))
                    }
                </ul>
            </RefPost>
        </DefaultPage>
              
    );
}
 
export default Post;