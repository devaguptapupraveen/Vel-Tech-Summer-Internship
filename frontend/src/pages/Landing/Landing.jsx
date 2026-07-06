import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-[#FFF8EC] text-[#111827]">

            {/* Navbar */}

            <header className="flex items-center justify-between px-40 md:px-16 py-5 bg-white shadow-sm">

                <img
                    src="/logo.png"
                    alt="JimAI"
                    className="h-20 object-contain"
                />

                <button
                    onClick={() => navigate("/login")}
                    className="bg-[#F4A300] hover:bg-[#d99000] text-black px-8 py-3 rounded-xl font-bold transition duration-300"
                >
                    Login
                </button>

            </header>

            {/* Hero */}

            <section className="max-w-7xl mx-auto px-8 py-24">

                <div className="grid lg:grid-cols-2 items-center gap-20">

                    {/* Left */}

                    <div>

                        

                        <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

                            Build Beautiful

                            <br />

                            Websites

                            <span className="text-[#F4A300]">

                                {" "}with AI

                            </span>

                        </h1>

                        <p className="mt-8 text-xl text-gray-600 leading-9">

                            Turn one prompt into a beautiful,

                            responsive website.

                            JimAI designs, generates,

                            previews and exports production-ready

                            websites in minutes.

                        </p>

                        <div className="flex gap-6 mt-12">

                            <button
                                onClick={() => navigate("/register")}
                                className="flex items-center gap-3 bg-[#F4A300] hover:bg-[#d99000] text-black px-10 py-5 rounded-2xl font-bold text-xl transition"
                            >
                                Start Building
                                <ArrowRight size={22}/>
                            </button>

                            <button
                                onClick={() => navigate("/login")}
                                className="border-2 border-[#F4A300] text-[#D48B00] hover:bg-[#F4A300] hover:text-black px-10 py-5 rounded-2xl font-bold text-xl transition"
                            >
                                Login
                            </button>

                        </div>

                    </div>

                    {/* Right */}

                    

<div className="flex justify-center">

    <div
        className="
            relative
            w-[520px]
            h-[520px]
            rounded-full
            bg-gradient-to-br
            from-white
            via-[#FFF8E6]
            to-[#FFE7A0]
            
            shadow-1x1
            flex
            items-center
            justify-center
        "
    >

        <img
            src="/logo.png"
            alt="JimAI"
            className="w-[700px] object-contain"
        />

    </div>

</div>
                </div>

            </section>

            {/* Features */}

            <section className="max-w-7xl mx-auto px-8 pb-24">

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-3xl p-8 shadow-lg">

                        <h2 className="text-2xl font-bold text-[#F4A300]">

                            AI Website Builder

                        </h2>

                        <p className="mt-5 text-gray-600">

                            Generate complete websites from a single prompt.

                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">

                        <h2 className="text-2xl font-bold text-[#F4A300]">

                            Live Preview

                        </h2>

                        <p className="mt-5 text-gray-600">

                            Preview and edit websites instantly.

                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">

                        <h2 className="text-2xl font-bold text-[#F4A300]">

                            Export & Publish

                        </h2>

                        <p className="mt-5 text-gray-600">

                            Download production-ready React websites.

                        </p>

                    </div>

                </div>

            </section>

        </div>

    );

}