/** @jsx React.DOM */

var data = [
	{
		text: 'BS Mechanic Engineering, Escola de Engenharia Mauá',
		icon: 'img/icon-education.png'

	},
	{
		text: 'Work: Developer, Accenture',
		icon: 'img/icon-work.png'
	},
	{
		text: 'Implemented first global eCommerce system for DuPont',
		icon: 'img/icon-award.png'
	},
	{
		text: 'Work: Tech lead and architect, Adjoined (consulting startup acquired by Cap Gemini)',
		icon: 'img/icon-work.png'
	},
	{
		text: 'One of first JBoss implementations at Domino Sugars',
		icon: 'img/icon-award.png'
	},
	{
		text: 'Work: Consultant to Senior Manager, Accenture',
		icon: 'img/icon-work.png'
	},
	{
		text: '— Developed global business process management (BPM) solution',
		icon: ''
	},
	{
		text: '— Led team of 70 consultants to implement post-merger integration solution for Bank of America-MBNA',
		icon: 'img/icon-award.png'
	},
	{
		text: '— Developed technology strategy for Visa, Raytheon, Walmart, and Bank of America',
		icon: ''
	},
	{
		text: '— Turned around complex client engagement in West-cost retailer',
		icon: 'img/icon-award.png'
	},
	{
		text: 'Work: CTO, ViS Research (tech startup)',
		icon: 'img/icon-work.png'
	}
];
var Bio = React.createClass({


	render: function() {
    	var Experience = data.map(function(d, index) {
    		var textclass = (d.icon.indexOf('award')>0 ? 'experience award' : 'experience')
    		var image = '';
    		if (d.icon != '') {
    			image = <img src={d.icon}></img>;
    		}
			return (
				<div className="row">
					<div className="col-md-1 col-sm-1">
						{image}
					</div>
					<div className="col-md-10 col-sm-10">
						<p className={textclass}>{d.text}</p>
					</div>
				</div>
	        );
	    }.bind(this));
	    return (
	    	<div className="container">
	    		{ Experience } 
	    	</div>
	    	);
	}
});

ReactDOM.render(<Bio />, document.getElementById('bio'));
