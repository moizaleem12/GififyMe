import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/main.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

export default function SignupPage() {
    return (
        <div className="flex h-screen w-full font-sans">
            {/* Left Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center px-16">
                <h2 className="text-gray-600 text-sm font-medium">Gifme</h2>
                <h1 className="text-3xl font-bold mt-2 mb-6">
                    Turn Your Photos into <br /> Stunning AI GIFs
                </h1>

                <input
                    type="username"
                    placeholder="username"
                    className="mb-4 px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    className="mb-4 px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none"
                />
                <input
                    type="password"
                    placeholder="yourpassword"
                    className="mb-4 px-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none"
                />
                <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg w-full">
                    SignUp
                </button>

                <p className="mt-4 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-600 hover:underline">
                        Login
                    </Link>
                </p>

                <button className="mt-4 border py-3 rounded-lg w-full text-gray-700 bg-white">
                    Continue with google
                </button>
            </div>

            {/* Right Section */}
            <div className="w-1/2 relative bg-[#f2fdf6] flex justify-center items-center">
                <img src={mainImage} alt="Main" className="w-[70%]" />
                <img
                    src={profile1}
                    alt="Profile1"
                    className="absolute top-12 left-16 w-24 h-24 rounded-full border-4 border-white"
                />
                <img
                    src={profile2}
                    alt="Profile2"
                    className="absolute bottom-14 right-14 w-26 h-26 rounded-full border-4 border-white"
                />
            </div>
        </div>
    );
}
