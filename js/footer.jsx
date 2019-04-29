/** @jsx React.DOM */
var Footer = React.createClass({

	render: function() {

		return (
		    <div className="row footer-row">
		      <div className="col-md-offset-1 col-sm-12">
		      	<h2 className="footer-header">CONTACT</h2>
		      	<a className="footer-link" href="mailto:dbmartines@gmail.com" target="_blank"><img className="contact-img" src="img/email.png"></img></a>
		      	<a className="footer-link" href="https://www.instagram.com/dmartines/" target="_blank"><img className="contact-img" src="img/instagram.png"></img></a>
		      	<a className="footer-link" href="https://www.linkedin.com/in/danmartines/" target="_blank"><img className="contact-img" src="img/linkedin.png"></img></a>
		      	<a className="footer-link" href="http://twitter.com/danmartines" target="_blank"><img className="contact-img" src="img/twitter.png"></img></a>
		      </div>
		    </div>

		);	
	}
});

ReactDOM.render(<Footer />, document.getElementById('footer'));
