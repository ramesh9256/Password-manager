import React, { useEffect, useState } from "react";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(users);
    
    fetch("https://password-manager-porn.onrender.com/getUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center h-[80vh] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          🔐 Saved Users
        </h1>

        {users.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="space-y-4">
            {users.map((user, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition-all"
              >
                <p className="text-lg font-semibold text-gray-800">
                  🌍 Website: <span className="text-blue-600">{user.website}</span>
                </p>
                <p className="text-gray-700">
                  👤 Username: <span className="font-medium">{user.username}</span>
                </p>
                <p className="text-gray-700">
                  🔑 Password: <span className="font-medium">{user.password}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUsers;
