import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    genre,
    social,
    website,

    user: { name },
  },
}) => {
  return (
    <div class='profile-exp  p-2'>
      {bio && (
        <Fragment>
          <h2 class='text-primary'>{name.trim().split(" ")[0]}'s Bio</h2>
          <p>{bio}</p>
          <div class='line'></div>
        </Fragment>
      )}

      {genre && (
        <Fragment>
          <h2 class='text-primary'>I like to read</h2>
          <div>
            {genre.map((g, index) => (
              <div key={index}>
                <span class='badge badge-pill badge-dark'>{g}</span>
              </div>
            ))}
          </div>
        </Fragment>
      )}

      {website && (
        <Fragment>
          <h2 class='text-primary'>Primary</h2>

          {/* Make this a clickable link */}

          <p>
            The place I'm most active online is<span> {website}</span>{" "}
          </p>
        </Fragment>
      )}

      <div className='icons my-1'>
        {social && social.blog && (
          <a href={social.blog} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x'></i>
          </a>
        )}

        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x'></i>
          </a>
        )}

        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x'></i>
          </a>
        )}

        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x'></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x'></i>
          </a>
        )}
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
