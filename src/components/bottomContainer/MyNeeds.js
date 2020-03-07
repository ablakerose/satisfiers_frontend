import React from "react";
import NeedCard from "../NeedCard.js";
import { connect } from "react-redux";

const MyNeeds = props => {
  // console.log(props);
  // const needCards =
  //   props.needs.length > 0
  //     ? props.needs.map(n => <NeedCard need={n} key={n.id} />)
  //     : [];
  // return needCards;
};

const mapStateToProps = state => {
  return {
    needs: state.MyNeeds
  };
};

// returned form invoking connect that will now supply my trips with props including state as described in
//mapStateToProps and actions as described in mapDispatchToProps
export default connect(mapStateToProps)(MyNeeds);
