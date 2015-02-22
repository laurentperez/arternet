                        var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

      function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }

      function draw(text) {
      var maxWidth = 400;
      var lineHeight = 25;
      var x = (canvas.width - maxWidth) / 2;
      var y = 60;

      context.font = '16pt Calibri';
      context.fillStyle = getRandomColor();

      wrapText(context, text, x, y, maxWidth, lineHeight);
      }


         document.getElementById('body').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }, false);

  