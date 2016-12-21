var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Modal = require('Modal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      location: '',
      temp: 0,
      errorMessage: undefined
    };
  },
  handleSearch: function(location){
    var that = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    openWeatherMap.getTemp(location).then(function (temperature){
      that.setState({
        location: location,
        temp: temperature,
        isLoading: false
      });
    }, function (errorMessage){
      that.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      })
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(props){
    var location = props.location.query.location;
    if (location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {errorMessage, isLoading, location, temp} = this.state;
    var that = this;

    function renderMessage (){
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>
      } else if (typeof errorMessage === 'string') {
        return <Modal message={errorMessage} />
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Weather App</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
