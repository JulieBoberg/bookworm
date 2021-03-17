import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import SearchProfiles from "./SearchProfiles";




const SearchIdentities = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div class='bg-primary p'>
            {" "}
            <i className='fas fa-book'></i> Browse Book Reviewers{" "}
          </div>
         
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <SearchProfiles key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

SearchIdentities.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getProfiles })(SearchIdentities);
