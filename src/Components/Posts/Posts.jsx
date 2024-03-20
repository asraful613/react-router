import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts=useLoaderData();
    return (
        <div>
            <h2>Posts :{posts.length} </h2>
            <div className="user">
                {
                    posts.map(post =>  <Post post={post} key={post.id} />)
                }
            </div>
        </div>
    );
};

export default Posts;