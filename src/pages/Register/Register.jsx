import { useForm } from "react-hook-form";
import "./Register.css"
import axios from "axios";

const Register = () => {
    const { register, handleSubmit} = useForm();
    // const axiosRegister = useUrl();
    const onSubmit = (data) => {
        const registerInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        console.log(registerInfo);

        axios.post('https://react-interview.crd4lc.easypanel.host/api/login', { registerInfo }, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post'
        })
    }
    return (
        <div className="container">
            <h2>Register Now</h2>
            <form className="sub-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-first">
                    <label className="label">Name:</label>
                    <input placeholder="Your name" className="input" {...register("name", { required: true })} />
                </div>
                <div className="input-second">
                    <label className="label">Email:</label>
                    <input placeholder="Your Email" className="input" {...register("email", { required: true })} />
                </div>
                <div>
                    <label className="label">Password:</label>
                    <input placeholder="Your Password" className="input" {...register("password", { required: true })} />
                </div>

                <div>
                    <input className="submit" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default Register;