"use client";

import { useEffect } from 'react';

export default function BackgroundAnimation() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradient {
        0% {background-position: 0% 50%;}
        50% {background-position: 100% 50%;}
        100% {background-position: 0% 50%;}
      }
      .bg-gradient-anim {
        background: linear-gradient(45deg, #1e3a8a, #3b82f6, #a855f7, #6366f1);
        background-size: 200% 200%;
        animation: gradient 15s ease infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-anim pointer-events-none" />
  );
}
