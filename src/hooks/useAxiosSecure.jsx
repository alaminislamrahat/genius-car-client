import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://genius-car-server-sigma-khaki.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const {logOut} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor',error.response);
            if(error.response.status === 401 || error.response.status === 403){
                console.log('log out user');
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
    }, [axiosSecure,logOut,navigate])

    return axiosSecure;
};

export default useAxiosSecure;