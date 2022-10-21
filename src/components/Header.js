import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Home</Link>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        {
          user?.displayName && <span>{user.displayName}</span>
        }
      </div>
    </div>
  );
};

export default Header;