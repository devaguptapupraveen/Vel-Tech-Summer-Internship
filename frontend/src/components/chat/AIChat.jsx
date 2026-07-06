import { useState } from "react";
import { Sparkles, SendHorizontal } from "lucide-react";
import api from "../../services/api";

export default function AIChat() {

    const [prompt, setPrompt] = useState("");

    const [loading, setLoading] = useState(false);

    async function send() {

    if (!prompt.trim()) return;

    try {

        setLoading(true);

        await api.post("/website/edit", {

            prompt

        });

        setPrompt("");

        alert("Website Updated Successfully");

        window.location.href="/preview";

    }

    catch(error){

        console.log(error);

        alert("Update Failed");

    }

    finally{

        setLoading(false);

    }

}

    return (

        <div className="h-full flex flex-col bg-white">

            {/* Header */}

            <div className="border-b px-6 py-5">

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-[#FFE5A3] flex items-center justify-center">

                       
                <img

                    src="/logo.png"

                    className="h-16"

                    alt="JimAI"

                />

                    </div>

                    <div>

                        <h2 className="font-bold text-xl text-gray-900">

                            JimAI Assistant

                        </h2>

                        <p className="text-sm text-green-600">

                            ● Online

                        </p>

                    </div>

                </div>

            </div>

            {/* Suggestions */}

            <div className="px-6 py-5">

                <p className="text-gray-500 mb-3">

                    Suggestions

                </p>

                <div className="flex flex-wrap gap-3">

                    <button className="bg-[#FFF3D6] hover:bg-[#FFE5A3] px-4 py-2 rounded-full text-sm">

                        Make navbar black

                    </button>

                    <button className="bg-[#FFF3D6] hover:bg-[#FFE5A3] px-4 py-2 rounded-full text-sm">

                        Add pricing section

                    </button>

                    <button className="bg-[#FFF3D6] hover:bg-[#FFE5A3] px-4 py-2 rounded-full text-sm">

                        Use Apple style

                    </button>

                    <button className="bg-[#FFF3D6] hover:bg-[#FFE5A3] px-4 py-2 rounded-full text-sm">

                        Add animations

                    </button>

                </div>

            </div>

            {/* Chat Area */}

            <div className="flex-1 px-6 overflow-auto">

                <div className="bg-[#FFF8EC] rounded-2xl p-5">

                    <p className="font-semibold text-[#D98C00]">

                        JimAI

                    </p>

                    <p className="mt-2 text-gray-700 leading-7">

                        Tell me what you want to change.

                        For example:

                        <br /><br />

                        • Make the hero section modern.

                        <br />

                        • Add testimonials.

                        <br />

                        • Change colors.

                        <br />

                        • Improve mobile layout.

                        <br />

                        • Add pricing cards.

                    </p>

                </div>

            </div>

            {/* Input */}

            <div className="border-t bg-white p-6">

                <textarea

                    value={prompt}

                    onChange={(e)=>setPrompt(e.target.value)}

                    placeholder="Describe the changes you want..."

                    className="w-full h-32 bg-gray-100 rounded-2xl p-5 resize-none outline-none border-2 border-transparent focus:border-[#F4A300] text-gray-700 placeholder:text-gray-500"

                />

                <button

                    onClick={send}

                    disabled={loading}

                    className="mt-5 w-full bg-[#F4A300] hover:bg-[#D98C00] text-black font-bold py-4 rounded-2xl flex justify-center items-center gap-3 transition"

                >

                    <SendHorizontal size={20}/>

                    {

                        loading

                        ?

                        "Updating Website..."

                        :

                        "Update Website"

                    }

                </button>

            </div>

        </div>

    );

}