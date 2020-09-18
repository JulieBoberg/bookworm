const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Posts = require("../../models/Posts");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile
// @desc     Create or update user profile
// @access   Private

router.post("/", [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    publicName,
    brandName,
    website,
    locationState,
    locationCity,
    genre,
    identities,
    keyWords,
    storyGraph,
    bio,
    twitter,
    facebook,
    youtube,
    instagram,
    blog,
  } = req.body;

  //Build Profile Object
  const profileFields = {};
  if (publicName) profileFields.publicName = publicName;
  if (brandName) profileFields.brandName = brandName;
  if (website) profileFields.website = website;
  if (locationState) profileFields.locationState = locationState;
  if (locationCity) profileFields.locationCity = locationCity;
  if (storyGraph) profileFields.storyGraph = storyGraph;
  if (bio) profileFields.bio = bio;
  if (identities) {
    profileFields.identities = identities
      .split(",")
      .map((identity) => identity.trim());
  }
  if (genre) {
    profileFields.genre = genre.split(",").map((g) => g.trim());
  }
  if (keyWords) {
    profileFields.keyWords = keyWords.split(",").map((word) => word.trim());
  }
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (blog) profileFields.social.blog = blog;
  if (instagram) profileFields.social.instagram = instagram;

  try {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/ident
// @desc     Get identities from all profiles
// @access   Public

router.get("/ident", async (req, res) => {
  try {
    const profilesIdentities = await Profile.distinct("identities");

    res.json(profilesIdentities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/key
// @desc     Get identities from all profiles
// @access   Public

router.get("/key", async (req, res) => {
  try {
    const profilesKeyWords = await Profile.distinct("keyWords");

    res.json(profilesKeyWords);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user id
// @access   Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/profile
// @desc     Delete user, profile & post
// @access   Private

router.delete("/", auth, async (req, res) => {
  try {
    // @todo - Remove users posts

    await Posts.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User deleted" });

    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private

router.put(
  "/education",
  auth,
  [
    check("school", "School is required").not().isEmpty(),
    check("degree", "Degree is required").not().isEmpty(),
    check("fieldofstudy", "Field of study is required").not().isEmpty(),
    check("from", "From date is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    } = req.body;

    const newEdu = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description,
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.education.unshift(newEdu);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);






module.exports = router;
