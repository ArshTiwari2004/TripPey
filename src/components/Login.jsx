
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { database } from '../Config/FirebaseConfig';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const history= useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 

        const email= e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(database,email,password)
            .then(data=>{
                console.log(data,"AuthData")
                history('/dashboard')
            }).catch(err =>{
                alert(err.code)
            })

        
        // if (username.trim() === '' || password.trim() === '') {
        //     setError('Please enter both username and password');
        //     return;
        // }

        // if (username === 'admin' && password === 'password') {
        
        //     setError('');

    
        //     navigate('/Dashboard'); 
        // } else {
        //     setError('Invalid username or password');
        // }
    };

    return (
        // <div className="flex flex-col items-center justify-center absolute inset-0 w-screen h-screen bg-green-100 text-gray-700">
        //     <h1 className="font-bold text-3xl">Rakshak Login</h1>
        //     <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" onSubmit={handleLogin}>
        //         <label className="font-semibold text-sm">Username</label>
        //         <input
        //             placeholder="Enter username"
        //             className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        //             type="text"
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //         />
        //         <label className="font-semibold text-sm mt-3">Password</label>
        //         <input
        //             placeholder="Enter password"
        //             className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //         />
        //         {error && <p className="text-red-500 mt-2">{error}</p>}
        //         <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-4 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" type="submit">
        //             Login
        //         </button>
        //     </form>
        // </div>
        <div className="flex flex-col items-center justify-center absolute inset-0 w-screen h-screen bg-green-100 text-gray-700">
            <h1 className="font-bold text-3xl">Rakshak Login</h1>
            <form onSubmit={(e)=> handleLogin(e)} className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                <label className="font-semibold text-sm" htmlFor="usernameField">Username</label>
                <input name='email' placeholder="Enter username" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                <label className="font-semibold text-sm mt-3" htmlFor="passwordField">Password</label>
                <input name='password' placeholder="Enter password" className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>    
            </form>
        </div>
    );
};

export default Login;
