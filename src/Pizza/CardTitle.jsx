import React from "react";

const CardTitle = ({ userInfo }) => {
  return <h2 className="card-title">{userInfo.name}</h2>;
};

export default CardTitle;
