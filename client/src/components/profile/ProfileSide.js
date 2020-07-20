import React from "react";
import PropTypes from "prop-types";

const ProfileSide = ({
  profile: {
    identities,
    keyWords,
    user: { name },
  },
}) => {
  return (
    <div class='profile-edu bg-light p-2'>
      <h2 class='text-primary'>I identity as </h2>
      <div class='skills'>
        {identities.map((identity, index) => (
          <div key={index}>
            <span class='badge badge-pill badge-danger'>{identity}</span>
          </div>
        ))}
      </div>
      <div class='line'></div>
      <h2 class='text-primary'>My keywords</h2>
      <div class='skills'>
        {keyWords.map((words, index) => (
          <div key={index}>
            <span class='badge badge-pill badge-danger'>{words}</span>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

ProfileSide.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileSide;
