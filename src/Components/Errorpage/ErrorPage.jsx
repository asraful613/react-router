import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>
           <h2>Oops sorry !!!</h2> 
           <h3>{error.message || error.statusText}</h3>
           {
            error.status===404? <h3>Page not found</h3>:null
           }
        </div>
    );
};

export default ErrorPage;