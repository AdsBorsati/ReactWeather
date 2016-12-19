var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      errorMessage: '',
      location: '',
      temp: 0
    };
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (temperature){
      that.setState({
        location: location,
        temp: temperature,
        isLoading: false,
        errorMessage: ''
      });
    }, function (errorMessage){
      that.setState({
        isLoading: false,
        errorMessage: 'Houve um erro ao buscar a Temperatura.'
      })
    });
  },
  render: function(){
    var {errorMessage, isLoading, location, temp} = this.state;
    var that = this;

    function renderMessage (){
      if (isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if (errorMessage) {
        return <h3>{errorMessage}</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
