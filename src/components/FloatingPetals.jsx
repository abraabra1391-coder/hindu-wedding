import React, { useEffect, useRef } from 'react';

export default function FloatingPetals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const numParticles = 25;
    const particles = [];

    // Colors: lotus pink petals & gold shimmer dust
    const colors = [
      'rgba(248, 187, 208, 0.65)',
      'rgba(244, 143, 177, 0.5)',
      'rgba(212, 175, 55, 0.45)',
      'rgba(230, 202, 101, 0.55)',
      'rgba(255, 235, 238, 0.7)'
    ];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 0.6 + 0.2,
        speedX: Math.sin(Math.random() * Math.PI) * 0.3,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        isPetal: Math.random() > 0.4
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * 0.4;
        p.angle += p.spin;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;

        if (p.isPetal) {
          // Draw soft petal shape
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-p.radius, -p.radius * 2, -p.radius * 2, p.radius, 0, p.radius * 2.5);
          ctx.bezierCurveTo(p.radius * 2, p.radius, p.radius, -p.radius * 2, 0, 0);
          ctx.fill();
        } else {
          // Draw subtle gold dust particle
          ctx.beginPath();
          ctx.arc(0, 0, p.radius * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.8 }}
    />
  );
}
