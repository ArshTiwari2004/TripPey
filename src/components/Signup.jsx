import React, { useState } from 'react'
import { authentication, database } from '../Config/FirebaseConfig';
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';

const Signup = () => {
  const [name, setName] = useState("");
    const [nationality, setNationality] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [gender,setGender] = useState("");
    const [dob,setDob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const data = collection(database, "user-data");
    const history = useNavigate();
    const CreateUser = async () => {
        await addDoc(data, { Name: name, Nationality: nationality, MobileNumber: mobilenumber, Preferred_language: selectedLanguage,sex:gender,Date_of_Birth:dob, user_email: email });
        createUserWithEmailAndPassword(authentication, email, password)
            .then((data) => {
                console.log(data);
                history('/dashboard')
            }).catch((err) => {
                alert(err.code)
            })
    }

  return (
    <>
            <div className="h-auto bg-cover bg-center flex items-cnenter justify-center" style={{ backgroundImage: "url('/beach2.jpg')"}}>
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white h-screen">
                    <div className='mt-2'>
                        <label className="block mb-2 text-black text-sm font-medium ">
                      
                            Your Name
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                            className="bg-gray-50 border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" />
                    </div>
                    <div className='mt-2'>
                        <label className="block mb-2 text-black text-sm font-medium ">
                            Your Nationality
                        </label>
                        <input
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            placeholder="Enter Nationality"
                            className="bg-gray-50 border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" />
                    </div>
                    <div class="mt-2">
                        <label class="block mb-2 text-black text-sm font-medium ">
                            Your Mobile Number
                        </label>
                        <input
                            value={mobilenumber}
                            onChange={(e) => setMobilenumber(e.target.value)}
                            type="tel" placeholder="Enter Mobile Number"
                            class="bg-gray-50 border border-gray-300 text-indigo-700 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className='flex space-x-4'>
                        <div className="flex-1 mt-2">
                            <label htmlFor="gender" className="block mb-2 text-black text-sm font-medium ">
                                Gender
                            </label>
                            <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                                id="gender"
                                name="gender"
                                className="bg-gray-50 border border-gray-300 text-indigo-700 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex-1 mt-2">
                            <label htmlFor="dateOfBirth" className="block mb-2 text-black text-sm font-medium ">
                                Date of Birth
                            </label>
                            <input
                                value={dob}
                            onChange={(e) => setDob(e.target.value)}
                                type="date"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                className="bg-gray-50 border border-gray-300 text-indigo-700 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                        </div>
                    </div>

                    <div class="mt-2">
                        <label class="block mb-2 text-black text-sm font-medium ">
                            Your Preferred Language
                        </label>
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            class="bg-gray-50 border border-gray-300 text-indigo-700 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                            <option value="" disabled selected>Select Language</option>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="spanish">Spanish</option>
                            <option value="chinese">Chinese </option>
                            <option value="arabic">Arabic</option>
                            <option value="pt">Portuguese</option>
                            <option value="russian">Russian</option>
                            <option value="japanese">Japanese</option>
                            <option value="ko">Korean</option>
                            <option value="it">Italian</option>
                            <option value="tr">Turkish</option>
                            <option value="nl">Dutch</option>
                            <option value="pl">Polish</option>
                            <option value="sv">Swedish</option>
                        </select>
                    </div>
                    <div className='mt-2'>
                        <label className="block mb-2 text-black text-sm font-medium ">
                            Your Email
                        </label>
                        <input placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-50 border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" />
                    </div>

                    <div className='mt-2'>
                        <label className="block text-black mb-2 text-sm font-medium ">
                            Password
                        </label>
                        <input
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Set Your Password" type="password" />
                    </div>
                    <div className='p-3'>
                        <button onClick={CreateUser} className="w-full mb-4 mt-1 bg-blue-500 hover:bg-blue-600 active:scale-95 px-5 py-2.5 font-medium rounded-lg text-sm text-center text-white" >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
  );
};

export default Signup;