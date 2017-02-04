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

    const img = new Image();
    img.src = '/video/stream.mjpg';
    img.width = 640;
    img.height = 480;

    img.onload = function() {
	setBackground(img);
        setInterval(() => setBackground(img), 4000);
    }
})();
