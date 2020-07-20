import React from "react";
import Books from "./Books";

const Home = () => {
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
      <div class='bg-primary p'>
        <h3>Find by Key Words</h3>
      </div>
      {/* A contribute button */}

      {/* Then I break it down by identities, keywords, location, and genre with word clouds that have search functionality.  */}
    </div>
  );
};

export default Home;
