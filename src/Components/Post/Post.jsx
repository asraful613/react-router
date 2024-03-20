import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;
    const postStyle={
        border:'2px solid tomato',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={postStyle}>
           <h4>Post of Id : {id}</h4> 
           <h3>{title}</h3>
           <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;