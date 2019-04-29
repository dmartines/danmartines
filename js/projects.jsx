/** @jsx React.DOM */
var data = [
	{ 
		image: 'img/thumb-resist.png',
		imgpos: 'top',
		heading: 'RESISTANCE SCHOOL',
		subheading: 'Web application development',
		link: 'resistanceschool',
		tags: ['wordpress','css'],
		url: 'https://www.resistanceschool.com/'
	},
	{ 
		image: 'img/thumb-ragtag.png',
		imgpos: 'top',
		heading: 'RAGTAG',
		subheading: 'Web application development',
		link: 'ragtag',
		tags: ['wordpress','javascript','css'],
		url: 'https://ragtag.org/'
	},
	{ 
		image: 'img/thumb-vis.png',
		heading: 'HEALTHCARE ANALYTICS',
		subheading: 'CTO tech startup',
		tags: ['java', 'apache', 'mysql'],
		link: 'vis'
	},
	{ 
		image: 'img/thumb-weather-mobile.png',
		heading: 'WEATHER MINIMALIST',
		subheading: 'Mobile app development',
		tags: ['phonegap','ios','appstore'],
		link: 'weather',
		url: 'https://itunes.apple.com/us/app/weather-minimalist-weather/id1028230928?ls=1&mt=8'
	},
	{ 
		image: 'img/thumb-worldcup.png',
		heading: 'WORLDCUP',
		subheading: 'Social media',
		link: 'worldcup',
		tags: ['node.js','twitter','api']
	},
	{ 
		image: 'img/thumb-alab.png',
		heading: 'MIT ANALYTICS LAB',
		subheading: 'Machine learning',
		link: 'alab',
		tags: ['python','natural language','wordle']
	},
	{ 
		image: 'img/thumb-bi.png',
		heading: 'BUILDING IMPACT',
		subheading: 'Mobile app design & development',
		tags: ['phonegap','ios','mobile design'],
		link: 'bi'
	},
	{ 
		image: 'img/thumb-speedreadle.png',
		heading: 'SPEEDREADLE',
		subheading: 'Web application',
		link: 'speedreadle',
		tags: ['javascript','jquery'],
		url: 'http://speedreadle.com/'
	},
	{ 
		image: 'img/thumb-amorphous.png',
		heading: 'AMORPHOUS',
		subheading: 'Web design and development',
		link: 'amorphous',
		tags: ['html 5','css']
	},
	{ 
		image: 'img/thumb-twitterfollowers.png',
		heading: 'TWITTER FOLLOWERS',
		subheading: 'Social media',
		link: 'twitterfollowers',
		tags: ['twitter api', 'node.js'],
		url: 'http://twitter.d09s.com/'
	},
	{ 
		image: 'img/thumb-kiddled.png',
		heading: 'KIDDLED',
		subheading: 'Market research',
		link: 'kiddled',
		tags: ['django','python','responsive'],
		url: 'http://www.kiddled.com/'
	},
	{ 
		image: 'img/thumb-bitcoin.png',
		heading: 'BITCOIN INNOVATION',
		subheading: 'Data science',
		link: 'bitcoin',
		tags: ['python','crunchbase api']
	}
];


var Projects = React.createClass({

	handleClick: function(project) {
		if (project.url) {
			window.open(project.url, "_blank");
		} else {
			var url = project.link + '.html';
			window.location = url;
		}
	},

	mouseEnter: function(index) {
		var projectId = '#' + index;
		$(projectId).css('opacity',1);
	},

	mouseLeave: function(index) {
		var projectId = '#' + index;
		$(projectId).css('opacity',0);
	},

	render: function() {
		var heightDivider = 2;
		if ($(window).width() < 600)
			heightDivider = 4;

		var colHeight = $(window).height() / 2;
		var colStyle = { padding: '0px', minHeight: colHeight};
		var rowStyle = { margin: '0px'};
		var imgStyle = {    position: 'absolute',
						    top: '0px',
						    bottom: '0px',
						    margin: 'auto',
						    left: '0px',
						    right: '0px'
						};
		var hoverStyle = {display: 'none'};
    	var Project = this.props.data.map(function(d, index) {
	    	var boundClick = this.handleClick.bind(this, d);
	    	var boundmouseEnter = this.mouseEnter.bind(this, index);
	    	var boundMouseLeave = this.mouseLeave.bind(this, index);
	    	var imgpos = 'center'
	    	if (d.imgpos) {
	    		imgpos = d.imgpos
	    	}
			var projectStyle = {
									background: 'url(' + d.image + ') no-repeat center ' + imgpos,
									backgroundSize: 'cover',
									backgroundColor: '#BABAE2', 
									minHeight: colHeight,
								};
			return (
				<div key={index} className="col-md-6 col-sm-12" id="grid-item" style={colStyle} onMouseEnter={boundmouseEnter} onMouseLeave={boundMouseLeave} onClick={boundClick}>
					<div className="project" style={projectStyle}>
						<div className='project-hover' id={index}>
							<h3 className="thumbHeading">{d.heading}</h3>
							<p>{d.subheading}</p>
							<div className="tags">
								{ d.tags.map(function(tag, index2) {
								return <span key={index2} className="tag">{tag}</span>
								})}
							</div>
						</div>	
					</div>
				</div>
	        );
	    }.bind(this));
	    return <div className="row" id="grid" style={rowStyle} >{ Project } </div>;
	}
});

ReactDOM.render(<Projects data={data} />, document.getElementById('projects'));

						// <img src={d.image} style={imgStyle}></img>
						// <h4 className='heading'>{d.heading}</h4>
						// <h5 className='subheading'>{d.subheading}</h5>
						// <div className="tags">
						// 	{ d.tags.map(function(tag, index) {
						// 		return <span className="tag">{tag}</span>
						// 	})}
						// </div>

