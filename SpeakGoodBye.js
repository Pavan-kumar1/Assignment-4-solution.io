(function(window){
	var speakWord = "Good Bye";
	var byeSpeaker = {};

	byeSpeaker.name = "";
	byeSpeaker.speak = function (){
		console.log(speakWord + " "+ byeSpeaker.name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);