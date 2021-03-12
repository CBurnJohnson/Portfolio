import React, { useEffect } from 'react';

const ParticlesContainer = () => {
  useEffect(() => {
    var canvas = document.querySelector('#particles'),
      ctx = canvas.getContext('2d'),
      particles = [],
      amount = 0,
      mouse = {
        x: 0,
        y: 0
      },
      radius = 0.7; //Init radius of the force field

    var colors = ['#00aaff', '#00C6FF', '#00DCE4'];

    var copy = 'Full Stack Developer'; // Text to display

    var initSize = Math.floor(Math.random() * 0.8) + 3;

    var ww = (canvas.width = window.innerWidth);
    var wh = (canvas.height = window.innerHeight);

    function Particle(x, y) {
      this.x = Math.random() * ww;
      this.y = Math.random() * wh;
      this.dest = {
        x: x,
        y: y
      };
      this.r = initSize;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.015 + 0.94; // force of bounce, just try to change 0.015 to 0.5
      this.color = colors[Math.floor(Math.random() * 6)];
    }

    Particle.prototype.render = function() {
      this.accX = (this.dest.x - this.x) / 300; //acceleration for X
      this.accY = (this.dest.y - this.y) / 300; //acceleration for Y
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y += this.vy;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();

      var a = this.x - mouse.x;
      var b = this.y - mouse.y;

      var distance = Math.sqrt(a * a + b * b);
      if (distance < radius * 70) {
        this.accX = (this.x - mouse.x) / 20; //acceleration on mouseover X, smaller faster
        this.accY = (this.y - mouse.y) / 20; //acceleration on mouseover Y, smaller faster
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function initScene() {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight * 0.91;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = 'bold ' + ww / 10 + 'px sans-serif'; // Size of the text
      ctx.textAlign = 'center';
      ctx.fillText(copy, ww / 2, wh / 2); //Centering

      var data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      particles = [];
      for (var i = 0; i < ww; i += Math.round(ww / 200)) {
        //400 here represents the amount of particles
        for (var j = 0; j < wh; j += Math.round(ww / 200 - 1)) {
          if (data[(i + j * ww) * 4 + 3] > 250) {
            particles.push(new Particle(i, j));
          }
        }
      }
      amount = particles.length;
    }

    function onMouseClick() {
      radius = 4; //onclick expand radius
    }

    function offMouseClick() {
      radius = 0.5; //offClick init radius
    }

    function delayedInitRadius() {
      setTimeout(offMouseClick, 500); //delay for offClick init radius
    }

    function render(a) {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render();
      }
    }

    window.addEventListener('resize', initScene);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseClick);
    window.addEventListener('mouseup', delayedInitRadius);
    initScene();
    requestAnimationFrame(render);
  }, []);

  return (
    <div className="particles-container">
      <canvas id="particles"></canvas>
    </div>
  );
};

export default ParticlesContainer;
