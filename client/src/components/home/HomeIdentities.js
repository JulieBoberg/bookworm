import React from "react";
import PropTypes from "prop-types";

const HomeIdentities = ({
  profile: {
    user: { _id },

    identities,
  },
}) => {
  return (
    <div>
      <ul>
        {identities.map((identity, index) => ( 
          <li key={index} className='text-primary'>
          
            <span class='badge badge-pill badge-danger'>{identity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

HomeIdentities.propTypes = {
  profile: PropTypes.func.isRequired,
};
export default HomeIdentities;
