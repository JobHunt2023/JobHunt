import React from 'react'
import ProfileC1 from '../components/profilepage/ProfileC1'
import Activity from '../components/profilepage/Activity'
import { Link } from "react-router-dom";
import Skills from '../components/profilepage/Skills';
import Education from '../components/profilepage/Education';
import { Groups } from '../components/profilepage/Groups';

export const ProfilePageOne = () => {
  return (
    <div className='pt-44 pb-44'>   
    
     <ProfileC1 />
    <Activity />
    <Skills />
    <Education />
    <Link to='/groups'> <Groups />
    </Link>
    
    </div>
  )
}
