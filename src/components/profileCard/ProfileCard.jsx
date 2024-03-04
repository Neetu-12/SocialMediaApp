import React from 'react';
import './profileCard.css';
import Cover from "../../img/cover.jpg";
import Profile from "../../img/myPro1.jpeg";

const ProfileCard = () => {
    const ProfilePage = true;
    console.log(ProfilePage);
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt='image not rendering !' />
                <img src={Profile} alt='image not rendering !' />
            </div>
            <div className="ProfileName">
                <span>Neetu Sah</span>
                <span>Junior Software Developer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,890</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                    {ProfilePage && (
                        <>
                            <div className="vl"></div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {
                ProfilePage ? '' : (<span>
                    My Profile
                </span>)
            }
        </div>
    )
}

export default ProfileCard