var React = require('react');

// var WeatherMessage = React.createClass({
//   render : function(){
//     var {location, temp} = this.props;
//     return (
//       <div>
//         <h1>It's {temp}ºC in {location}.</h1>
//       </div>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {location, temp} = props;
//   return (
//    <div>
//      <h1>It's {temp}ºC in {location}.</h1>
//    </div>
//   );
// }

var WeatherMessage = ({location, temp}) => {
  return (
   <div>
     <h3 className="text-center">It's {temp}ºC in {location}.</h3>
   </div>
  );
}

module.exports = WeatherMessage;
