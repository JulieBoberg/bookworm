import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Books from "./Books";
// import HomeIdentities from "./HomeIdentities";
import KeyWords from "./KeyWords";
import { getAllIdentities } from "../../actions/profile";

// SOmething needs to be imported in profiles i think

const Home = ({
  getAllIdentities,
  profile: { profiles, profilesIdentities, loading },
}) => {
  useEffect(() => {
    getAllIdentities();
  }, [getAllIdentities]);

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
      <div className='home-grid my-1'>
        <Books />
      </div>
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
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <KeyWords key={profile._id} profile={profile} />
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
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getAllIdentities })(Home);
