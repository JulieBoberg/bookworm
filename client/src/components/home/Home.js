import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Books from "./Books";
import SearchProfiles from "../search/SearchProfiles";
// import HomeIdentities from "./HomeIdentities";
// import KeyWords from "./KeyWords";
import {
  getProfiles,
  getAllIdentities,
  getAllKeyWords,
} from "../../actions/profile";

const Home = ({
  getProfiles,
  getAllIdentities,
  getAllKeyWords,
  profile: { profiles, profilesIdentities, profilesKeyWords, loading },
}) => {
  useEffect(() => {
    getProfiles();
    getAllIdentities();
    getAllKeyWords();
  }, [getProfiles, getAllIdentities, getAllKeyWords]);

  const [search, setSearch] = useState("");
  //   const [filter, setFilter] = useState([]);

  return (
    <div>
      {/* Start off with a greeting in a small background area at the top */}
      <div
        style={{ fontSize: "2em", textAlign: "center", paddingBottom: "1rem" }}
      >
        <h3>Welcome to BookWorm!</h3>
      </div>

      {/* Next is a selection of books people are talking about */}
      <div className='bg-primary p'>
        <h3>What Users are Buzzing About</h3>
      </div>
      <div className='home-grid '>
        <Books />
      </div>
      {/* <small className='form-text'>
        Buying books through these links supports this project!
      </small> */}
      <div className='bg-primary p'>
        <h3>Find Own Voices Reviewers</h3>
      </div>
      {/*Hopefully this is identities */}

      <div className='profiles my-1'>
        {profilesIdentities.length > 0 ? (
          profilesIdentities.map((identity, index) => (
            <button key={index} onClick={() => setSearch(identity)}>
              <div className='badge badge-pill badge-danger'>{identity}</div>
            </button>
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>

      <div>
        {search.length > 0 ? (
          profiles
            .filter((person) => person.identities.includes(search))
            .map((profile) => (
              <SearchProfiles key={profile._id} profile={profile} />
            ))
        ) : (
          <h4>Click to search</h4>
        )}
      </div>

      <div className='bg-primary p'>
        <h3>Find by Key Words</h3>
      </div>

      <div className='profiles my-1'>
        {profilesKeyWords.length > 0 ? (
          profilesKeyWords.map((words) => (
            <div className='badge badge-pill badge-danger'>{words}</div>
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
  getProfiles: PropTypes.func.isRequired,
  getAllIdentities: PropTypes.func.isRequired,
  getAllKeyWords: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getProfiles,
  getAllIdentities,
  getAllKeyWords,
})(Home);
