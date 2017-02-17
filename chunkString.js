var prompt = require('prompt');

prompt.start();

prompt.get(['answer'], function (err, result) {
	if (err) { return onErr(err); }
	console.log('Message after Tweetstorm:');
	chunkString(result.answer, 140);
});

function onErr(err) {
	console.log(err);
	return 1;
}

function chunkString(str, length) {
  var newMatch = str.match(new RegExp('.{1,' + length + '}', 'g'));
  var prefix = newMatch.map(function(currentElement, index) {
    var newIndex = index+1;
    return console.log("1/"+newIndex+" "+currentElement);
  });
}