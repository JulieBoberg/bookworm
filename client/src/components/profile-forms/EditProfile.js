import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import PropTypes from "prop-types";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    publicName: "",
    brandName: "",
    website: "",
    locationState: "",
    locationCity: "",
    identities: "",
    keyWords: "",
    storyGraph: "",
    bio: "",
    blog: "",
    twitter: "",
    facebook: "",
    youtube: "",
    instagram: "",
  });

  const {
    publicName,
    brandName,
    website,
    locationState,
    locationCity,
    identities,
    keyWords,
    storyGraph,
    bio,
    twitter,
    facebook,
    youtube,
    instagram,
    blog,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      publicName: loading || !profile.publicName ? "" : profile.publicName,
      brandName: loading || !profile.brandName ? "" : profile.brandName,
      website: loading || !profile.website ? "" : profile.website,
      locationState:
        loading || !profile.locationState ? "" : profile.locationState,
      locationCity:
        loading || !profile.locationCity ? "" : profile.locationCity,
      storyGraph: loading || !profile.storyGraph ? "" : profile.storyGraph,

      identities:
        loading || !profile.identities ? "" : profile.identities.join(","),
      keyWords: loading || !profile.keyWords ? "" : profile.keyWords.join(","),

      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      blog: loading || !profile.social ? "" : profile.social.blog,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
    });
  }, [loading, getCurrentProfile]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 class='large text-primary'>Create Your Profile</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='publicName'
            value={publicName}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>What should people call you?</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Brand Name'
            name='brandName'
            value={brandName}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Optional</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='I identify as...'
            name='identities'
            value={identities}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Our unique backgrounds help us bring critical and needed
            perspectives to the book community. Tell us how you identify (race,
            ethnicity, gender & sexual identity, disability, etc). Be as specfic
            as you'd like. Please use comma separated values (eg. Latinx,
            Mexican, female, queer)
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Primary Website'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Could be your own or a company website{" "}
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='State'
            name='locationState'
            value={locationState}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>State (eg. California)</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='City'
            name='locationCity'
            value={locationCity}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>City (eg. San Francisco)</small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Up to 5 key words'
            name='keyWords'
            value={keyWords}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (eg. food, animals, own voices,
            aesthetic)
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='StoryGraph or Good Reads link'
            name='storyGraph'
            value={storyGraph}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>StoryGraph or Good Reads link</small>
        </div>

        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>Tell us a little about yourself</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i class='fas fa-globe fa-2x'></i>
              <input
                type='text'
                placeholder='Blog or website'
                name='blog'
                value={blog}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
