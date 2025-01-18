import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        const loginInfo = {
            email: data.email,
            password: data.password
        }
        console.log(loginInfo);

        axios.post(
            'https://react-interview.crd4lc.easypanel.host/api/login',loginInfo,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post'
            })
    }

    return (
        <div className="container">
            <form className="sub-container" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login Now</h2>
                <div className="input-first">
                    <label className="label">Email:</label>
                    <input placeholder="Your Email" className="input" {...register("email", { required: true })} />
                </div>
                <div className="input-second">
                    <label className="label">Password:</label>
                    <input placeholder="Your Password" className="input" {...register("password", { required: true })} />
                </div>

                <div className="input-third">
                    <input className="submit" type="submit" />
                </div>
            </form>

        </div>
    );
};

export default Login;