import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mainImage from "../assets/main.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import bgimage from "../assets/bgimage.png"; // Import your background image

export default function LoginRightSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="flex h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            {/* Left Section */}
            <div className="w-1/2 bg-white bg-opacity-90 flex flex-col justify-center px-16">
                <h2 className="text-gray-600 text-sm font-medium">Gifme</h2>
                <h1 className="text-3xl font-bold mt-2 mb-6">
                    Turn Your Photos into <br /> Stunning AI GIFs
                </h1>

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
                    Login
                </button>

                <p className="mt-4 text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-green-600 hover:underline">
                        Signup
                    </Link>
                </p>

                <button className="mt-4 border py-3 rounded-lg w-full text-gray-700 bg-white">
                    Continue with Google
                </button>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex justify-center items-center">
                <div className="relative bg-[#f2fdf6] p-10 rounded-xl shadow-lg w-[420px] h-[500px] flex flex-col justify-center items-center">
                    <img src={mainImage} alt="Main" className="w-[80%] mb-6" />
                    <img
                        src={profile1}
                        alt="Profile1"
                        className="absolute top-5 left-5 w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <img
                        src={profile2}
                        alt="Profile2"
                        className="absolute bottom-16 right-5 w-24 h-24 rounded-full border-4 border-white shadow-md"
                    />
                    <div className="absolute bottom-5 flex gap-2">
                        {[0, 1, 2].map((index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-green-600" : "bg-gray-300"
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
