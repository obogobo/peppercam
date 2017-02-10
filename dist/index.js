(function() {
    function averageColor(img) {
        const { width, height } = img;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const pix = ctx.getImageData(0, 0, width, height).data;                
        const rgb = [0, 0, 0];
    
        for (let i = 0; i < pix.length; i += 4) {
            rgb[0] += pix[i];
            rgb[1] += pix[i+1];
            rgb[2] += pix[i+2];
        }

        const len = pix.length / 4;
        const r = Math.round(rgb[0] / len).toString(16);
        const g = Math.round(rgb[1] / len).toString(16);
        const b = Math.round(rgb[2] / len).toString(16);

        return `#${r}${g}${b}`
    }

    function setBackground(img) {
        const hex = averageColor(img);   
        document.body.setAttribute('style', `background-color: ${hex}`);
    }

    function flipIt() {
        this.parentElement.classList.toggle('flipped');
    }

    function init() {
        const img = document.querySelector("#stream");
        const vid = document.querySelector("#timelapse");
        const mp4 = document.createElement('source');

        // toggle views
        img.onclick = flipIt;
        vid.onclick = flipIt;

        // average background color
        img.onload = function() {
            setBackground(img);
            setInterval(() => setBackground(img), 4000);
        }
	    
        // load live feed
        img.src = "/video/stream.mjpg";

        // load timelapse video
        mp4.type = 'video/mp4';
        mp4.src = `/plantz.mp4?x=${+new Date()}`; // cache buster
        vid.appendChild(mp4);
    }

    init();

})();
