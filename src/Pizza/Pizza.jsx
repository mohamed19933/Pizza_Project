import React from "react";
import "./Pizza.css"; // Make sure to have your CSS file imported here
import CardTitle from "./CardTitle";
import JobTitle from "./JobTitle";
import SkillCard from "./SkillCard";

const Pizza = () => {
  // Example data for multiple users
  const users = [
    {
      name: "Mohamed Samy",
      jobTitle: "Automation Engineer",
      imageUrl: "/medium.png",
      skills: ["Oracle Apex", "JS", "React"],
    },
    {
      name: "John Doe",
      jobTitle: "Software Developer",
      imageUrl: "/john-doe.png",
      skills: ["Java", "Python", "React", "HTML", "CSS"],
    },
    // Add more users as needed
  ];

  const skillEmojis = {
    "Oracle Apex": "🔧",
    JS: "⚡",
    React: "⚛️",
    Java: "☕",
    Python: "🐍",
    HTML: "🌐",
    CSS: "🎨",
    // Add more skills and their corresponding emojis as needed
  };

  const skillColors = {
    "Oracle Apex": "#FF5733",
    JS: "#FFC300",
    React: "#DAF7A6",
    Java: "#FF5733",
    Python: "#FFC300",
    HTML: "#C70039",
    CSS: "#900C3F",
    // Add more skills and their corresponding colors as needed
  };

  return (
    <div className="user-cards">
      {users.map((user, index) => (
        <div className="card" key={index}>
          <img
            className="card-img"
            src={process.env.PUBLIC_URL + user.imageUrl}
            alt="User"
          />
          <div className="card-body">
            <CardTitle userInfo={user} />
            <JobTitle userInfo={user} />
            <div className="card-skills">
              <h4>Skills:</h4>
              <ul>
                {user.skills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skillName={skill}
                    emoji={skillEmojis[skill]}
                    color={skillColors[skill]}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
