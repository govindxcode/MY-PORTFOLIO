import { useEffect, useState } from 'react';

export function Background3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      return;
    }

    let frameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 - 1;
        setMousePos({ x, y });
        frameId = 0;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-bg-base">
      <div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] opacity-20 dark:opacity-[0.15] transition-transform duration-1000 ease-out blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-800) 0%, transparent 70%)',
          transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0)`,
          willChange: 'transform',
        }}
      />

      <div
        className="absolute top-[30%] right-[-15%] w-[50%] h-[70%] opacity-10 dark:opacity-20 transition-transform duration-1000 ease-out blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #ff3045 0%, transparent 60%)',
          transform: `translate3d(${mousePos.x * -15}px, ${mousePos.y * -15}px, 0)`,
          willChange: 'transform',
        }}
      />

      <div
        className="absolute bottom-[-30%] left-[10%] w-[80%] h-[60%] opacity-15 dark:opacity-20 transition-transform duration-1000 ease-out blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--color-accent-600) 0%, transparent 60%)',
          transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0)`,
          willChange: 'transform',
        }}
      />

      <div className="absolute inset-0 preserve-3d">
        <div
          className="absolute top-[25%] left-[12%] w-40 h-40 border border-accent-500/10 rounded-2xl animate-float-slow backdrop-blur-[2px] bg-accent-500/[0.02] shadow-[0_0_40px_rgba(255,48,69,0.05)]"
          style={{
            transform: `perspective(1200px) rotateX(${mousePos.y * 12}deg) rotateY(${mousePos.x * 12}deg) translate3d(0, 0, 60px)`,
            transition: 'transform 0.6s ease-out',
            willChange: 'transform',
          }}
        />

        <div
          className="absolute top-[60%] right-[8%] w-56 h-56 border border-red-500/10 rounded-full animate-float-medium backdrop-blur-[1px] shadow-[inset_0_0_30px_rgba(255,48,69,0.05)]"
          style={{
            transform: `perspective(1200px) rotateX(${mousePos.y * -15}deg) rotateY(${mousePos.x * -15}deg) translate3d(0, 0, -60px)`,
            transition: 'transform 0.6s ease-out',
            willChange: 'transform',
          }}
        />

        <div
          className="absolute top-[20%] right-[30%] w-16 h-16 text-accent-400/20 animate-float-fast"
          style={{
            transform: `perspective(1200px) rotateX(${mousePos.y * 20}deg) rotateY(${mousePos.x * -20}deg) translate3d(0, 0, 140px) rotateZ(25deg)`,
            transition: 'transform 0.4s ease-out',
            filter: 'drop-shadow(0 0 15px rgba(255,48,69,0.15))',
            willChange: 'transform',
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" stroke="currentColor" strokeWidth="1">
            <polygon points="50,10 90,90 10,90" />
          </svg>
        </div>

        <div
          className="absolute bottom-[20%] left-[30%] w-48 h-48 bg-gradient-to-tr from-red-500/5 to-accent-500/5 rounded-3xl animate-float-slow backdrop-blur-md border border-white/[0.03]"
          style={{
            transform: `perspective(1200px) rotateX(65deg) rotateZ(-20deg) translate3d(0, ${mousePos.y * 20}px, 0)`,
            transition: 'transform 0.7s ease-out',
            animationDelay: '1.2s',
            willChange: 'transform',
          }}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[60vh] opacity-[0.1] dark:opacity-[0.06] preserve-3d"
        style={{
          backgroundImage: 'linear-gradient(var(--color-accent-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-500) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top',
          transform: 'perspective(1000px) rotateX(75deg) translateY(100px) scale(3)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
        }}
      />
    </div>
  );
}
