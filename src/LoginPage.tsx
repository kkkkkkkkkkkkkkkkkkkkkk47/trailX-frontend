import { useState } from 'react';
import loginLogo from './assets/figma/login-logo.png';
import loginLine from './assets/figma/login-line.svg';
import loginDot from './assets/figma/login-dot.svg';
import loginDotActive from './assets/figma/login-dot-active.svg';
import loginEye from './assets/figma/login-eye.svg';
import darkBgEllipse from './assets/figma/dark-bg-ellipse.svg';

export default function LoginPage({ onLogin }: { onLogin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ background: '#1410b1', position: 'relative', width: 430, height: 849, overflow: 'hidden' }}>

      {/* ── Background ellipse glow ── */}
      <div style={{ position: 'absolute', left: 50, top: -111, width: 466, height: 296, transform: 'rotate(3.39deg)', pointerEvents: 'none', overflow: 'visible' }}>
        <div style={{ position: 'absolute', inset: '-37.12% -22.17%' }}>
          <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={darkBgEllipse} />
        </div>
      </div>

      {/* ── trailX heading ── */}
      <p style={{ position: 'absolute', left: 36, top: 58, width: 223, height: 44, fontFamily: 'Urbanist, sans-serif', fontSize: 0, lineHeight: 0, color: 'white', margin: 0 }}>
        <span style={{ fontWeight: 500, fontSize: 40, lineHeight: '1.28' }}>Trail</span>
        <span style={{ fontWeight: 200, fontStyle: 'italic', fontSize: 40, lineHeight: '1.28' }}>X</span>
      </p>

      {/* ── Big diagonal stripe ── */}
      <div style={{ position: 'absolute', left: 0, top: 120.5, width: 492.13, height: 731.78, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(33.77deg)', flexShrink: 0 }}>
          <div style={{ background: 'white', height: 876.32, width: 6 }} />
        </div>
      </div>

      {/* ── Blue stripe cluster ── */}
      <div style={{ position: 'absolute', left: -7.11, top: 727.72, width: 108.75, height: 170.25, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(-31.81deg)' }}><div style={{ background: 'white', height: 196.63, width: 6 }} /></div>
      </div>
      <div style={{ position: 'absolute', left: -1, top: 740.45, width: 101.94, height: 162.93, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(-31.81deg)' }}><div style={{ background: '#6874eb', height: 190.72, width: 1.65 }} /></div>
      </div>
      <div style={{ position: 'absolute', left: -1, top: 742.45, width: 101.94, height: 162.93, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(-31.81deg)' }}><div style={{ background: '#3746cf', height: 190.72, width: 1.65 }} /></div>
      </div>
      <div style={{ position: 'absolute', left: -1, top: 745.45, width: 101.94, height: 162.93, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(-31.81deg)' }}><div style={{ background: '#2434b9', height: 190.72, width: 1.65 }} /></div>
      </div>

      {/* ── Account type selector ── */}
      <div style={{ position: 'absolute', left: 36, top: 208, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.12)', borderRadius: 15 }} />
      <p style={{ position: 'absolute', left: 57, top: 228, fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: 'white', lineHeight: '1.28', margin: 0, whiteSpace: 'nowrap' }}>
        Individual Account
      </p>
      <div style={{ position: 'absolute', left: 362, top: 233, width: 13.5, height: 8.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6.5 7L12 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* ── Email input ── */}
      <div style={{ position: 'absolute', left: 36, top: 275, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.08)', border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      <p style={{ position: 'absolute', left: 58, top: 293, fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: 'white', lineHeight: '1.28', margin: 0 }}>
        Ekwey@gmail.com
      </p>
      <div style={{ position: 'absolute', left: 188, top: 290, width: 1, height: 20 }}>
        <img alt="" style={{ width: '100%', height: '100%' }} src={loginLine} />
      </div>

      {/* ── Password input ── */}
      <div style={{ position: 'absolute', left: 36, top: 342, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.08)', border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      {[58, 75, 92, 109, 126, 143].map((x, i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: 357, width: 8, height: 8, filter: 'brightness(0) invert(1)' }}>
          <img alt="" style={{ width: '100%', height: '100%' }} src={i === 4 ? loginDotActive : loginDot} />
        </div>
      ))}
      <div style={{ position: 'absolute', left: 353, top: 359, width: 19.17, height: 17, cursor: 'pointer', filter: 'brightness(0) invert(1)' }} onClick={() => setShowPassword(!showPassword)}>
        <img alt="" style={{ position: 'absolute', width: '100%', height: '100%' }} src={loginEye} />
      </div>

      {/* ── Forgot Password ── */}
      <p style={{ position: 'absolute', left: 159, top: 423, width: 116, fontFamily: "'Anek Odia', sans-serif", fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: '1.28', margin: 0, cursor: 'pointer' }}>
        Forgot Password?
      </p>

      {/* ── Confirm button ── */}
      <div style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: 'linear-gradient(to bottom, #3a36dd, #9f9dff)', border: '1px solid #2254d4', borderRadius: 25 }} />
      <div onClick={onLogin} style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: 'white', border: '1px solid white', borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <span style={{ fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 20, color: '#1410b1', lineHeight: '22px' }}>Confirm</span>
      </div>

      {/* ── VULUE logo + wordmark ── */}
      <div style={{ position: 'absolute', left: 174, top: 761, width: 27, height: 27 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={loginLogo} />
      </div>
      <p style={{ position: 'absolute', left: 200, top: 764, width: 57, height: 25, fontFamily: "'Anek Odia', sans-serif", fontWeight: 200, fontSize: 20, color: 'white', lineHeight: '1.28', margin: 0 }}>
        VULUE
      </p>

    </div>
  );
}
