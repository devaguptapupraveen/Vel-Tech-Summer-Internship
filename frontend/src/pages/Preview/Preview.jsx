import {
    Download,
    Upload,
    RotateCw,
    Monitor
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { generateWebsite } from "../../services/website";
import AIChat from "../../components/chat/AIChat";
import { useState } from "react";

import { publishWebsite } from "../../services/website";
import { exportWebsite } from "../../services/website";
async function publish() {

    try {

        const response = await publishWebsite();
        console.log(response);
        alert("Website Published Successfully");

        window.open(

            response.url,

            "_blank"

        );

    }

    catch (error) {

        console.log(error);

        alert(
            error.response?.data?.message ||
            "Publishing Failed"
        );

    }

}

export default function Preview() {
       const navigate = useNavigate();

       const [loading,setLoading]=useState(false);
    return (

        <div className="min-h-screen bg-[#FFF8EC]">

            {/* ================= HEADER ================= */}

            <header className="bg-white border-b shadow-sm">

                <div className="max-w-[1800px] mx-auto px-10 py-5 flex justify-between items-center">

                    <div className="flex items-center gap-5">

                        <img
                            src="/logo.png"
                            alt="JimAI"
                            className="h-16"
                        />

                        <div>

                            <h1 className="text-3xl font-bold text-gray-900">

                                Website Preview

                            </h1>

                            <p className="text-gray-500">

                                AI Generated Website

                            </p>

                        </div>

                    </div>

                    <div className="flex gap-4">

                       
                        <button
                            onClick={exportWebsite}
                            className="flex items-center gap-3 bg-[#F4A300] hover:bg-[#D98C00] text-black px-6 py-3 rounded-xl font-bold transition"

                        >

                            <Download size={20} />

                            Export

                        </button>

                        <button
                            onClick={publish}
                            className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold transition"

                        >

                            <Upload size={20} />

                            Publish

                        </button>

                    </div>

                </div>

            </header>

            {/* ================= BODY ================= */}

            <div className="max-w-[1800px] mx-auto p-8">

                <div className="grid grid-cols-12 gap-8">

                    {/* LEFT PANEL */}

                    <div className="col-span-4">

                        <div className="bg-white rounded-3xl shadow-xl h-[82vh] flex flex-col">

                            <div className="p-6 border-b">

                                <h2 className="text-2xl font-bold text-gray-900">

                                    AI Website Editor

                                </h2>

                                <p className="text-gray-500 mt-2">

                                    Ask JimAI to modify your website.

                                </p>

                            </div>

                            <div className="flex-1 overflow-auto">

                                <AIChat />

                            </div>

                        </div>

                    </div>

                    {/* RIGHT PANEL */}

                    <div className="col-span-8">

                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[82vh] flex flex-col">

                            {/* Browser Bar */}

                            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">

                                <div className="flex items-center gap-2">

                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>

                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>

                                </div>

                                <div className="flex items-center gap-3 bg-white border rounded-full px-6 py-2">

                                    <eye
                                        size={16}
                                        className="text-gray-500"
                                    />

                                    <span className="text-gray-500">

                                        preview.jimai.ai

                                    </span>

                                </div>

                                <div></div>

                            </div>

                            {/* Preview */}

                            <iframe

                                title="preview"

                                src="http://127.0.0.1:5000/api/preview/"

                                className="w-full flex-1"

                                style={{

                                    border: "none"

                                }}

                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}