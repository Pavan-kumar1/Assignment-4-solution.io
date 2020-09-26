(function(window){
	var	speakWord = "Hello";
	var helloSpeaker = {};
	
	helloSpeaker.name = "";
	helloSpeaker.speak = function() {
 		console.log(speakWord + " " + helloSpeaker.name);
	}
	window.helloSpeaker = helloSpeaker;

})(window); 