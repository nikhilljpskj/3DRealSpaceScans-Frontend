import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";
import Input from "shared/Input/Input";
import { useNavigate } from "react-router-dom";

interface User {
    id: number;
    name: string;
    email: string;
    mobile: string;
    password?: string; // To store the new password for update
}

const UsersList: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("/api/users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handlePasswordChange = (id: number, newPassword: string) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, password: newPassword } : user
        ));
    };

    const handleUpdate = async (userId: number) => {
        const user = users.find(u => u.id === userId);
        if (!user || !user.password) return;

        const confirmUpdate = window.confirm("Are you sure you want to update this user's details?");
        if (!confirmUpdate) return;

        try {
            await axios.put(`/api/users/${userId}`, {
                fullName: user.name,
                email: user.email,
                mobile: user.mobile,
                password: user.password,
            });
            alert("User details updated successfully");
        } catch (error) {
            console.error("Error updating user details:", error);
        }
    };

    const handleRemove = async (userId: number) => {
        const confirmRemove = window.confirm("Are you sure you want to remove this user?");
        if (!confirmRemove) return;

        try {
            await axios.delete(`/api/users/deleteuser/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error("Error removing user:", error);
        }
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 ml-64">
                <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="p-8 mt-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">User List</h2>
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        <table className="min-w-full border-collapse border border-gray-200 text-left text-sm">
                            <thead className="bg-gray-100">
                                <tr className="text-gray-700 uppercase text-xs font-medium tracking-wider">
                                    <th className="border px-4 py-3">Name</th>
                                    <th className="border px-4 py-3">Email</th>
                                    <th className="border px-4 py-3">Phone Number</th>
                                    <th className="border px-4 py-3">Update Password</th>
                                    <th className="border px-4 py-3">Update</th>
                                    <th className="border px-4 py-3">Remove</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="border px-4 py-3">{user.name}</td>
                                        <td className="border px-4 py-3">{user.email}</td>
                                        <td className="border px-4 py-3">{user.mobile}</td>
                                        <td className="border px-4 py-3">
                                            <Input
                                                className="mt-1.5"
                                                type="password"
                                                value={user.password || ""}
                                                onChange={(e) => handlePasswordChange(user.id, e.target.value)}
                                            />
                                        </td>
                                        <td className="border px-4 py-3">
                                            <button
                                                className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150"
                                                onClick={() => handleUpdate(user.id)}
                                            >
                                                Update
                                            </button>
                                        </td>
                                        <td className="border px-4 py-3">
                                            <button
                                                className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition duration-150"
                                                onClick={() => handleRemove(user.id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {users.length === 0 && (
                            <div className="py-8 text-center text-gray-500">
                                No users found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
