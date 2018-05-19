import React from "react";

const PageLayout = props => {
  return (
    <div className="PageLayout">
      {props.children[0]}

      <div className="center-align">
        {props.children[1]}
        {props.children[2]}
        {props.children[3]}
        {props.children[4]}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" />
      </div>
    </div>
  );
};

export default PageLayout;
