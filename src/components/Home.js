import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Current Users Email</h1>
      <p className="py-6">{user?.email}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Home;