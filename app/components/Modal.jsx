var React = require('react');

var Modal = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){
    return {
      title: 'Woops!'
    };
  },
  componentDidMount: function(){
    var modal = new Foundation.Reveal($("#modal"));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
      <div id="modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p className="lead">{message}</p>
        <p>
          <button className="button hollow" data-close="" type="button">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = Modal;
