import { useEffect, useState } from 'react';
import VuluePage from './VuluePage';
import LoginPage from './LoginPage';

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 1698;
const LOGIN_HEIGHT = 849;

function ScaledPage({ children, designHeight, bg = '#f7fafb' }: { children: React.ReactNode; designHeight: number; bg?: string }) {
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
    <div style={{ width: '100vw', height: '100vh', overflow: designHeight > LOGIN_HEIGHT ? 'auto' : 'hidden', background: bg, display: 'flex', justifyContent: 'center', alignItems: designHeight === LOGIN_HEIGHT ? 'center' : 'flex-start' }}>
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

  if (page === 'login') {
    return <LoginFullScreen onLogin={() => setPage('main')} />;
  }
  return <ScaledPage designHeight={DESIGN_HEIGHT} bg="#eef0f1"><VuluePage /></ScaledPage>;
}

function LoginFullScreen({ onLogin }: { onLogin: () => void }) {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const onResize = () => { setVw(window.innerWidth); setVh(window.innerHeight); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = vw <= 480;

  // Mobile: stretch to fill screen. Desktop: center at natural size.
  const scaleX = isMobile ? vw / 430 : 1;
  const scaleY = isMobile ? vh / 849 : 1;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#1410b1', display: isMobile ? 'block' : 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 430, height: 849, transformOrigin: 'top left', transform: isMobile ? `scale(${scaleX}, ${scaleY})` : 'none', borderRadius: isMobile ? 0 : 24, overflow: 'hidden', flexShrink: 0 }}>
        <LoginPage onLogin={onLogin} />
      </div>
    </div>
  );
}
