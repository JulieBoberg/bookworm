import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Books from "./Books";
import SearchProfiles from "../search/SearchProfiles";

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


  return (
    <div>
    
      <div
        style={{ fontSize: "2em", textAlign: "center", paddingBottom: "1rem" }}
      >
        <h3>Welcome to Book Worm!</h3>
      </div>

      <div className='bg-primary p'>
        <h3>What Users are Buzzing About</h3>
      </div>
      <div className='home-grid '>
        <Books />
      </div>
      
      <div className='bg-primary p'>
        <h3>Find Own Voices Reviewers</h3>
      </div>

      {/*identities */}

      <div className='profiles my-1'>
        {profilesIdentities.length > 0 ? (
          profilesIdentities.map((identity, index) => (
            <button
              className='badge badge-pill badge-dark'
              key={index}
              onClick={() => setSearch(identity)}
            >
              <div>{identity}</div>
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

      {/* Keywords */}

      <div className='bg-primary p'>
        <h3>Find by Key Words</h3>
      </div>

      <div className='profiles my-1'>
        {profilesKeyWords.length > 0 ? (
          profilesKeyWords.map((words, index) => (
            <button
              className='badge badge-pill badge-dark'
              key={index}
              onClick={() => setSearch(words)}
            >
              <div>{words}</div>
            </button>
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>

      <div>
        {search.length > 0 ? (
          profiles
            .filter((person) => person.keyWords.includes(search))
            .map((profile) => (
              <SearchProfiles key={profile._id} profile={profile} />
            ))
        ) : (
          <h4>Click to search</h4>
        )}
      </div>
    

      {/* I want to eventually break this down by identities, keywords, location, and book genre preferences with word clouds that have search functionality.  */}
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
