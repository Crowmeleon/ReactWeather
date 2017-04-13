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
    <h1 className='text-center'>About</h1>
    <p className='text-justify'>This is single page React Application will tell you the tempature in your area, currently this app is using the Open Weather Map API which you can find in the resources below,  you will also find the source code that is used in the app below as well.</p>
    <h3 className="text-center">Resources</h3>
    <table>

        <tr>
        <td>Open Weather Map:</td>
        <td> <a href='http://openweathermap.org/'>Click Here</a></td>
    </tr>
    <tr>
      <td>Github Repo:</td>
      <td> <a href='https://github.com/NeonKraze/ReactWeather'>Click Here</a></td>
    </tr>



  </table>
    </div>
  );
};

module.exports = About;
