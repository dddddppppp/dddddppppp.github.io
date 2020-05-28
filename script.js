function showStory() {
    document.getElementById("bigvideo").style.filter = "blur(40px)"
    document.getElementById("storywrap").innerHTML = stories[Math.floor(Math.random() * stories.length)];
    fadeIn(document.getElementById("storywrap"));
    fadeIn(document.getElementById("close", 0.5));
}

function closeStory() {
    fadeOut(document.getElementById("storywrap"));
    fadeOut(document.getElementById("close"));
    document.getElementById("bigvideo").style.filter = "blur(0px)"
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