import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                Welcome to <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SliceLab</span>
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
                A training project for working with users, publications, and comments from API JSONPlaceholder.
                Here we've combined React, Redux Toolkit and MUI Components.
            </p>

            <button onClick={() => navigate('/users')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                Start Exploring
            </button>
        </div>
    );
};