import React from "react";
import PropTypes from "prop-types";

const KeyWords = ({
  profile: {
    user: { _id },

    keyWords,
  },
}) => {
  return (
    <div>
      <ul>
        {keyWords.map((words, index) => (
          <li key={index} className='text-primary'>
            <span class='badge badge-pill badge-danger'>{words}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

KeyWords.propTypes = {
  profile: PropTypes.func.isRequired,
};
export default KeyWords;
