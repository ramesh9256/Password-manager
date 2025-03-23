import React, { useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({
    website: "",
    username: "",
    password: "",
  });
  const HandelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error sending data:", error);
    }
    alert("User Added Successfully");
  };

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Add User</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Website Input */}
          <div>
            <label htmlFor="website" className="block text-gray-600 font-semibold">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              onChange={HandelChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
              placeholder="Enter website link"
              required
            />
          </div>

          {/* Username Input */}
          <div>
            <label htmlFor="name" className="block text-gray-600 font-semibold">User Name</label>
            <input
              type="text"
              id="name" 
              name="username"
              
              onChange={HandelChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
              placeholder="Enter username"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-600 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              
              onChange={HandelChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-200"
              placeholder="Enter password"


            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
