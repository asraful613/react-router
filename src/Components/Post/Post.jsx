import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;
    const navigate=useNavigate()
    const postStyle={
        border:'2px solid tomato',
        padding:'10px',
        borderRadius:'10px'
    }
    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
           <h4>Post of Id : {id}</h4> 
           <h3>{title}</h3>
           <Link to={`/post/${id}`}>Post Details</Link>
           <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;