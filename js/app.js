var express = require('express'),
    app = express(),
    async = require('async'),
    file = require('fs');


console.log('Starting node...');

// file.readFile('worldcup.json', 'utf8', function (err, data) {
//     if (err) throw err; // we'll not consider error handling for now
//     var obj = JSON.parse(data);
//     for (var index = 0; index < data.length; index++) {
//     	console.log(data[index]);
//     	obj = JSON.parse(data[index]);
//     	console.log(obj);
//     }
// });



//CLEAN UP IMAGES THAT DO NOT EXIST IN HOST ENVIRONMENT
//db.klips.find({}, { "post.entities.urls.meta.url" : 1, "post.entities.urls.meta.image" : 1 }, function(err, klips) {
//	for (i in klips) {
//		for (y in klips[i].post.entities.urls) {
//			if (klips[i].post.entities.urls[y].meta) {
//				console.log(klips[i].post.entities.urls[y].meta);
//				var imageUrl = klips[i].post.entities.urls[y].meta.image;
//				var metaUrl = klips[i].post.entities.urls[y].meta.url;
//				if (imageUrl) {
//					var xhr = new XMLHttpRequest();
//					xhr.open('HEAD', imageUrl, false);
//					xhr.send();
//					var statusMessage = "status " + xhr.status + " for " + imageUrl;
//				    console.log(statusMessage);
//				    if (xhr.status != 200) {
//				    	statusMessage = "Removing image url for " + metaUrl;
//				    	console.log(statusMessage);
//					    db.klips.update(
//					    	{ "post.entities.urls.expanded_url" : metaUrl }, 
//					    	{ $unset : {
//					    		"post.entities.urls.$.meta.image" : ""
//					    	} },
//					    	function(err, doc) {
//								console.log("Update complete");
//								console.log(doc);
//								console.log(err);
//				    	});
//				    }
//				}				
//			}
//		}
//	}
//});


//Express 4
app.use(express.static(__dirname, '/'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function(req, res) {
    res.send("App works");
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
