import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";

interface Booking {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    preferredDate: string;
    serviceLocation: string;
    status: number;
}

const ViewBooking: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>(''); // New state for search term
    const itemsPerPage = 6;
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/api/booking/viewbooking');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);

    const updateBookingStatus = async (bookingId: number) => {
        try {
            await axios.put(`/api/booking/${bookingId}/status`, { status: 1 });
        } catch (error) {
            console.error('Error updating booking status:', error);
        }
    };

    const handleViewButtonClick = (bookingId: number) => {
        updateBookingStatus(bookingId);
        navigate(`/booking-details/${bookingId}`);
    };

    const extractCoordinates = (url: string): string | undefined => {
        const match = url.match(/@?([\d.]+),([\d.]+)/);
        return match ? `https://www.google.com/maps?q=${match[1]},${match[2]}` : undefined;
    };

    const getStatusTextAndStyle = (status: number) => {
        switch (status) {
            case 0:
                return { text: 'Pending', style: 'bg-yellow-400 text-white' };
            case 1:
                return { text: 'Viewed', style: 'bg-green-400 text-white' };
            default:
                return { text: 'Unknown', style: 'bg-gray-300 text-black' };
        }
    };

    const indexOfLastBooking = currentPage * itemsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;

    // Filter bookings based on the search term
    const filteredBookings = bookings.filter(booking =>
        booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.phone.includes(searchTerm)
    );

    const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);
    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 ml-64">
                <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="p-8 mt-16">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-semibold text-gray-800">All Bookings</h1>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border rounded-full px-4 py-2 w-64 text-gray-700"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-3 px-6 text-left font-semibold">Name</th>
                                    <th className="py-3 px-6 text-left font-semibold">Email</th>
                                    <th className="py-3 px-6 text-left font-semibold">Phone</th>
                                    <th className="py-3 px-6 text-left font-semibold">Preferred Date</th>
                                    <th className="py-3 px-6 text-left font-semibold">Service Location</th>
                                    <th className="py-3 px-6 text-left font-semibold">Status</th>
                                    <th className="py-3 px-6 text-left font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentBookings.map((booking) => {
                                    const { text, style } = getStatusTextAndStyle(booking.status);
                                    return (
                                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                                            <td className="py-2 px-6">{booking.fullName}</td>
                                            <td className="py-2 px-6">{booking.email}</td>
                                            <td className="py-2 px-6">{booking.phone}</td>
                                            <td className="py-2 px-6">{new Date(booking.preferredDate).toLocaleDateString()}</td>
                                            <td className="py-2 px-6">
                                                {extractCoordinates(booking.serviceLocation) ? (
                                                    <a
                                                        href={extractCoordinates(booking.serviceLocation)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 underline"
                                                    >
                                                        Location
                                                    </a>
                                                ) : (
                                                    <span>{booking.serviceLocation}</span>
                                                )}
                                            </td>
                                            <td className={`py-2 px-6 text-center ${style}`}>
                                                {text}
                                            </td>
                                            <td className="py-2 px-6">
                                                <button
                                                    onClick={() => handleViewButtonClick(booking.id)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-150"
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {bookings.length === 0 && (
                            <div className="py-8 text-center text-gray-600">
                                No bookings available.
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-150"
                        >
                            Previous
                        </button>
                        <span className="self-center">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-150"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBooking;
