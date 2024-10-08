import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({email}) => {
  const { user } = useAuth();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState();
  const [totaluserInfo, setTotaluserInfo] = useState();
  //const { email, password } = location.state || {};
  const courseData = useLoaderData();
  

useEffect(() => {
  fetch(`https://task-server-fawn.vercel.app/user/${user?.email}`)
    .then((res) => res.json())
    .then((data) => setUserInfo(data));
}, [user]);

useEffect(() => {
  fetch(`https://task-server-fawn.vercel.app/users`)
    .then((res) => res.json())
    .then((data) => setTotaluserInfo(data));
}, [user]);

console.log(courseData);

return (
  <div className="min-h-screen bg-gray-100">
      <div className="dashboard flex flex-col items-center justify-center py-1">
        <div className="flex flex-col md:flex-row gap-2 w-full max-w-4xl px-4 justify-evenly">
          
          <div className="card w-full md:w-1/3 h-auto bg-white shadow-xl rounded-lg p-6">
            <h1 className="text-xl font-bold text-center mb-4">Welcome to Your Dashboard</h1>
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
              <img src={user?.photoURL || "/placeholder.jpg"} alt="profile picture" className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <p className="text-xl mb-2">
                <span className="font-semibold">Name:</span> {userInfo?.name || "User"}
              </p>
              <p className="text-xl mb-2">
                <span className="font-semibold">Email:</span> {userInfo?.email}
              </p>
            </div>
            <div className="card-actions justify-center mt-6">
              <Link to={`/dashboard/profile/edit/${userInfo?._id}`} className="btn btn-neutral btn-md">
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Course Info Card */}
          <div className="card w-full md:w-1/3 h-auto bg-gradient-to-r from-white to-gray-200 shadow-2xl rounded-lg p-6 flex flex-col justify-center">
            <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
              Products Available: <span className="text-blue-600">{courseData?.length}</span>
            </h1>
            <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
              Total Users: <span className="text-green-600">{totaluserInfo?.length}</span>
            </h1>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="w-full max-w-4xl px-4 mt-10">
          <ResponsiveContainer width="80%" height={200}>
            <BarChart data={courseData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" tickFormatter={(title) => title.slice(0, 6)} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
);
};

export default Dashboard;
