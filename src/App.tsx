import { useEffect, useState } from 'react';
import VuluePage from './VuluePage';
import LoginPage from './LoginPage';
import DesktopLoginPage from './DesktopLoginPage';

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 1698;
const LOGIN_HEIGHT = 849;
const DESKTOP_BREAKPOINT = 480;

function ScaledPage({ children, designHeight, scrollable = false, bg = '#f7fafb' }: { children: React.ReactNode; designHeight: number; scrollable?: boolean; bg?: string }) {
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
    <div style={{ width: '100vw', height: '100vh', overflow: scrollable ? 'auto' : 'hidden', background: bg, display: 'flex', justifyContent: 'center', alignItems: scrollable ? 'flex-start' : 'center' }}>
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
  const [activeTab, setActiveTab] = useState('FX');
  const [eventCardsBottom, setEventCardsBottom] = useState(1532); // 706+226+10+190+10+190+10+190

  if (page === 'login') {
    return <LoginFullScreen onLogin={() => setPage('main')} />;
  }
  // Event Contracts: base 1100px + 382px per expanded card (4 cards collapsed = ~1100, all expanded = ~2628)
  const designHeight = activeTab === 'Event Contracts'
    ? eventCardsBottom + 100
    : DESIGN_HEIGHT;
  return <ScaledPage designHeight={designHeight} scrollable bg="#eef0f1"><VuluePage onTabChange={setActiveTab} onEventExpandedChange={setEventCardsBottom} /></ScaledPage>;
}

function LoginFullScreen({ onLogin }: { onLogin: () => void }) {
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => { setVw(window.innerWidth); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isDesktop = vw >= DESKTOP_BREAKPOINT;

  if (isDesktop) {
    // Desktop: full viewport, no scaling
    return (
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <DesktopLoginPage onLogin={onLogin} />
      </div>
    );
  }

  // Mobile: full viewport, no scaling
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <LoginPage onLogin={onLogin} />
    </div>
  );
}
