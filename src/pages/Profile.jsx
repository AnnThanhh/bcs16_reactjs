import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/cookie";
import { http } from "../utils/interceptor";
const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const getProfileApi = async () => {
    try {
      // const res = await axios({
      //   url: "https://apistore.cybersoft.edu.vn/api/Users/getProfile",
      //   method: "POST",
      //   headers: {
      //     Authorization: getCookie("accessToken"),
      //   },
      // });
      const res = await http.post("/api/Users/getProfile");

      console.log(res.data.content);
      setUser(res.data.content);
    } catch (error) {
      //thất bại thì sẽ điều hướng về trang login
      alert("đăng nhập để vào profile");
      navigate("/login");
    }
  };
  useEffect(() => {
    getProfileApi();
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      {/* Header */}
      <div className="flex items-center space-x-6 mb-6">
        <img
          className="w-24 h-24 rounded-full border object-cover"
          src={user?.avatar}
          alt="Avatar"
        />
        <div>
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
        <div>
          <p className="text-gray-400">Phone</p>
          <p className="font-medium">{user?.phone}</p>
        </div>
        <div>
          <p className="text-gray-400">Gender</p>
          <p className="font-medium">{user?.gender ? "Male" : "Female"}</p>
        </div>
        <div>
          <p className="text-gray-400">Facebook ID</p>
          <p className="font-medium text-gray-500 italic">
            {user?.facebookId ? user?.facebookId : "No linked account"}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Account Status</p>
          <p className="font-medium">{user?.deleted ? "Deleted" : "Active"}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition">
          View Orders
        </button>
      </div>

      {/* Order History */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Order History
        </h3>
        {user?.ordersHistory.length === 0 ? (
          <div className="text-gray-500 italic">You have no orders yet.</div>
        ) : (
          <ul className="list-disc pl-5 text-gray-700">
            {user?.ordersHistory.map((order, idx) => (
              <li key={idx}>{order}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
