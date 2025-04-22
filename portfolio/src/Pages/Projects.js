import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>
          Photoshoot Session: Here I photographed my brother and, now, wife on
          their engagement. All photos were edited and produced through Adobe
          Lightroom.
        </p>
        <a href="https://drive.google.com/drive/folders/1ahMyivDML-FuunFQHAzsv1WzZBUJ0b8r?usp=drive_link">
          View Project
        </a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>
          Server Side Scripting Movie Review: A school project to leave reviews
          and comments on any movies. I, specifically, reviewed different Marvel
          movies.
        </p>
        <a href="https://students.gaim.ucf.edu/~br212672/dig3134c/assignment05/login.php">
          View Project
        </a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>
          Form Selection: A PHP form made to show a weekly or monthly to-do
          list. This could ensure all tasks were completed via the web.
        </p>
        <a href="https://students.gaim.ucf.edu/~br212672/dig3134c/assignment02/assignment02-part2/process_orders.php">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projects;
