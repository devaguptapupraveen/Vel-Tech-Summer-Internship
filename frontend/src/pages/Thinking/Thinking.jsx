import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Cpu, CheckCircle2 } from "lucide-react";
import { getGenerationStatus } from "../../services/website";

export default function Thinking() {

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0);

    const [status, setStatus] = useState("Initializing AI Engine...");

    useEffect(() => {

        const interval = setInterval(async () => {

            try {

                const data = await getGenerationStatus();

                setProgress(data.progress);

                setStatus(data.status);

                if (data.progress >= 100) {

                    clearInterval(interval);

                    setTimeout(() => {

                        navigate("/preview");

                    }, 800);

                }

            }

            catch (err) {

                console.log(err);

            }

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center px-6">

            <div className="bg-white rounded-[40px] shadow-2xl max-w-3xl w-full p-12">

                {/* Logo */}

                <div className="flex justify-center">

                    <img

                        src="/logo.png"

                        alt="JimAI"

                        className="w-40"

                    />

                </div>

                {/* Heading */}

                <h1 className="text-center text-5xl font-black text-gray-900 mt-8">

                    Building Your Website

                </h1>

                <p className="text-center text-gray-500 mt-4 text-lg">

                    JimAI is designing, coding and optimizing your website using Gemini AI.

                </p>

                {/* Status Card */}

                <div className="mt-10 bg-[#FFF7E8] border border-[#F4A300] rounded-3xl p-6 flex items-center gap-4">

                    <Cpu

                        className="text-[#F4A300] animate-pulse"

                        size={40}

                    />

                    <div>

                        <p className="text-gray-500 text-sm">

                            Current Task

                        </p>

                        <h2 className="text-xl font-bold text-gray-900">

                            {status}

                        </h2>

                    </div>

                </div>

                {/* Progress */}

                <div className="mt-10">

                    <div className="flex justify-between mb-3">

                        <span className="font-semibold text-gray-700">

                            Generation Progress

                        </span>

                        <span className="font-bold text-[#F4A300]">

                            {progress}%

                        </span>

                    </div>

                    <div className="h-5 bg-gray-200 rounded-full overflow-hidden">

                        <div

                            className="h-full rounded-full bg-[#F4A300] transition-all duration-700"

                            style={{

                                width: `${progress}%`

                            }}

                        />

                    </div>

                </div>

                {/* AI Steps */}

                <div className="grid grid-cols-2 gap-5 mt-12">

                    <div className="bg-gray-50 rounded-2xl p-5">

                        <div className="flex items-center gap-3">

                            <CheckCircle2 className="text-green-600"/>

                            <span className="font-semibold">

                                Planning Website

                            </span>

                        </div>

                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">

                        <div className="flex items-center gap-3">

                            <Sparkles className="text-yellow-500"/>

                            <span className="font-semibold">

                                Designing UI

                            </span>

                        </div>

                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">

                        <div className="flex items-center gap-3">

                            <Sparkles className="text-blue-500"/>

                            <span className="font-semibold">

                                Writing Content

                            </span>

                        </div>

                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">

                        <div className="flex items-center gap-3">

                            <Cpu className="text-purple-600"/>

                            <span className="font-semibold">

                                Final Optimization

                            </span>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="mt-12 text-center text-gray-500">

                    Please don't close this window.

                    <br />

                    JimAI is creating your website.

                </div>

            </div>

        </div>

    );

}