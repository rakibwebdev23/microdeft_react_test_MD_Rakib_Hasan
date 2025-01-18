import axios from "axios";

const axiosRegister = axios.create({
    baseURL: 'https://react-interview.crd4lc.easypanel.host'
});

const useUrl = () => {
    return axiosRegister;
};

export default useUrl;