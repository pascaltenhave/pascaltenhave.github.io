//time
var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 7; // 7AM
var lunchTime = 12; // 12PM
var partyTime = 21; // 9PM
var napTime = lunchTime + 2; // 2PM

//partyTime
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

//timeselectors
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

//main function
var updateClock = function()
{ // text
	var messageText;
	var timeEventJS = document.getElementById("timeEvent");

	//image
	var lolcat = document.getElementById("lolcat");
	var image = "https://media1.tenor.com/images/80102550479835807fdd8ab3cbab2565/tenor.gif?itemid=15731367";

	// conditions
	if (time == partyTime){
		image = "https://media1.tenor.com/images/cde79b218b50403a126fbe3bc1132a3f/tenor.gif?itemid=3955291";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image = "https://33.media.tumblr.com/b319044bf28956de46ce16ab1eb6814b/tumblr_ntenhyWeeo1ta8ayco1_400.gif";
		messageText = "SHHHH! IZ NAP TIME...";
	} else if (time == lunchTime) {
		image = "https://gifrific.com/wp-content/uploads/2014/04/Cat-Eating-Food-From-Chopsticks.gif";
		messageText = "OMMNOMNOM! IZ FEED ME TIME";
	} else if (time == wakeupTime) {
	image="https://i.pinimg.com/originals/fa/13/c0/fa13c0b952fdfcd4dc064f519aa3fc96.gif";
		messageText = "NO! WHY IZ TIME TO GETTUP?";
	} else if (time < noon) {
		image = "https://cdn.shopify.com/s/files/1/0344/6469/files/image_1_large.gif?v=1484840588";
		messageText = "I IZ CAT. ALL MORNING IS MORNING SNOOZE TIME.";
	} else if (time < evening) {
	   image = "https://memeguy.com/photos/thumbs/kitten-clapping-for-food-221213.gif";
		messageText = "IZ BEING CUTE TIME!";
	} else {
image = "https://www.demotivateur.fr/images-buzz/1502/5f17ea7f030521892ffae73e5982a8bf.gif";
	   messageText = "IZ SPY ON NEIGHBOUR CAT TIME";
	}

	//run
	timeEventJS.innerText = messageText;
	lolcat.src = image;

	//end main function

//clock
	var showCurrentTime = function()
	{
		// display the string on the webpage
		var clock = document.getElementById('clock');

		var currentTime = new Date();

		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		// Set Minutes
		if (minutes < 10)
		{
			minutes = "0" + minutes;
		}

		// Set Seconds
		if (seconds < 10)
		{
			seconds = "0" + seconds;
		}

		// put together the string that displays the time
		var clockTime = "it's " + hours + ':' + minutes + ':' + seconds;

		clock.innerText = clockTime;
	};
	showCurrentTime();
};
//run
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);
//end of clock

//party function
var partyEvent = function() {

   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY OVER? :(";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
};
//selector functions
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

//run partybutton
partyTimeButton.addEventListener("click", partyEvent);

//run selector event listeners

napTimeSelector.addEventListener("change", napEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
