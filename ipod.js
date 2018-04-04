// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var defaultVol = 3;
var volume = defaultVol;
var temp;
var id;
var elem = document.getElementById("toggle");
var time = document.getElementById("playerTime");
var rangeBar = document.getElementById("rangeBar");
var Sname = document.getElementById("songName");	
var s = 6;

function init() {

	for( i=0; i<6; i++)//fill the array volLevels and references to volume levels
	{
		volLevels.push(document.getElementById("vl"+i));
	}
	for(i=0; i<defaultVol; i++) //set the default volume and color the volume boxes
	{
		temp = volLevels[i];
		temp.style.backgroundColor = "pink";
	}
};

function volUp() {

	if(0<= volume < 6)//constrains on the edges of volume
	{
		temp = volLevels[volume];
		temp.style.backgroundColor = "pink";
		volume++;
	}
}

function volDown() {

	if(0<= volume < 6)
	{
		temp = volLevels[volume-1];
		temp.style.backgroundColor = "white";
		volume--;
	}
}

function switchPlay() {

	if(elem.innerHTML=="play_arrow")
		{
			elem.innerHTML = "pause";
			id = setInterval(myTimer, 1000);
			function myTimer()
			{
				rangeBar.stepUp(1); //update the player time
				time.innerHTML = secondsToMs(rangeBar.value)//show the player time
				if(rangeBar.value == 180) nextSong();
			}
		}
	else
	{
		elem.innerHTML = "play_arrow";
		clearInterval(id);//stop incrementing the input
	}
}



function nextSong() {
	if(0 <= s < 10)
	{
		Sname.innerHTML = tracklist[++s];
		if(s == 10)//if it is the last song in tracklist
		{
			s=0;
			Sname.innerHTML = tracklist[s];
		}
	}
	time.innerHTML = secondsToMs(0);//time back to 0
	rangeBar.value = 0;//the slider thumb back to begining
}

function prevSong() {
	if(0 <= s < 10)
	{	
		Sname.innerHTML = tracklist[--s];
		if(s == -1)//if it is the first song in tracklist
		{
			s=9;
			Sname.innerHTML = tracklist[s];
		}
	}
	time.innerHTML = secondsToMs(0);
	rangeBar.value = 0;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();