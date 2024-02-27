import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Navigate, Routes, useNavigate, Outlet } from 'react-router-dom';
import MainAdmin from './pages/admin/MainAdmin';
import Dashboard from './component/admin/Dashboard';
import Profile from './component/admin/Profile';
import Swal from 'sweetalert2';

function AdminPrivateRoute({ ...rest }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/checkingAuthenticated`).then(res => {
      if (res.status === 200) {
        setAuthenticated(true);
      }
      setloading(false);

    });

    return () => {
      setAuthenticated(false);
    };
  }, []);

  axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    if (err.response && err.response.status === 401) {
      navigate('/');
      Swal.fire("Unauthorized", err.response.data.message, "warning");
    }
    return Promise.reject(err);
  })

  if (loading) {
    return <h1>Loading ....</h1>
  }

  console.log(authenticated);
  return (
    <>
    { authenticated ? (
      <Routes>
        <Route
          path='/*'
          element={<MainAdmin />}
        >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    ) : (
      <Navigate to='/login' />
    )}
    </>
  );
}

export default AdminPrivateRoute;
