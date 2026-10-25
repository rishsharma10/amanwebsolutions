'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Diwali Sparkler (Phuljhadi) Cursor Trail Effect.
 * Emits glowing golden festive sparks on mouse movement within the hero area.
 * Performance-optimized: Animation loop only runs when active sparks exist.
 */
export default function DiwaliSparklerCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Only run on desktop/devices with fine pointer
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isRunning = false;
    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    interface Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      life: number;
    }

    const sparks: Spark[] = [];
    const colors = ['#f59e0b', '#fbbf24', '#fde047', '#ffedd5', '#ea580c'];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 1 / s.life;
        s.size = Math.max(0, s.size - 0.04);

        if (s.alpha <= 0 || s.size <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (sparks.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
        ctx.clearRect(0, 0, width, height);
      }
    };

    let cachedRect: DOMRect | null = null;
    const updateRect = () => {
      if (canvas) cachedRect = canvas.getBoundingClientRect();
    };
    updateRect();

    const onResize = () => {
      handleResize();
      updateRect();
    };
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', updateRect, { passive: true });

    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (!cachedRect) return;
      // Skip all processing when Hero is scrolled out of viewport
      if (cachedRect.bottom < 0 || cachedRect.top > window.innerHeight) return;

      const now = performance.now();
      if (now - lastTime < 50) return; // throttle emission
      lastTime = now;

      const mouseX = e.clientX - cachedRect.left;
      const mouseY = e.clientY - cachedRect.top;

      if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) return;

      // Spawn 2 golden sparks per move
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.3;
        sparks.push({
          x: mouseX + (Math.random() - 0.5) * 6,
          y: mouseY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          size: Math.random() * 2 + 1,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 20 + 15
        });
      }

      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-30 w-full h-full will-change-transform"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
