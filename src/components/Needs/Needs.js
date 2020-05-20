import React from "react";
import NeedCard from "./NeedCard";
import { Grid } from "semantic-ui-react";

const Needs = (props) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "violet",
    "purple",
    "pink",
  ];

  const icons = [
    "eye icon",
    "clone icon",
    "user secret icon",
    "adjust icon",
    "edit icon",
    "eye dropper icon",
    "object group icon",
    "cut icon",
    "crosshairs icon",
  ];
  return (
    <div>
      <Grid columns={3} divided>
        {props.needs.map((need, i) => (
          <div key={i}>
            <div className="item">
              <NeedCard need={need} color={colors[i]} icon={icons[i]} />
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default Needs;
