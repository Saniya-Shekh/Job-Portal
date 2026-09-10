import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className='profile'>
      <Link to="/login"> Login </Link>
      <Link to="/schoolRegister"> Register </Link>
   
    </div>
  );
};

export default Profile;
