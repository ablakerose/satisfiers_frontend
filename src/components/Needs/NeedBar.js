import React from "react";

const NeedBar = props => {
  const statusBarTotal = () => {
    return props.need.satisfiers.reduce(
      (sum, satisfier) => sum + satisfier.value,
      0
    );

    const example2 = "#example2".progress("set total"({ statusBarTotal }));
  };

  return (
    <div>
      <ul>
        <p>{statusBarTotal()}</p>
        <div className="ui blue indicating progress" id="example2">
          <div className="bar"></div>
          <div className="label"> Progress</div>
        </div>
      </ul>
    </div>
  );
};

export default NeedBar;
