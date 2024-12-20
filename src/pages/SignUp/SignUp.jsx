// import React, { useContext, useState } from 'react'
// import { createUserWithEmailAndPassword } from "firebase/auth";
//  import { auth } from "../../firebase";  // import the firebase config
// import { useNavigate, Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';



// const Login = () => {
//     const [error, setError] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");



//     const navigate = useNavigate();

//     const {dispatch} = useContext(AuthContext)

    
//     const handleLogin = (e)=> {
//         e.preventDefault();

//         createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
        
//         // Signed up 
//         const user = userCredential.user;  
//         dispatch({type:"LOGIN", payload:user})
//         navigate("/home")
//         // ...
//       })
//       .catch((error) => {
//         setError(true)
//         // ..
//       });
//     }

//   return (
//     <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Sign Up now!</h1>
//       <p className="py-6">A food delivery app is a convenient platform that connects users with a variety of local restaurants and eateries, allowing them to browse menus, place orders, and have meals delivered straight to their doorstep.</p>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form className="card-body" onSubmit={handleLogin}>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="Enter Your Email" className="input input-bordered" required onChange={e=> setEmail(e.target.value)}/>
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" placeholder="Enter Your Password" className="input input-bordered" required onChange={e=> setPassword(e.target.value)} />
//           <label className="label">
//             <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button type="submit" className="btn bg-orange-500 text-white hover:bg-orange-600">Sign Up</button>
//           {error && <p className="text-red-500">Something went wrong</p>}
//         </div>
//         <div className="text-center mt-4">
//           <p className="text-sm">
//             Already have an account? <Link to="/" className="link link-hover">Login here</Link>.
//           </p>
//         </div>
//       </form>
//     </div>
//   </div> 
// </div>
//   )
// }

// export default Login
