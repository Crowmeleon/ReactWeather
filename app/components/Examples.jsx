var React = require('react');

// var Examples = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h3>This is the Examples Page</h3>
//       </div>
//     );
//   }
// });

var Examples = (props) => {
  return(
    <div>
      <h3>Examples</h3>
      <p>Welcome to the Examples Page</p>
    </div>
  );
};

module.exports = Examples;
