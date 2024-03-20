import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users : {users.length}</h2>  
            <p>Please give me a 5 star</p>
            <div className="user">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
                </div>          
        </div>
    );
};

export default Users;