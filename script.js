// hello sneakers
// there's nothing to watch here
// hehehehehe
// POWER TO THE BBS

function dots(num) {
    let a = "<span class='dot'>&bull;</span>";
    return "<span id='dots'>" + a.repeat(num) + "</span>"
}

function showStory() {
    let num_stories = stories.length;
    let rand_story = Math.floor(Math.random() * num_stories)
    document.getElementById("bigvideo").style.filter = "blur(40px)"

    document.getElementById("storywrap").innerHTML = dots(num_stories) + stories[rand_story];
    document.getElementsByClassName('dot')[rand_story].style.color = 'rgba(0,0,0,1';

    fadeIn(document.getElementById("storywrap"));
    fadeIn(document.getElementById("close", 0.5));
}






function closeStory() {
    fadeOut(document.getElementById("storywrap"));
    fadeOut(document.getElementById("close"));
    if (About.status == true) {
    	fadeOut(document.getElementById("about"));
    	this.status = false;
    }
    document.getElementById("bigvideo").style.filter = "blur(0px)"
}

let About = {
	status: false,
	toggleAbout: function () {
			if (this.status == false) {
				document.getElementById("main_title").style.color = "red";
			    document.getElementById("bigvideo").style.filter = "blur(40px)"
				fadeIn(document.getElementById("about"));
				this.status = true;	
				console.log("APRITI");
			} else {
				document.getElementById("main_title").style.color = "black";
			    document.getElementById("bigvideo").style.filter = "blur(0px)"
				fadeOut(document.getElementById("about"));
				this.status = false;
				console.log("HIUDITE");
			}
	}
}

const fadeIn = (el, smooth = true, displayStyle = 'block') => {
	let f = 0;

    el.style.opacity = 0;
    el.style.display = displayStyle;
    if (smooth) {
        let opacity = 0;
        let request;

        const animation = () => {
        	if (f > 20) {
            	el.style.opacity = opacity += 0.15;
            	if (opacity >= 1) {
               		opacity = 1;
                	cancelAnimationFrame(request);
            	}
            }
            console.log(f)
            f += 1;
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
            el.style.opacity = opacity -= 0.15;
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


const blurIn = (el) => {
	let filter = el.style.filter;
	let request;

	const animation = () => {
		el.style.filter = filter 
	}
}