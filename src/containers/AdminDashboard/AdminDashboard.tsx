import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [pendingCount, setPendingCount] = useState(0);
    const [allCount, setAllCount] = useState(0);
    const [pendingPage, setPendingPage] = useState(1);
    const [allPage, setAllPage] = useState(1);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchPendingBookings = async () => {
            try {
                const response = await axios.get(`/api/booking/pending?page=${pendingPage}`);
                setPendingCount(response.data.ptotalCount);
            } catch (error) {
                console.error('Error fetching pending bookings:', error);
            }
        };
        fetchPendingBookings();
    }, [pendingPage]);

    useEffect(() => {
        const fetchAllBookings = async () => {
            try {
                const response = await axios.get(`/api/booking/all?page=${allPage}`);
                setAllCount(response.data.atotalCount);
            } catch (error) {
                console.error('Error fetching all bookings:', error);
            }
        };
        fetchAllBookings();
    }, [allPage]);

    // Chart data
    const barChartData = {
        labels: ["Pending Bookings", "Total Bookings", "Viewed Bookings"],
        datasets: [
            {
                label: "Bookings Count",
                data: [pendingCount, allCount, pendingCount],
                backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(250, 212, 205, 0.5)"],
            },
        ],
    };

    const pieChartData = {
        labels: ["Pending Bookings", "Viewed Bookings"],
        datasets: [
            {
                data: [pendingCount, allCount - pendingCount],
                backgroundColor: ["#36A2EB", "#FF6384"],
            },
        ],
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-green-200 to-blue-300">
            <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 ml-64"> {/* Adjusted margin-left */}
                <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="p-8 space-y-6"> {/* Adjusted padding and removed extra margins */}
                    <header className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pending Bookings Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                                Pending Bookings 
                                <span className="bg-red-500 text-white rounded-full px-3 py-1 ml-2">
                                    {pendingCount}
                                </span>
                            </h3>
                        </div>

                        {/* All Bookings Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                                All Bookings 
                                <span className="bg-red-500 text-white rounded-full px-3 py-1 ml-2">
                                    {allCount}
                                </span>
                            </h3>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Bar Chart */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 h-[30rem] flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold mb-4">Bookings Statistics</h3>
                            <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: true }} height={250} />
                        </div>

                        {/* Pie Chart */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 h-[30rem] flex flex-col items-center justify-center">
                            <h3 className="text-lg font-semibold mb-4">Bookings Distribution</h3>
                            <div className="h-full w-full">
                                <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
