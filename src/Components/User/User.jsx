import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid tomato',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link  to={`/user/${id}`}>Show Details</Link>
            {/* <Link to={`/user/${id}`}>Click me</Link> */}
        </div>
    );
};

export default User;