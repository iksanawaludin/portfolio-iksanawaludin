import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/api/profile")
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full transform transition duration-500 hover:scale-105">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Halo! 👋
          </h1>
          <p className="text-gray-600 text-center">My Portfolio Bruhh....</p>
        </div>
        <div className="mt-6">
  <div className="flex justify-between border-b pb-2">
    <span className="font-semibold text-gray-700">Nama:</span>
    <span className="text-gray-900">Iksan Awaludin</span>
  </div>
  <div className="flex justify-between border-b pb-2 mt-2">
    <span className="font-semibold text-gray-700">NIM:</span>
    <span className="text-gray-900">123456789</span>
  </div>
</div>

      </div>
    </div>
  );
}

export default App;
