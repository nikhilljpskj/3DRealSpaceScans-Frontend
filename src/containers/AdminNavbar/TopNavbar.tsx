import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import axios from "axios";

interface TopNavbarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate();
    const email = localStorage.getItem("email");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifications, setNotifications] = useState<string[]>([]);
    const [notificationCount, setNotificationCount] = useState(0);
    const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    useEffect(() => {
        const fetchPendingBookings = async () => {
            try {
                const response = await axios.get(`/api/booking/pending`);
                setNotificationCount(response.data.ptotalCount);
                const pendingNames = response.data.pendingBookings.map((booking: { fullName: string }) => booking.fullName);
                setNotifications(pendingNames);
            } catch (error) {
                console.error("Error fetching pending bookings:", error);
            }
        };

        fetchPendingBookings();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setNotificationDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            {/* Left Navbar */}
            <LeftNavbar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Top Navbar */}
            <div className="bg-white-100 text-gray-800 p-4 flex justify-between items-center fixed top-0 left-60 right-0 z-10 shadow-md">
                <button className="md:hidden text-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className="text-xl font-semibold tracking-wide ml-4">3DRealSpace Scans</div>

                {/* Notification Bell */}
                <div className="relative ml-auto" ref={dropdownRef}>
                    <button
                        className="flex items-center p-2"
                        onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                    >
                        <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zM18 10c0-3.313-2.687-6-6-6S6 6.687 6 10v4H4v2h16v-2h-2v-4z" />
                        </svg>
                        {notificationCount > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">{notificationCount}</span>
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    {notificationDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-20">
                            {notifications.length > 0 ? (
                                notifications.map((name, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 cursor-pointer"
                                        onClick={() => navigate("/view-booking")}
                                    >
                                        New booking enquiry from {name}
                                    </div>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-500 text-sm">No new enquiries</div>
                            )}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg focus:outline-none"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <span className="truncate">{email}</span>
                        <svg
                            className={`transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"} w-4 h-4`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20">
                            <button
                                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150"
                                onClick={() => {
                                    setDropdownOpen(false);
                                    navigate("/account");
                                }}
                            >
                                Profile
                            </button>
                            <button
                                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-150"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TopNavbar;
