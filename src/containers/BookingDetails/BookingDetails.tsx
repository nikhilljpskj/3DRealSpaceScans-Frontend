import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";

interface FileDetail {
    filePath: string;
    fileType: string;
    filename: string;
}

interface BookingDetail {
    fullName: string;
    email: string;
    phone: string;
    contactMethod: string;  // New field
    company: string;        // New field
    serviceLocation: string;
    accessInstructions: string; // New field
    scanType: string;       // New field
    preferredDate: string;
    backupDate: string;     // New field
    purpose: string;        // New field
    projectScope: string;   // New field
    numberOfRooms: number;  // New field
    outputFormats: string;   // New field
    additionalServices: string; // New field
    completionDate: string;  // New field
    specialInstructions: string; // New field
    budgetRange: string;     // New field
    projectTimeline: string; // New field
    deliveryPreferences: string; // New field
    termsAccepted: boolean;   // New field
    privacyConsent: boolean;   // New field
    showcaseConsent: boolean;  // New field
    files: FileDetail[];
}

const BookingDetails: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { id } = useParams<{ id: string }>();
    const [booking, setBooking] = useState<BookingDetail | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchBookingDetails = async () => {
            try {
                const response = await axios.get(`/api/booking/bookingdetails/${id}`);
                setBooking(response.data);
            } catch (error) {
                console.error('Error fetching booking details:', error);
            }
        };
        fetchBookingDetails();
    }, [id]);

    const handleDownload = async (filePath: string) => {
        try {
            const response = await axios.get(`/api/files/download/${filePath.split('/').pop()}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filePath.split('/').pop()!);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };

    const extractCoordinates = (url: string): string | undefined => {
        const match = url.match(/@?([\d.]+),([\d.]+)/);
        return match ? `https://www.google.com/maps?q=${match[1]},${match[2]}` : undefined;
    };

    if (!booking) {
        return <p className="text-center">Loading booking details...</p>;
    }

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-green-200 to-blue-300">
            <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 ml-64">
                <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="flex flex-col p-12 mt-20">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">Booking Details</h1>
                    <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Name:</label>
                                <p className="text-gray-800">{booking.fullName}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Email:</label>
                                <p className="text-gray-800">{booking.email}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Phone:</label>
                                <p className="text-gray-800">{booking.phone}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Contact Method:</label>
                                <p className="text-gray-800">{booking.contactMethod}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Company:</label>
                                <p className="text-gray-800">{booking.company}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Service Location:</label>
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
                                    <p className="text-gray-800">{booking.serviceLocation}</p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Access Instructions:</label>
                                <p className="text-gray-800">{booking.accessInstructions}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Scan Type:</label>
                                <p className="text-gray-800">{booking.scanType}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Preferred Date:</label>
                                <p className="text-gray-800">{new Date(booking.preferredDate).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Backup Date:</label>
                                <p className="text-gray-800">{new Date(booking.backupDate).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Purpose:</label>
                                <p className="text-gray-800">{booking.purpose}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Project Scope:</label>
                                <p className="text-gray-800">{booking.projectScope}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Number of Rooms:</label>
                                <p className="text-gray-800">{booking.numberOfRooms}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Output Formats:</label>
                                <p className="text-gray-800">{booking.outputFormats}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Additional Services:</label>
                                <p className="text-gray-800">{booking.additionalServices}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Completion Date:</label>
                                <p className="text-gray-800">{new Date(booking.completionDate).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Special Instructions:</label>
                                <p className="text-gray-800">{booking.specialInstructions}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Budget Range:</label>
                                <p className="text-gray-800">{booking.budgetRange}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Project Timeline:</label>
                                <p className="text-gray-800">{booking.projectTimeline}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Delivery Preferences:</label>
                                <p className="text-gray-800">{booking.deliveryPreferences}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Terms Accepted:</label>
                                <p className="text-gray-800">{booking.termsAccepted ? 'Yes' : 'No'}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Privacy Consent:</label>
                                <p className="text-gray-800">{booking.privacyConsent ? 'Yes' : 'No'}</p>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-600">Showcase Consent:</label>
                                <p className="text-gray-800">{booking.showcaseConsent ? 'Yes' : 'No'}</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Uploaded Files</h2>
                    {booking.files && booking.files.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {booking.files.map((file, index) => (
                                <div key={index} className="flex justify-between items-center border p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="text-gray-800">{file.filename}</span>
                                    <button
                                        onClick={() => handleDownload(file.filePath)}
                                        className="text-blue-500 hover:underline font-semibold"
                                    >
                                        Download
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No uploaded files available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;
