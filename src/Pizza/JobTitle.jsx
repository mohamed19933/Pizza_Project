import React from "react";

const JobTitle = ({ userInfo }) => {
  return <h3 className="card-subtitle">{userInfo.jobTitle}</h3>;
};

export default JobTitle;
