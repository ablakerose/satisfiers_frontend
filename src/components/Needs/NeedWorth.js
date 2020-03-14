import React from "react";

const NeedWorth = props => {
  const levelTotal = () => {
    return props.need.satisfiers.reduce(
      (sum, satisfier) => sum + satisfier.value,
      0
    );
  };

  return (
    <div>
      <ul>
        <p>{levelTotal()}</p>
      </ul>
    </div>
  );
};

export default NeedWorth;
