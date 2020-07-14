const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  publicName: {
    type: String,
  },
  brandName: {
    type: String,
  },
  website: {
    type: String,
  },
  locationState: {
    type: String,
  },
  locationCity: {
    type: String,
  },

  identities: {
    type: [String],
    required: true,
  },
  keyWords: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  storyGraph: {
    type: String,
  },

  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    blog: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
