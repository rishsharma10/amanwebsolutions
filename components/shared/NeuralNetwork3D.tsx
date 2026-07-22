'use client';

import React, { useEffect, useRef } from 'react';

export default function NeuralNetwork3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // 3D Particles configuration
    const particleCount = 80;
    const connectionDistance = 150;
    const fov = 350; // Field of view / perspective

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
    }

    const particles: Particle[] = [];

    // Initialize particles in a 3D sphere/cube volume
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        z: (Math.random() - 0.5) * 500,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: (Math.random() - 0.5) * 0.8,
        color: i % 3 === 0 ? '124, 58, 237' : i % 2 === 0 ? '34, 211, 238' : '236, 72, 153', // purple, cyan, pink
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) - width / 2;
      mouseY = (e.clientY - rect.top) - height / 2;

      targetRotationY = (mouseX / (width / 2)) * 0.8;
      targetRotationX = (mouseY / (height / 2)) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera rotation rotation toward target
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Temporary array to hold projected coords
      const projected: { x: number; y: number; z: number; color: string }[] = [];

      // Update and project particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles slightly inside their volume
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Bounce inside volume bounds
        const boundary = 250;
        if (Math.abs(p.x) > boundary) p.vx *= -1;
        if (Math.abs(p.y) > boundary) p.vy *= -1;
        if (Math.abs(p.z) > boundary) p.vz *= -1;

        // Apply 3D Rotations based on mouse
        // Y-axis rotation
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;

        // X-axis rotation
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Constant automatic rotation offset
        const autoAngle = Date.now() * 0.00015;
        const cosAuto = Math.cos(autoAngle);
        const sinAuto = Math.sin(autoAngle);
        const rx = x1 * cosAuto - z2 * sinAuto;
        const rz = z2 * cosAuto + x1 * sinAuto;

        // Perspective Projection
        const distance = 400; // Camera distance
        const scale = fov / (fov + rz + distance);
        const projX = rx * scale + width / 2;
        const projY = y2 * scale + height / 2;

        projected.push({
          x: projX,
          y: projY,
          z: rz,
          color: p.color
        });
      }

      // Draw Connections (lines between close nodes)
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const pi = particles[i];
          const pj = particles[j];

          // Calculate actual 3D distance
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dz = pi.z - pj.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            const p1 = projected[i];
            const p2 = projected[j];

            const alpha = (1 - dist / connectionDistance) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Gradient connection line
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, `rgba(${p1.color}, ${alpha})`);
            grad.addColorStop(1, `rgba(${p2.color}, ${alpha})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = (1 - dist / connectionDistance) * 1.5;
            ctx.stroke();
          }
        }
      }

      // Draw Particles (nodes)
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const rawZ = particles[i].z;
        // Node size based on depth
        const radius = Math.max(1.2, (250 - rawZ) / 45);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        
        // Outer glow
        ctx.shadowBlur = radius * 3;
        ctx.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx.fillStyle = `rgba(${p.color}, 0.9)`;
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset shadow for line calculations
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
}
