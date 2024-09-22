import { Link, } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
// import axios from 'axios';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)


        signIn(email, password)
            .then(result => {
                console.log(result);
             })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="hero bg-base-200 min-h-screen relative">

            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='text-center font-bold md:text-5xl mt-3 text-orange-600  '>Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-error text-white" />
                        </div>
                    </form>
                    <p className='py-3 text-center'>New to this <Link className='font-bold text-red-500' to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;



// import { Link } from 'react-router-dom';
// import img from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const Login = () => {

//     const { signIn } = useContext(AuthContext);

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, email, password)
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//             })
//             .catch(error => console.log(error));
//     }

//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content flex-col lg:flex-row">
//                 <div className="w-1/2 mr-12">
//                     <img src={img} alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <h1 className="text-3xl text-center font-bold">Login</h1>
//                         <form onSubmit={handleLogin}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;