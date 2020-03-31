// import React from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// class SatisfierDetails extends React.Component {
//   changeEditMode = () => {
//     console.log("should go to edit mode now");
//   };

//   render() {
//     return (
//       <div>
//         <Link to="/needs" exact className="item">
//           <i className="angle left icon"></i>
//           Back to Needs
//         </Link>
//         <div>
//           <ul>
//             {this.need.satisfiers.map((satisfier, i) => (
//               <li key={i}>
//                 {satisfier.activity}, {satisfier.date_completed}
//                 {/* <button onClick={this.handleDelete()}>delete</button>{" "} */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { need: state.need };
// };

// export default connect(mapStateToProps)(SatisfierDetails);

import React from "react";
import { Link } from "react-router-dom";

const SatisfierDetails = ({ need }) => {
  const handleDelete = () => {};

  return (
    <div>
      <Link to="/needs" exact className="item">
        <i className="angle left icon"></i>
        Back to Needs
      </Link>
      <div>
        <ul>
          {need.satisfiers.map((satisfier, i) => (
            <li key={i}>
              {satisfier.activity} {satisfier.date_completed}
              {/* <button onClick={handleDelete}>delete</button>{" "} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SatisfierDetails;
