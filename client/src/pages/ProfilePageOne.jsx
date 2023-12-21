import React from 'react'
import ProfileC1 from '../components/profilepage/ProfileC1'
import Activity from '../components/profilepage/Activity'
import { Link } from "react-router-dom";

export const ProfilePageOne = () => {
  return (
    <div className='pt-44 pb-44'>   
    <Link to='/groups'> groups
    </Link>
     <ProfileC1 />
    <Activity />
    </div>
  )
}
