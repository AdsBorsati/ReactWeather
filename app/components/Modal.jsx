var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
    var {title, message} = this.props;
    var modalMarkup = (
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

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($("#modal"));
    modal.open();
  },
  render: function() {
    return (
      <div>
      </div>
    );
  }
});

module.exports = Modal;
