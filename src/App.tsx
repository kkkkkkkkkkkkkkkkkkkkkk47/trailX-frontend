import { useEffect, useState } from 'react';
import VuluePage from './VuluePage';
import LoginPage from './LoginPage';

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 1579;

function ScaledPage({ children, height = DESIGN_HEIGHT }: { children: React.ReactNode; height?: number }) {
  const [scale, setScale] = useState(() => Math.min(1, window.innerWidth / DESIGN_WIDTH));

  useEffect(() => {
    const onResize = () => setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#f7fafb' }}>
      <div style={{ width: DESIGN_WIDTH * scale, height: height * scale, position: 'relative', margin: '0 auto' }}>
        <div style={{ width: DESIGN_WIDTH, height, position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<'login' | 'main'>('login');

  return page === 'login'
    ? <ScaledPage height={849}><LoginPage onLogin={() => setPage('main')} /></ScaledPage>
    : <ScaledPage height={DESIGN_HEIGHT}><VuluePage /></ScaledPage>;
}
