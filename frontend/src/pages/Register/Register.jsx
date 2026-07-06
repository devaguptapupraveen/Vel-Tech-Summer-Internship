import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import api from "../../services/api";

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function register(e) {

        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {

            setLoading(true);

            await api.post("/auth/register", {
                full_name: name,
                email,
                password
            });

            alert("Account Created Successfully");

            navigate("/login");

        }
        catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        }
        finally {

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen bg-[#FFF8EC] flex items-center justify-center px-6">

            <div className="grid lg:grid-cols-2 w-full max-w-7xl gap-16 items-center">

                {/* LEFT */}

                <div className="hidden lg:flex flex-col">

                    <img
                        src="/logo.png"
                        alt="JimAI"
                        className="w-100"
                    />

                    <h1 className="text-6xl font-black mt-8 text-[#111827] leading-tight">

                        Join

                        <span className="text-[#F4A300]">

                            {" "}JimAI

                        </span>

                    </h1>

                    <p className="mt-8 text-xl text-gray-600 leading-9">

                        Build complete AI-powered websites from
                        a single prompt.

                        Generate, Preview,
                        Edit and Export professional websites
                        within minutes.

                    </p>

                </div>

                {/* RIGHT */}

                <div className="flex justify-center">

                    <form

                        onSubmit={register}

                        className="bg-white rounded-[35px] shadow-2xl w-full max-w-lg p-12"

                    >

                        <h2 className="text-4xl font-bold text-center text-[#111827]">

                            Create Account

                        </h2>

                        <p className="text-center text-gray-500 mt-3">

                            Start building with AI today

                        </p>

                        <input

    type="text"

    placeholder="Full Name"

    value={name}

    onChange={(e)=>setName(e.target.value)}

    className="
        w-full
        mt-10
        rounded-xl
        bg-gray-100
        text-gray-700
        placeholder:text-gray-500
        p-4
        outline-none
        border-2
        border-transparent
        focus:border-[#F4A300]
        focus:bg-white
        transition
    "

/>
                        <input

    type="email"

    placeholder="Email Address"

    value={email}

    onChange={(e)=>setEmail(e.target.value)}

    className="
        w-full
        mt-5
        rounded-xl
        bg-gray-100
        text-gray-700
        placeholder:text-gray-500
        p-4
        outline-none
        border-2
        border-transparent
        focus:border-[#F4A300]
        focus:bg-white
        transition
    "

/>
                        <input

    type="password"

    placeholder="Password"

    value={password}

    onChange={(e)=>setPassword(e.target.value)}

    className="
        w-full
        mt-5
        rounded-xl
        bg-gray-100
        text-gray-700
        placeholder:text-gray-500
        p-4
        outline-none
        border-2
        border-transparent
        focus:border-[#F4A300]
        focus:bg-white
        transition
    "

/>

                        <input

    type="password"

    placeholder="Confirm Password"

    value={confirmPassword}

    onChange={(e)=>setConfirmPassword(e.target.value)}

    className="
        w-full
        mt-5
        rounded-xl
        bg-gray-100
        text-gray-700
        placeholder:text-gray-500
        p-4
        outline-none
        border-2
        border-transparent
        focus:border-[#F4A300]
        focus:bg-white
        transition
    "

/>

                        <button

                            disabled={loading}

                            className="w-full mt-8 bg-[#F4A300] hover:bg-[#d98d00] text-black font-bold py-4 rounded-xl transition flex justify-center items-center gap-2"

                        >

                            {

                                loading

                                ?

                                "Creating Account..."

                                :

                                <>

                                    Create Account

                                    <ArrowRight size={20}/>

                                </>

                            }

                        </button>

                        <div className="text-center mt-8 text-gray-500">

                            Already have an account?

                            <button

                                type="button"

                                onClick={()=>navigate("/login")}

                                className="ml-2 text-[#F4A300] font-bold hover:underline"

                            >

                                Login

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}