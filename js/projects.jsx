/** @jsx React.DOM */
var data = [
	{ 
		image: 'img/thumb-vis.png',
		heading: 'Healthcare analytics',
		subheading: 'CTO tech startup',
		tags: ['java', 'apache', 'mysql'],
		link: 'vis'
	},
	{ 
		image: 'img/thumb-weather.png',
		heading: 'Weather minimalist',
		subheading: 'Mobile app development',
		tags: ['phonegap','ios','appstore'],
		link: 'weather',
		url: 'https://itunes.apple.com/us/app/weather-minimalist-weather/id1028230928?ls=1&mt=8'
	},
	{ 
		image: 'img/thumb-worldcup.png',
		heading: 'Worldcup',
		subheading: 'Social media',
		link: 'worldcup',
		tags: ['node.js','twitter','api']
	},
	{ 
		image: 'img/thumb-alab.png',
		heading: 'Analytics lab',
		subheading: 'Machine learning',
		link: 'alab',
		tags: ['python','natural language','wordle']
	},
	{ 
		image: 'img/thumb-speedreadle.png',
		heading: 'SpeedReadle',
		subheading: 'Web application',
		link: 'speedreadle',
		tags: ['javascript','jquery'],
		url: 'http://speedreadle.com/'
	},
	{ 
		image: 'img/thumb-amorphous.png',
		heading: 'Amorphous',
		subheading: 'Web design and development',
		link: 'amorphous',
		tags: ['html 5','css']
	},
	{ 
		image: 'img/thumb-twitterfollowers.png',
		heading: 'Twitter followers',
		subheading: 'Social media',
		link: 'twitterfollowers',
		tags: ['twitter api', 'node.js'],
		url: 'http://twitter.d09s.com/'
	},
	{ 
		image: 'img/thumb-kiddled.png',
		heading: 'Kiddled',
		subheading: 'Market research',
		link: 'kiddled',
		tags: ['django','python','responsive'],
		url: 'http://www.kiddled.com/'
	},
	{ 
		image: 'img/thumb-bitcoin.png',
		heading: 'Bitcoin startups',
		subheading: 'Data science',
		link: 'bitcoin',
		tags: ['python']
	},
	{ 
		image: 'img/thumb-ucuzal.png',
		heading: 'Ucuzal',
		subheading: 'Mobile concept',
		link: 'ucuzal',
		tags: ['html 5','css','jquery']
	}
];


var Projects = React.createClass({

	componentDidUpdate: function() {
		console.log('Component did update');
		if ($('#grid-item').length > 0) {
		  setTimeout(refreshMasonry, 500); 
		}
	},

	componentDidMount: function() {
		console.log('Component did mount');
		if ($('#grid-item').length > 0) {
		  setTimeout(refreshMasonry, 500); 
		}
	},

	handleClick: function(project) {
		if (project.url) {
			window.open(project.url, "_blank");
		} else {
			var url = project.link + '.html';
			window.location = url;
		}
	},

	render: function() {
    	var Project = this.props.data.map(function(d, index) {
	    	var boundClick = this.handleClick.bind(this, d);
			return (
				<div className="grid-item" id="grid-item" onClick={boundClick}>
					<img src={d.image}></img>
					<h4 className='heading'>{d.heading}</h4>
					<h5 className='subheading'>{d.subheading}</h5>
					<div className="tags">
						{ d.tags.map(function(tag, index) {
							return <span className="tag">{tag}</span>        		
						})}
					</div>
				</div>
	        );
	    }.bind(this));
	    return <div className="grid" id="grid">{ Project } </div>;
	}
});

ReactDOM.render(<Projects data={data} />, document.getElementById('projects'));

function refreshMasonry() {
	$('#grid').masonry({
		// options
		itemSelector: '#grid-item',
		gutter: 2,
		// transitionDuration: '0.4s',
		percentPosition: true
	});
}
