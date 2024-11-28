import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LeftNavbar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [adminLevel, setAdminLevel] = useState(localStorage.getItem("admin"));
    const navigate = useNavigate();

    useEffect(() => {
        const updateAdminLevel = () => setAdminLevel(localStorage.getItem("admin"));
        window.addEventListener("storage", updateAdminLevel);
        return () => window.removeEventListener("storage", updateAdminLevel);
    }, []);

    useEffect(() => {
        if (adminLevel === null) {
            navigate("/login");
        }
    }, [adminLevel, navigate]);

    return (
        <div
            className={`fixed inset-y-0 left-0 z-20 w-64 pt-16 bg-gray-200 text-grey h-full p-6 shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
        >

            <button className="text-gray-100 md:hidden mb-4" onClick={onClose}>✕ Close</button>
            <ul className="space-y-4">
                <li>
                    <Link
                        to="/dashboard"
                        className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200"
                    >
                        <span className="ml-2">Dashboard</span>
                    </Link>
                </li>
                {adminLevel === "1" && (
                    <>
                        <li>
                            <Link
                                to="/signup"
                                className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                <span className="ml-2">Add Staff</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/users"
                                className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200"
                            >
                                <span className="ml-2">Staff Management</span>
                            </Link>
                        </li>
                    </>
                )}
                <li>
                    <Link
                        to="/view-booking"
                        className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition duration-200"
                    >
                        <span className="ml-2">Bookings</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LeftNavbar;
