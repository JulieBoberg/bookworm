import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Books from "./Books";
// import HomeIdentities from "./HomeIdentities";
// import KeyWords from "./KeyWords";
import { getAllIdentities, getAllKeyWords } from "../../actions/profile";



const Home = ({
  getAllIdentities,
  getAllKeyWords,
  profile: { profiles, profilesIdentities, profilesKeyWords, loading },
}) => {
  useEffect(() => {
    getAllIdentities();
    getAllKeyWords();
  }, [getAllIdentities, getAllKeyWords]);

  return (
    <div>
      {/* Start off with a greeting in a small background area at the top */}
      <div
        style={{ fontSize: "2em", textAlign: "center", paddingBottom: "1rem" }}
      >
        <h3>Welcome to BookWorm!</h3>
      </div>

      {/* Next is a selection of books people are talking about */}
      <div class='bg-primary p'>
        <h3>What Users are Buzzing About</h3>
      </div>
      <div className='home-grid '>
        <Books />
      </div>
      {/* <small className='form-text'>
        Buying books through these links supports this project!
      </small> */}
      <div class='bg-primary p'>
        <h3>Find Own Voices Reviewers</h3>
      </div>
      {/*Hopefully this is identities */}
      <div className='profiles my-1'>
        {profilesIdentities.length > 0 ? (
          profilesIdentities.map((identity) => (
            <div class='badge badge-pill badge-danger'>{identity}</div>
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>

      {/*  */}

      <div class='bg-primary p'>
        <h3>Find by Key Words</h3>
      </div>

      <div className='profiles my-1'>
        {profilesKeyWords.length > 0 ? (
          profilesKeyWords.map((words) => (
            <div class='badge badge-pill badge-danger'>{words}</div>
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>
      {/* A contribute button */}

      {/* Then I break it down by identities, keywords, location, and genre with word clouds that have search functionality.  */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

Home.propTypes = {
  getAllIdentities: PropTypes.func.isRequired,
  getAllKeyWords: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllIdentities, getAllKeyWords })(
  Home
);
