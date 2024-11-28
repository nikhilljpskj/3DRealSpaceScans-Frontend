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
    contactMethod: string;
    company: string;
    serviceLocation: string;
    accessInstructions: string;
    scanType: string;
    preferredDate: string;
    backupDate: string;
    purpose: string;
    projectScope: string;
    numberOfRooms: number;
    outputFormats: string;
    additionalServices: string;
    completionDate: string;
    specialInstructions: string;
    budgetRange: string;
    projectTimeline: string;
    deliveryPreferences: string;
    termsAccepted: boolean;
    privacyConsent: boolean;
    showcaseConsent: boolean;
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
        return <p className="text-center text-xl text-gray-700">Loading booking details...</p>;
    }

    return (
        <div className="flex min-h-screen">
            <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 ml-64">
                <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="flex flex-col p-8 mt-20 space-y-6">
                    <h1 className="text-3xl font-bold text-gray-800">Booking Details</h1>
                    <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Booking Details */}
                            {[
                                { label: 'Name', value: booking.fullName },
                                { label: 'Email', value: booking.email },
                                { label: 'Phone', value: booking.phone },
                                { label: 'Contact Method', value: booking.contactMethod },
                                { label: 'Company', value: booking.company },
                                { label: 'Service Location', value: extractCoordinates(booking.serviceLocation) ? (
                                    <a
                                        href={extractCoordinates(booking.serviceLocation)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-500 hover:underline"
                                    >
                                        View Location
                                    </a>
                                ) : booking.serviceLocation },
                                { label: 'Access Instructions', value: booking.accessInstructions },
                                { label: 'Scan Type', value: booking.scanType },
                                { label: 'Preferred Date', value: new Date(booking.preferredDate).toLocaleDateString() },
                                { label: 'Backup Date', value: new Date(booking.backupDate).toLocaleDateString() },
                                { label: 'Purpose', value: booking.purpose },
                                { label: 'Project Scope', value: booking.projectScope },
                                { label: 'Number of Rooms', value: booking.numberOfRooms },
                                { label: 'Output Formats', value: booking.outputFormats },
                                { label: 'Additional Services', value: booking.additionalServices },
                                { label: 'Completion Date', value: new Date(booking.completionDate).toLocaleDateString() },
                                { label: 'Special Instructions', value: booking.specialInstructions },
                                { label: 'Budget Range', value: booking.budgetRange },
                                { label: 'Project Timeline', value: booking.projectTimeline },
                                { label: 'Delivery Preferences', value: booking.deliveryPreferences },
                                { label: 'Terms Accepted', value: booking.termsAccepted ? 'Yes' : 'No' },
                                { label: 'Privacy Consent', value: booking.privacyConsent ? 'Yes' : 'No' },
                                { label: 'Showcase Consent', value: booking.showcaseConsent ? 'Yes' : 'No' },
                            ].map((detail, index) => (
                                <div key={index} className="flex flex-col space-y-1">
                                    <label className="font-semibold text-gray-700">{detail.label}:</label>
                                    <p className="text-gray-800">{detail.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Files Section */}
                    <h2 className="text-2xl font-semibold text-gray-800 mt-10">Uploaded Files</h2>
                    {booking.files && booking.files.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {booking.files.map((file, index) => (
                                <div key={index} className="flex justify-between items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-lg transition-all">
                                    <span className="text-gray-800">{file.filename}</span>
                                    <button
                                        onClick={() => handleDownload(file.filePath)}
                                        className="text-teal-500 hover:underline font-semibold"
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
