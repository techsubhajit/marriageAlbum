//  song

let audio = document.querySelector(".myAudio");
let pause = document.querySelector(".pauseAudio");
function toggleAudio() {
	if (audio.paused) {
		audio.play();
    pause.innerHTML = "🔊";
    pause.style.backgroundColor = "green";

	} 
	else {
		audio.pause();
		pause.innerHTML = "🔇";
		pause.style.backgroundColor = "#b10604";
	}

} 


window.onload=function() {
setTimeout(()=>{
	// audio.
	audio.volume = 0.2;

	audio.loop = true; //if you want it to restart playing automatically when it ends
  audio.play();
},3000);
}
