/** @jsx React.DOM */
var Footer = React.createClass({

	render: function() {

		return (
		    <div className="row footer-row">
		      <div className="col-md-offset-1 col-md-2 col-sm-3">
		      	<h2 className="footer-header">CONTACT</h2>
		      </div>
		      <div className="col-md-6 col-sm-9">
		      	<a className="footer-link" href="mailto:dbmartines@gmail.com" target="_blank">dbmartines@gmail.com</a><br></br>
		      	<a className="footer-link" href="http://twitter.com/danmartines" target="_blank">twitter</a><br></br>
		      	<a className="footer-link" href="https://www.linkedin.com/in/danmartines" target="_blank">linkedin</a><br></br>
		      	<a className="footer-link" href="http://www.danmartines.com" >blog</a>
		      </div>
		    </div>

		);	
	}
});

ReactDOM.render(<Footer />, document.getElementById('footer'));
