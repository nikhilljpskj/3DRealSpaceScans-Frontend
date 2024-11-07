import React, { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
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

      // If successful, redirect to login or dashboard
      navigate("/login"); // Change this to your actual dashboard or login path
    } catch (error: any) {
      // Handle signup error
      setError("Registration failed. Please check your details.");
    }
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-green-200 to-blue-300">
      <LeftNavbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 ml-64">
        <TopNavbar sidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className={`nc-PageSignUp ${className}`} data-nc-id="PageSignUp">
          <Helmet>
            <title>Add Staff</title>
          </Helmet>
          <div className="container mb-24 lg:mb-32">
            <h2 className="mt-32 mb-10 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
              Add Staff
            </h2>
            <div className="max-w-md mx-auto space-y-6 ">
              {/* FORM */}
              <form className="grid grid-cols-1 gap-6" onSubmit={handleSignUp}>
                {error && <div className="text-red-500">{error}</div>}
                <label className="block">
                  <span className="text-neutral-800 dark:text-neutral-200">Name</span>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-neutral-800 dark:text-neutral-200">Email address</span>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-neutral-800 dark:text-neutral-200">Mobile</span>
                  <Input
                    type="number"
                    placeholder="Enter your Mobile number"
                    className="mt-1"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </label>
                <label className="block">
                  <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                    Password
                  </span>
                  <Input 
                    type="password" 
                    placeholder="Enter your Password"
                    className="mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <ButtonPrimary type="submit">Create User</ButtonPrimary>
              </form>

              {/* ==== */}
              {/* <span className="block text-center text-neutral-700 dark:text-neutral-300">
                Already have an account? {` `}
                <Link to="/login">Sign in</Link>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;
