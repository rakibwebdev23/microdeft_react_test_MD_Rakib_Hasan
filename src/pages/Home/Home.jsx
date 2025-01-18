import GetData from "../GetData";
import Register from "../Register/Register";
import Login from "./Login";

const Home = () => {
    return (
        <div>
            <Register></Register>
            <Login></Login>
            <GetData></GetData>
        </div>
    );
};

export default Home;