import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Orders = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="mockup-window border bg-primary mt-14">
        <div className="flex justify-center px-4 py-16 bg-success">Hello! {
        user?.email? 
         <span> {user.email}</span>
        :
         <span>No User Found</span>
        }</div>
    </div>
  );
};

export default Orders;