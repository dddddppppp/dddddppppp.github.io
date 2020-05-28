<!DOCTYPE html>
<html>
<head>
	<title>HELLO SCAMMERS</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="stories.js"></script>
<!-- 	<script src="script.js"></script>
 --></head>
<body>

	<!-- <div id="video-grid">

		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>
		<div class="video-item">
			<div class="video-wrap">
				<video autoplay loop muted class="video-video"><source src="" type="video/webm" /></video>
			</div>
		</div>

	</div> -->

	<div id="container">
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
		<div class="box" onclick="showStory()"></div>
	</div>
	

	<div id="header">BEAUTIFUL TRAP <i>(a visual diary of the scamming stories)</i></div>
	<div id="storywrap"><p id="story"></p><div id="close" onclick="closeStory()">X<div></div>



	<script type="text/javascript">

	<?php
		$path = "imgs/";
 		$files = scandir($path);

 		$pathStories = "stories/";
 		$storiesArr = scandir($pathStories);
	?> 

	let vidArray = <?php echo json_encode($files); ?>;
	vidArray = vidArray.filter(v => ~v.indexOf("jpg")).sort( () => Math.random() - 0.5);

	let vidBoxes = document.getElementsByClassName("box");
	for (i = 0; i < vidBoxes.length; i++) {
		//vidBoxes[i].src = "imgs/" + vidArray[i]
		vidBoxes[i].style.backgroundImage = "url('imgs/" + vidArray[i] + "')"
	};


	function showStory() {
		document.getElementById("story").innerText = stories[Math.floor(Math.random()*stories.length)];
		fadeIn(document.getElementById("storywrap"));
		document.getElementById("container").style.filter = "blur(2px)"
	}
	
	function closeStory() {
		fadeOut(document.getElementById("storywrap"));
		document.getElementById("container").style.filter = "none"
	}

	const fadeIn = (el, smooth = true, displayStyle = 'block') => {
    	el.style.opacity = 0;
    	el.style.display = displayStyle;
    	if (smooth) {
        	let opacity = 0;
        	let request;

        	const animation = () => {
            	el.style.opacity = opacity += 0.2;
            	if (opacity >= 1) {
                	opacity = 1;
                	cancelAnimationFrame(request);
            	}
        	};

        	const rAf = () => {
            	request = requestAnimationFrame(rAf);
           		animation();
        	};
        	rAf();

    	} else {
        	el.style.opacity = 1;
    	}
	};

	const fadeOut = (el, smooth = true, displayStyle = 'none') => {
    	if (smooth) {
        	let opacity = el.style.opacity;
        	let request;

        	const animation = () => {
            	el.style.opacity = opacity -= 0.2;
            	if (opacity <= 0) {
            	    opacity = 0;
            	    el.style.display = displayStyle;
            	    cancelAnimationFrame(request);
           	 	}
       		};

        	const rAf = () => {
                request = requestAnimationFrame(rAf);
                animation();
       		};
        	rAf();

    	} else {
        	el.style.opacity = 0;
    	}
	};


	</script>

</body>
</html>