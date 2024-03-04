import React from 'react';
import './profile.css';
import ProfileLeft from '../../components/profile/ProfileLeft';
import ProfileCard from '../../components/profileCard/ProfileCard';
import PostSide from '../../components/postSide/PostSide';
import RightSide from '../../components/rightSide/RightSide';


const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  )
}

export default Profile