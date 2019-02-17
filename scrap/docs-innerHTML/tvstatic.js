/**
 * Generate TV static in a canvas element
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: 2/9/2013
 * License: MIT
 */

(function() {
  var buffercanvas = document.createElement('canvas');
  var bufferctx = buffercanvas.getContext('2d');
  var WIDTH = 100;
  var HEIGHT = 100;
  buffercanvas.width = WIDTH;
  buffercanvas.height = HEIGHT;
  buffercanvas.fillStyle = '#000';

  function rand(num) {
    return Math.floor(Math.random() * num);
  }

  function tvstatic(canvas, ctx,ctx2, scale) {
    scale = scale || 1;
    var h = canvas.height;
    var w = canvas.width;

    bufferctx.clearRect(0, 0, WIDTH, HEIGHT);
    // draw the static on the buffer canvas
    for (var x = 0; x < WIDTH; x+=scale) {
      for (var y = 0; y < HEIGHT; y+=scale) {
        if (Math.round(Math.random()))
          bufferctx.fillRect(x, y, scale, scale);
      }
    }

    // repeat it onto the real canvas
    for (var x = 0; x < canvas.width; x += WIDTH) {
      for (var y = 0; y < canvas.height; y += HEIGHT) {
        ctx.drawImage(buffercanvas, x, y);
        ctx2.drawImage(buffercanvas, x, y);
      }
    }

    // draw some horizontal lines on the real canvas
    for (var y = rand(10); y < canvas.height; y += rand(10)) {
      ctx.fillRect(0, y, canvas.width, rand(3));
    }

  }

  window.tvstatic = tvstatic;
})();

        window.requestAnimFrame = window.requestAnimationFrame       ||
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame    ||
                      window.oRequestAnimationFrame      ||
                      window.msRequestAnimationFrame     ||
                      function(callback){
                        window.setTimeout(callback, 1000 / 60);
                      };
        var canvas, ctx, canvas2,ctx2;
        window.addEventListener('load', tvStatic_load, false);
        window.addEventListener('resize', tvStatic_resize, false);
        function tvStatic_load() {
            canvas = document.getElementById('BACKGROUND_CANVAS');
            canvas2 = document.getElementById('FOREGROUND_CANVAS');
            ctx  = canvas.getContext('2d');
            ctx2 = canvas2.getContext('2d');
            ctx.fillStyle = '#000';
            ctx2.fillStyle = '#000';
            tvStatic_resize();

            /*requestAnimFrame(render);*/
        }
        function tvStatic_resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas2.width = window.innerWidth;
            canvas2.height = window.innerHeight;

        }
        function tvStatic_render() {
            /*requestAnimFrame(render);*/
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx2.clearRect(0, 0, canvas.width, canvas.height);
            tvstatic(canvas, ctx,ctx2, 2);
        }

        /* requestAnimFrame(tvStatic_render); */