var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function(){
//     return(
//       <h3>Examples Component</h3>
//     );
//   }
// });

//Stateless Component
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Philadelphia'>Philadelphia</Link>
        </li>
        <li>
          <Link to='/?location=Moscow'>Moscow</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
