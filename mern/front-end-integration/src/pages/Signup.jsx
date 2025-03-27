import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:3000/user/signup", formData);
      
      console.log("Signup Response:", res.data); 

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000); 
      } else {
        setError("Signup successful, but no token received.");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error);
      setError(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-900 text-white">
      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-80" onSubmit={handleFormSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}

        <div className="flex flex-col space-y-3">
          <label htmlFor="username" className="text-sm">Username</label>
          <input
            className="p-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <label htmlFor="email" className="text-sm">Email</label>
          <input
            className="p-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password" className="text-sm">Password</label>
          <input
            className="p-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="off"
            required
          />

          <label htmlFor="role" className="text-sm">Role</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="p-2 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select Role</option>
            <option value="user">user</option>
            <option value="seller">seller</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full mt-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br 
          focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
}

export default Signup;
