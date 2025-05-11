import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import { FaImage, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function UploadGIFPage() {
    const fileInputRef = useRef(null);
    const [imageUploaded, setImageUploaded] = useState(false);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageUploaded(true);
        }
    };

    const handleCancelUpload = () => {
        setImageUploaded(false);
        fileInputRef.current.value = null;
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] font-sans px-4 py-8">
            {/* Navigation */}
            <div className="max-w-5xl mx-auto px-8 mb-12 flex justify-between items-center">
                <div className="text-lg font-semibold">Gifme</div>
                <div className="flex gap-8 text-gray-700 font-medium">
                    <a href="#">Home</a>
                    <a href="#">Collection</a>
                    <a href="#">MyGifs</a>
                    <a href="#">Pricing</a>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/login">
                        <button className="bg-green-500 hover:bg-green-600 hover:shadow-md transition duration-300 text-black px-4 py-2 rounded-full font-medium">
                            Log in
                        </button>
                    </Link>
                </div>
            </div>

            {/* Upload Section Wrapper with Gradient Background */}
            <div className="max-w-5xl mx-auto px-4 bg-gradient-to-r from-white via-[#eaffea] to-white ">
                <div className="bg-transparent backdrop-blur-md border border-white/30 rounded-xl p-8 flex justify-between items-center relative shadow-md w-full">
                    {/* Dropdown */}
                    <div className="absolute top-5 left-5 flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-md shadow text-sm cursor-pointer">
                        Choose Style
                        <FaChevronDown className="text-xs" />
                    </div>

                    {/* Left Cartoon */}
                    <img src={image1} alt="Left Cartoon" className="absolute bottom-0 left-0 w-40 h-40 object-contain" />

                    {/* Upload Box */}
                    <div
                        onClick={!imageUploaded ? handleUploadClick : undefined}
                        className="w-full max-w-lg mx-auto text-center py-16 rounded-xl border border-dashed border-gray-300 cursor-pointer relative"
                    >
                        {!imageUploaded ? (
                            <>
                                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl text-gray-500 mb-4">
                                    +
                                </div>
                                <p className="text-gray-600 font-medium">Click to upload image here</p>
                            </>
                        ) : (
                            <div className="flex flex-col items-center">
                                <FaImage className="text-4xl text-green-500 mb-2" />
                                <p className="text-gray-700 font-medium">Image Uploaded</p>
                                <button
                                    onClick={handleCancelUpload}
                                    className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                                >
                                    <FaTimes size={18} />
                                </button>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>

                    {/* Right Cartoon */}
                    <img src={image2} alt="Right Cartoon" className="absolute bottom-0 right-0 w-40 h-40 object-contain" />
                </div>
            </div>

            {/* Generate GIF Button */}
            <div className="mt-6 max-w-5xl mx-auto px-4">
                <button
                    disabled={!imageUploaded}
                    className={`w-full font-semibold py-4 rounded-xl shadow-sm transition
                        ${imageUploaded
                            ? 'bg-green-500 text-black cursor-pointer'
                            : 'bg-white text-gray-400 cursor-not-allowed'
                        }`}
                >
                    Generate GIF
                </button>
            </div>
        </div>
    );
}
