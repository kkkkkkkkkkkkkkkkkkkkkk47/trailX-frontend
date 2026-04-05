import { useEffect, useState } from 'react';
import VuluePage from './VuluePage';
import LoginPage from './LoginPage';

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 1698;
const LOGIN_HEIGHT = 849;

function ScaledPage({ children, designHeight }: { children: React.ReactNode; designHeight: number }) {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Scale to fill width on mobile, cap at 1 on desktop
  const scaleByWidth = Math.min(1, vw / DESIGN_WIDTH);
  const scaleByHeight = Math.min(1, vh / designHeight);
  const scale = designHeight === LOGIN_HEIGHT
    ? Math.min(scaleByWidth, scaleByHeight)
    : scaleByWidth;

  const scaledW = DESIGN_WIDTH * scale;
  const scaledH = designHeight * scale;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: designHeight > LOGIN_HEIGHT ? 'auto' : 'hidden', background: '#f7fafb', display: 'flex', justifyContent: 'center', alignItems: designHeight === LOGIN_HEIGHT ? 'center' : 'flex-start' }}>
      <div style={{ width: scaledW, height: scaledH, position: 'relative', flexShrink: 0 }}>
        <div style={{ width: DESIGN_WIDTH, height: designHeight, position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<'login' | 'main'>('login');

  return page === 'login'
    ? <ScaledPage designHeight={LOGIN_HEIGHT}><LoginPage onLogin={() => setPage('main')} /></ScaledPage>
    : <ScaledPage designHeight={DESIGN_HEIGHT}><VuluePage /></ScaledPage>;
}
