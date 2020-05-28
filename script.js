const vidArray = ["1", "2", "3", "4", "5", "6", "7"].sort( () => Math.random() - 0.5);
for (let i = 0; i < vidArray.length; i++) {
	console.log(vidArray[i])
}






// when videos are loaded
let container = document.getElementById("container");
container.onloadeddata = function() {
    container.style.opacity = 1;
    console.log("uhuhuu")
}; 









// stuff to remember
//  ffmpeg -i .\Documents\KABK_STUFF\house_pro\test_3_512.mp4 -map 0 -c copy -f segment -segment_time 3 -g 3 -sc_threshold 0 -force_key_frames "expr:gte(t,n_forced*3)" -c:v libvpx-vp9 -crf 50 -b:v 0 -b:a 128k -c:a libopus .\Documents\KABK_STUFF\house_pro\dreamy%03d.webm