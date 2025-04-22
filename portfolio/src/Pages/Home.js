import React from "react";

function Home() {
  return (
    <div
      className="home-hero"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          My name is Breanna! Enjoy the projects and pieces I have attached!
        </p>
      </div>
    </div>
  );
}

export default Home;
