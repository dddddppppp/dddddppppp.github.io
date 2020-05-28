function showStory() {
    document.getElementById("story").innerText = stories[Math.floor(Math.random() * stories.length)];
    fadeIn(document.getElementById("storywrap"));
    document.getElementById("bigvideo").style.filter = "blur(4px)"
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