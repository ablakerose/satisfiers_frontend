import React from "react";
import { Progress } from "semantic-ui-react";

const NeedWorth = props => {
  const levelTotalPercentage = () => {
    const total = props.need.satisfiers.reduce(
      (sum, satisfier) => sum + satisfier.value,
      0
    );
    return total * 10;
  };

  return (
    <div>
      <ul>
        {/* <NeedBar need={props.need} /> */}

        <Progress percent={levelTotalPercentage()} indicating />
      </ul>
    </div>
  );
};

export default NeedWorth;
