var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var temp = this.props.temp;
//     var location = this.props.location;
//     return(
//       <div>
//     <h4>It's {temp} in {location}.</h4>
//     </div>
//     );
//   }
// });

var WeatherMessage = ({temp,location}) => {
  return(
    <div>
  <h3 className='text-center'>It's {temp} in {location}.</h3>
  </div>
  );
}

module.exports = WeatherMessage;
