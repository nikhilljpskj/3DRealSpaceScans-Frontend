import React, { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LeftNavbar from "containers/AdminNavbar/LeftNavbar"; // Adjust the import path as necessary
import TopNavbar from "containers/AdminNavbar/TopNavbar"; // Adjust the import path as necessary

export interface PageSignUpProps {
  className?: string;
}

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        mobile,
        password,
      });

      navigate("/login"); // Redirect on success
    } catch (error: any) {
      setError("Registration failed. Please check your details.");
    }
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 ml-64">
        <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`nc-PageSignUp ${className}`} data-nc-id="PageSignUp">
          <Helmet>
            <title>Add Staff</title>
          </Helmet>
          <div className="container py-24">
            <h2 className="text-center text-4xl font-extrabold text-gray-900">
              Add New Staff
            </h2>
            <p className="text-center text-gray-500 mt-2">
              Fill out the details below to add a new team member.
            </p>
            <div className="mt-10 max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
              {error && (
                <div className="text-red-600 bg-red-100 border border-red-200 rounded p-3 mb-6">
                  {error}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSignUp}>
                <label className="block">
                  <span className="text-gray-700">Full Name</span>
                  <Input
                    type="text"
                    placeholder="Enter full name"
                    className="mt-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Email Address</span>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Mobile Number</span>
                  <Input
                    type="number"
                    placeholder="Enter mobile number"
                    className="mt-2"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Password</span>
                  <Input
                    type="password"
                    placeholder="Enter a secure password"
                    className="mt-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <ButtonPrimary
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition">
                  Create User
                </ButtonPrimary>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
