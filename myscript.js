    window.onload = function() {
        var canvas = document.getElementById('signatureCanvas');
        var context = canvas.getContext('2d');
        var drawing = false;

        canvas.addEventListener('mousedown', function(e) {
            drawing = true;
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;
            context.beginPath();
            context.moveTo(x, y);
        });

        canvas.addEventListener('mousemove', function(e) {
            if (drawing === true) {
                var x = e.pageX - canvas.offsetLeft;
                var y = e.pageY - canvas.offsetTop;
                context.lineTo(x, y);
                context.stroke();
            }
        });

        canvas.addEventListener('mouseup', function(e) {
            drawing = false;
        });

        canvas.addEventListener('mouseleave', function(e) {
            drawing = false;
        });

        var downloadButton = document.getElementById('downloadButton');
        downloadButton.addEventListener('click', function() {
            var dataUrl = canvas.toDataURL('image/png'); // Change format to PNG
            var link = document.createElement('a');
            link.download = 'signature.png'; // Change file name to PNG
            link.href = dataUrl;
            link.click();
        });

        var clearButton = document.getElementById('clearButton');
        clearButton.addEventListener('click', function() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        });
    };

