import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import api from "../../services/api";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function login(e) {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await api.post("/auth/login", {

                email,

                password

            });

            localStorage.setItem(

                "token",

                response.data.token

            );

            navigate("/dashboard");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center px-6">

            <div className="grid lg:grid-cols-2 max-w-7xl w-full gap-20 items-center">

                {/* LEFT */}

                <div className="hidden lg:block">

                    <img

                        src="/logo.png"

                        alt="JimAI"

                        className="w-80"

                    />

                    <h1 className="text-6xl font-black mt-8 leading-tight text-[#111827]">

                        Welcome Back

                    </h1>

                    <p className="mt-8 text-xl text-gray-600 leading-9">

                        Continue building amazing AI-powered websites.

                        Generate, Preview, Edit and Export complete

                        production-ready websites using JimAI.

                    </p>

                    <div className="mt-12 space-y-4">

                        <div className="flex items-center gap-3">

                            <div className="w-3 h-3 rounded-full bg-[#F4A300]"></div>

                            <p className="text-lg text-gray-700">

                                AI Website Generator

                            </p>

                        </div>

                        <div className="flex items-center gap-3">

                            <div className="w-3 h-3 rounded-full bg-[#F4A300]"></div>

                            <p className="text-lg text-gray-700">

                                Live Preview

                            </p>

                        </div>

                        <div className="flex items-center gap-3">

                            <div className="w-3 h-3 rounded-full bg-[#F4A300]"></div>

                            <p className="text-lg text-gray-700">

                                Export React Projects

                            </p>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="flex justify-center">

                    <form

                        onSubmit={login}

                        className="bg-white rounded-[35px] shadow-2xl p-12 w-full max-w-lg"

                    >

                        <div className="flex justify-left mb-2">

                            <img

                                src="/logo.png"

                                alt="JimAI"

                                className="h-24"

                            />

                        </div>

                        <h2 className="text-4xl font-bold text-center text-[#111827]">

                            Login

                        </h2>

                        <p className="text-center text-gray-500 mt-3">

                            Access your JimAI dashboard

                        </p>
<input

    type="email"

    placeholder="Email Address"

    value={email}

    onChange={(e)=>setEmail(e.target.value)}

    className="
        w-full
        mt-10
        p-4
        rounded-xl
        bg-gray-100
        text-gray-700
        placeholder:text-gray-500
        border-2
        border-transparent
        focus:border-[#F4A300]
        outline-none
    "

/>

                        <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="
        w-full
        mt-5
        p-4
        rounded-xl
        bg-gray-100
        text-gray-700
        placeholder:text-gray-500
        border-2
        border-transparent
        focus:border-[#F4A300]
        outline-none
    "
/>
                        <button

                            disabled={loading}

                            className="w-full mt-8 bg-[#F4A300] hover:bg-[#d99000] text-black font-bold py-4 rounded-xl flex justify-center items-center gap-3 transition"

                        >

                            {

                                loading

                                ?

                                "Signing In..."

                                :

                                <>

                                    Login

                                    <ArrowRight size={20}/>

                                </>

                            }

                        </button>

                        <div className="text-center mt-8 text-gray-500">

                            Don't have an account?

                            <button

                                type="button"

                                onClick={()=>navigate("/register")}

                                className="ml-2 text-[#F4A300] font-bold hover:underline"

                            >

                                Register

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}