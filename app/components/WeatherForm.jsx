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
            <input placeholder="Search Weather by City" type="search" ref="location" />
          </div>
          <button className="hollow button expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
