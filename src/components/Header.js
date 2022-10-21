import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Home</Link>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
        {
          user?.email && 
          <span>{user.email}</span>
        }
        {
          user?.email?
          <button onClick={handleSignOut} className="btn btn-sm uppercase btn-info">Log Out</button>
          :
          <button className='btn btn-sm uppercase btn-info'><Link to='/login'>Log In</Link></button>
          
        }
      </div>
    </div>
  );
};

export default Header;