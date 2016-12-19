var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var locationRef = this.refs.location;
    var locationValue = locationRef.value;

    if (typeof locationValue === "string" && locationValue.length > 0){
      locationRef.value = '';
      this.props.onSearch(locationValue);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input placeholder="Enter City Name" type="text" ref="location" />
          </div>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
