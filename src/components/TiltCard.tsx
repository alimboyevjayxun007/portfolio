import React, {
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  surfaceClassName?: string;
  style?: CSSProperties;
  intensity?: number;
}

const defaultStyle = {
  '--tilt-rotate-x': '0deg',
  '--tilt-rotate-y': '0deg',
  '--tilt-scale': 1,
  '--pointer-x': '50%',
  '--pointer-y': '50%',
  '--glare-opacity': 0,
  '--tilt-shadow':
    '0 26px 50px rgba(15, 23, 42, 0.10), 0 10px 24px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.72)',
} as CSSProperties;

function canUseInteractiveTilt() {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function TiltCard({
  children,
  className = '',
  surfaceClassName = '',
  style,
  intensity = 9,
}: TiltCardProps) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updateTilt = (x: number, y: number, active: boolean) => {
    if (!surfaceRef.current) {
      return;
    }

    if (frameRef.current) {
      window.cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = window.requestAnimationFrame(() => {
      if (!surfaceRef.current) {
        return;
      }

      surfaceRef.current.style.setProperty('--tilt-rotate-x', `${y}deg`);
      surfaceRef.current.style.setProperty('--tilt-rotate-y', `${x}deg`);
      surfaceRef.current.style.setProperty('--tilt-scale', active ? '1.018' : '1');
      surfaceRef.current.style.setProperty('--pointer-x', `${50 + x * 2.4}%`);
      surfaceRef.current.style.setProperty('--pointer-y', `${50 - y * 2.4}%`);
      surfaceRef.current.style.setProperty('--glare-opacity', active ? '0.42' : '0');

      const shadowX = Math.round(x * 1.6);
      const shadowY = Math.round(18 + Math.abs(y) * 2.4);
      const shadowBlur = Math.round(34 + Math.abs(x) * 1.8);
      const shadowSpread = Math.round(Math.abs(x) * -0.3);

      surfaceRef.current.style.setProperty(
        '--tilt-shadow',
        `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px rgba(15, 23, 42, 0.12), 0 10px 22px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.76)`,
      );
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!canUseInteractiveTilt()) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * intensity * 2;
    const rotateX = (0.5 - py) * intensity * 2;

    updateTilt(rotateY, rotateX, true);
  };

  const handleMouseLeave = () => {
    updateTilt(0, 0, false);
  };

  return (
    <div
      className={['tilt-shell', className].filter(Boolean).join(' ')}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={surfaceRef}
        className={['tilt-surface', surfaceClassName].filter(Boolean).join(' ')}
        style={defaultStyle}
      >
        <div className="tilt-glare" />
        <div className="tilt-content">{children}</div>
      </div>
    </div>
  );
}

export default TiltCard;
