import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    brandName,
    locationState,
    locationCity,
    identities,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {brandName} {locationState && <span> at {locationState}</span>}
          {locationCity}
        </p>

        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {identities.slice(0, 4).map((identity, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {identity}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.func.isRequired,
};

export default ProfileItem;
