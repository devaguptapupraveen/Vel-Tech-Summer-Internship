import { generateWebsite } from "../../services/website";
import { useState } from "react";
import {
    Menu,
    FolderOpen,
    LogOut,
    Sparkles,
    ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const [prompt, setPrompt] = useState("");

    const [loading, setLoading] = useState(false);

    async function generate() {

    if (!prompt.trim()) {

        alert("Please enter a prompt.");

        return;

    }

    try {

        setLoading(true);

        // Save prompt for future regeneration
        localStorage.setItem("websitePrompt", prompt);

        await generateWebsite(prompt);

        navigate("/thinking");

    }

    catch (error) {

        console.log(error);

        alert("Generation Failed");

    }

    finally {

        setLoading(false);

    }

}

    return (

        <div className="min-h-screen bg-[#FFF8EC]">

            {/* Sidebar */}

            <div

                className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl transition-all duration-300 z-50 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}

            >

                <div className="p-8">

                    <img

                        src="/logo.png"

                        className="w-44"

                        alt="JimAI"

                    />

                    <div className="mt-16 space-y-5">

                        <button

                            className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-[#FFF3D6] text-lg font-semibold text-gray-700"

                        >

                            <FolderOpen size={24}/>

                            Projects

                        </button>

                        <button

                            onClick={() => {

                                localStorage.removeItem("token");

                                navigate("/login");

                            }}

                            className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 text-lg font-semibold text-red-600"

                        >

                            <LogOut size={24}/>

                            Logout

                        </button>

                    </div>

                </div>

            </div>

            {/* Header */}

            <header className="bg-white shadow-sm flex justify-left items-center px-10 py-5">

                <button

                    onClick={() => setOpen(!open)}

                >

                    <Menu

                        size={34}

                        className="text-gray-700"

                    />

                </button>

                <img

                    src="/logo.png"

                    className="h-16"

                    alt="JimAI"

                />

                <div style={{width:34}}></div>

            </header>

                       {/* Main Content */}

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="text-center">

                    

                    <h1 className="mt-10 text-6xl font-black text-[#111827]">

                        What would you like

                        <br />

                        to build today?

                    </h1>

                    <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-9">

                        Describe your business, startup, portfolio,

                        restaurant or e-commerce website.

                        JimAI will generate a beautiful,

                        production-ready website using AI.

                    </p>

                </div>

                {/* Prompt Box */}

                <div className="mt-20 flex justify-center">

                    <div className="bg-white rounded-[35px] shadow-2xl w-full max-w-5xl p-8">

                        <textarea

                            value={prompt}

                            onChange={(e)=>setPrompt(e.target.value)}

                            placeholder={`Example:

Create a premium food delivery website.

Modern UI

Responsive

Dark mode

AI Chatbot

Admin Dashboard

SEO Optimized

Animations

Contact Page

Login & Register

`}

                            className="
                                w-full
                                h-64
                                resize-none
                                bg-gray-100
                                rounded-2xl
                                p-6
                                text-lg
                                text-gray-700
                                placeholder:text-gray-500
                                outline-none
                                border-2
                                border-transparent
                                focus:border-[#F4A300]
                            "

                        />

                        <div className="flex justify-between items-center mt-8">

                            <div>

                                <p className="text-gray-500">

                                    Powered by ......

                                </p>

                            </div>

                            <button

                                onClick={generate}

                                disabled={loading}

                                className="flex items-center gap-3 bg-[#F4A300] hover:bg-[#D98C00] px-10 py-4 rounded-2xl text-black font-bold text-lg transition"

                            >

                                {

                                    loading

                                    ?

                                    "Generating..."

                                    :

                                    <>

                                        Generate Website

                                        <ArrowRight size={22}/>

                                    </>

                                }

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}