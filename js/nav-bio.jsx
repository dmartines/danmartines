/** @jsx React.DOM */
var NavPortfolio = React.createClass({

	render: function() {
		return (
		    <div className="masthead clearfix" >
		      <div className="inner">
		        <nav>
		          <ul className="nav masthead-nav">
		            <li><a href="index.html">home</a>/</li>
		            <li><a href="index.html#portfolio">portfolio</a>/</li>
		            <li className="active"><a href="bio.html">bio & contact</a></li>
		          </ul>
		        </nav>
		      </div>
		    </div>

		);	
	}
});

ReactDOM.render(<NavPortfolio />, document.getElementById('nav-portfolio'));
