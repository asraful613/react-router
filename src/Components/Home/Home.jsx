import { Outlet, useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation=useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading"?<p>loading...</p>:<Outlet></Outlet>
            }
            <h2>this is the home page</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;