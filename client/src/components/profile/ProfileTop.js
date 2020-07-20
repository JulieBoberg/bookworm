import React from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    publicName,
    brandName,
    locationState,
    locationCity,
    website,
    social,
    user: { avatar },
    //deleted {name}
  },
}) => {
  return (
    <div className='profile-top'>
      <img className='round-img my-1' src={avatar} alt='' />
      <div className='bg-primary'>
        <p className='lead'>
          {publicName}{" "}
          {brandName && (
            <span>
              <i> of {brandName}</i>
            </span>
          )}
        </p>
        <p>
          {locationCity && <span> {locationCity}</span>}
          {locationState && <span>, {locationState}</span>}
        </p>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
