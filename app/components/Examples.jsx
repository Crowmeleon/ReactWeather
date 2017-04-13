var React = require('react');
var {Link} = require('react-router');

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
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Orem'>Orem, Utah</Link>

        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
