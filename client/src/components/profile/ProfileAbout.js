import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    identities,
    keyWords,
    user: { name },
  },
}) => {
  return (
    <div class='profile-about bg-light p-2'>
      {bio && (
        <Fragment>
          <h2 class='text-primary'>{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
          <div class='line'></div>
        </Fragment>
      )}
      <h2 class='text-primary'>I identity as </h2>
      <div class='skills'>
        {identities.map((identity, index) => (
          <div key={index}>
            <span class='badge badge-pill badge-danger'>{identity}</span>
          </div>
        ))}
      </div>

      {/*  */}
      <div class='line'></div>

      <h2 class='text-primary'>My keywords</h2>
      <div class='skills'>
        {keyWords.map((words, index) => (
          <div key={index}>
            <span class='badge badge-pill badge-danger'>{words}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
