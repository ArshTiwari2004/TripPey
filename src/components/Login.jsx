import { useState } from 'react'
import { signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from '../Config/FirebaseConfig';
import {useNavigate} from 'react-router-dom';


function Login() {

  const history= useNavigate();

  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

  const loginUsingEmail = ()=>{
      signInWithEmailAndPassword(authentication,email,password)
        .then(()=>{
          alert("Successfully logged in !")
          history('/dashboard');
        })
  }

  const handleGoogleSignUp = (e) => {
    
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then(dat => {
        console.log(dat);
        history('/dashboard') // redirecting to Home page
    })
    .catch (err=>{
        alert(err.code)
    })
}
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/beach2.jpg')"}} >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white">
        <div>
          <label className="block mb-2 text-sm font-medium text-black ">
            Your Email
          </label>
          <input placeholder="Enter email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            class="bg-gray-50 border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" />
        </div>
        <div className='mt-2'>
          <label class="block mb-2 text-sm text-black font-medium "> 

            Password
          </label>
          <input
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            class="bg-gray-50 border border-gray-300 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter Password" 
            type="password" />
        </div>
        <div className='p-3'>
          <button onClick={loginUsingEmail} class="w-full mb-4 mt-1 bg-blue-500 hover:bg-blue-600 active:scale-95 px-5 py-2.5 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white" >
            Sign in
          </button>
          <div class="flex items-center mb-4">
            <div class="w-full border-t border-gray-300"></div>
            <div class="px-4 text-white">or</div>
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <button onClick={handleGoogleSignUp} className="w-full flex items-center hover:bg-blue-600 justify-center gap-2 p-2 rounded-md  text-sm font-semibold text-white bg-[#4285F4]  active:scale-95 px-5 py-2.5">
            <svg class="w-4 h-4 mr-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Sign in with Google
          </button>

        </div>
      </div>

    </div>
  )
}

export default Login
