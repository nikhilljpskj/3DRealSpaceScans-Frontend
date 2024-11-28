import Label from "components/Label/Label";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountPage: React.FC = () => {
    const userId = localStorage.getItem("userId");
    const [userDetails, setUserDetails] = useState({
        updateFullName: '',
        updateEmail: '',
        updateMobile: '',
        updatePassword: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`/api/users/${userId}`);
                setUserDetails({
                    updateFullName: response.data.name,
                    updateEmail: response.data.email,
                    updateMobile: response.data.mobile,
                    updatePassword: '' // password should not be fetched, set it as empty
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [userId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`/api/users/${userId}`, {
                fullName: userDetails.updateFullName,
                email: userDetails.updateEmail,
                mobile: userDetails.updateMobile,
                password: userDetails.updatePassword, // Include the password if you want to update it
            });
            console.log(response.data.message); // You can show a success message to the user
            alert("Profile Updated Successfully");
            window.location.reload();
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
            <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 ml-64">
                <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="p-6 mt-16">
                    <h2 className="text-4xl font-semibold mb-6 text-gray-800">Profile</h2>
                    <div className="flex-grow max-w-3xl space-y-6 bg-white shadow-xl rounded-lg p-6">
                        <div>
                            <Label>Name</Label>
                            <Input className="mt-1.5 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200" name="updateFullName" value={userDetails.updateFullName} onChange={handleChange} />
                        </div>
                        <div>
                            <Label>Email</Label>
                            <Input className="mt-1.5 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200" name="updateEmail" value={userDetails.updateEmail} onChange={handleChange} />
                        </div>
                        <div>
                            <Label>Phone number</Label>
                            <Input className="mt-1.5 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200" name="updateMobile" value={userDetails.updateMobile} onChange={handleChange} />
                        </div>
                        <div>
                            <Label>Update Password</Label>
                            <Input className="mt-1.5 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200" name="updatePassword" type="password" value={userDetails.updatePassword} onChange={handleChange} />
                        </div>
                        <div className="pt-2">
                            <ButtonPrimary onClick={handleUpdate} className="bg-teal-500 hover:bg-teal-600 text-white">
                                Update Info
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
