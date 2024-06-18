import React from "react";

const SkillCard = ({ skillName, emoji, color }) => {
  return (
    <li className="skill-card" style={{ backgroundColor: color }}>
      {emoji} {skillName}
    </li>
  );
};

export default SkillCard;
