import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

export default function DashboardLayout({ children }) {

    return (

        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                background: "#0b1120"
            }}
        >

            <Sidebar />

            <div
                style={{
                    flex: 1
                }}
            >

                <Navbar />

                <main className="content">

                    {children}

                </main>

            </div>

        </div>

    );

}