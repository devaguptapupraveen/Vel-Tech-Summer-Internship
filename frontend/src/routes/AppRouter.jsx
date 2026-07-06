import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Preview from "../pages/Preview/Preview";
import Thinking from "../pages/Thinking/Thinking";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Landing />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/thinking"
                    element={
                        <ProtectedRoute>
                            <Thinking />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/preview"
                    element={
                        <ProtectedRoute>
                            <Preview />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}