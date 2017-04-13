var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return(
    <div>
    <h3>About Component</h3>
    <p>This single page React Application will tell you the tempature in your area</p>
    </div>
  );
};

module.exports = About;
