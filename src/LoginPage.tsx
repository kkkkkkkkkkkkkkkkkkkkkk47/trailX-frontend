import { useState } from 'react';
import loginLogo from './assets/figma/login-logo.png';
import loginLine from './assets/figma/login-line.svg';
import loginDot from './assets/figma/login-dot.svg';
import loginDotActive from './assets/figma/login-dot-active.svg';
import loginEye from './assets/figma/login-eye.svg';
import darkBgEllipse from './assets/figma/dark-bg-ellipse.svg';

export default function LoginPage({ onLogin }: { onLogin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [dark, setDark] = useState(false);

  const bg = dark ? '#1410b1' : '#f7fafb';
  const textPrimary = dark ? 'white' : '#1410b1';
  const textSecondary = dark ? 'white' : '#0c35b8';
  const inputBg = dark ? 'rgba(255,255,255,0.08)' : 'rgba(100,135,225,0.2)';
  const passwordBg = dark ? 'rgba(255,255,255,0.08)' : '#e3eaf7';
  const accountBg = dark ? 'rgba(255,255,255,0.12)' : 'rgba(17,70,246,0.7)';
  const stripeColor = dark ? 'white' : 'white';
  const vulueTxtColor = dark ? 'white' : '#1410b1';

  return (
    <div style={{ background: bg, position: 'relative', width: 430, height: 849, overflow: 'hidden', transition: 'background 0.3s ease' }}>

      {/* ── Dark theme background ellipse glow ── */}
      {dark && (
        <div style={{ position: 'absolute', left: 50, top: -111, width: 466, height: 296, transform: 'rotate(3.39deg)', pointerEvents: 'none', overflow: 'visible' }}>
          <div style={{ position: 'absolute', inset: '-37.12% -22.17%' }}>
            <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={darkBgEllipse} />
          </div>
        </div>
      )}

      {/* ── Theme toggle button — top right ── */}
      <button
        onClick={() => setDark(!dark)}
        style={{ position: 'absolute', right: 20, top: 20, width: 40, height: 40, borderRadius: '50%', border: `1px solid ${dark ? 'rgba(255,255,255,0.3)' : '#2254d4'}`, background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(34,84,212,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}
        aria-label="Toggle theme"
      >
        {dark ? (
          /* Sun icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          /* Moon icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="#2254d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* ── trailX heading — x=36, y=58, w=223, h=44 ── */}
      <p style={{ position: 'absolute', left: 36, top: 58, width: 223, height: 44, fontFamily: 'Urbanist, sans-serif', fontSize: 0, lineHeight: 0, color: textPrimary, margin: 0 }}>
        <span style={{ fontWeight: 500, fontSize: 40, lineHeight: '1.28', color: dark ? 'white' : '#1410b1' }}>Trail</span>
        <span style={{ fontWeight: 200, fontStyle: 'italic', fontSize: 40, lineHeight: '1.28', color: dark ? 'white' : '#1410b1' }}>X</span>
      </p>

      {/* ── Big diagonal stripe (background) — rotated 33.77deg ── */}
      <div style={{ position: 'absolute', left: 0, top: 120.5, width: 492.13, height: 731.78, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(33.77deg)', flexShrink: 0 }}>
          <div style={{ background: stripeColor, border: dark ? 'none' : '1px solid #2254d4', height: 876.32, width: 6 }} />
        </div>
      </div>

      {/* ── Blue stripe cluster (left side, mid) ── */}
      <div style={{ position: 'absolute', left: -7.11, top: 727.72, width: 108.75, height: 170.25, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(-31.81deg)' }}><div style={{ background: stripeColor, border: dark ? 'none' : '1px solid #2254d4', height: 196.63, width: 6 }} /></div>
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

      {/* ── Account type selector — x=36, y=208, w=360, h=51 ── */}
      <div style={{ position: 'absolute', left: 36, top: 208, width: 360, height: 51, backdropFilter: 'blur(2px)', background: accountBg, borderRadius: 15 }} />
      <p style={{ position: 'absolute', left: 57, top: 228, fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: 'white', lineHeight: '1.28', margin: 0, whiteSpace: 'nowrap' }}>
        Individual Account
      </p>
      <div style={{ position: 'absolute', left: 362, top: 233, width: 13.5, height: 8.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6.5 7L12 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* ── Email input — x=36, y=275, w=360, h=51 ── */}
      <div style={{ position: 'absolute', left: 36, top: 275, width: 360, height: 51, backdropFilter: 'blur(2px)', background: inputBg, border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      <p style={{ position: 'absolute', left: 58, top: 293, fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: textSecondary, lineHeight: '1.28', margin: 0 }}>
        Ekwey@gmail.com
      </p>
      <div style={{ position: 'absolute', left: 188, top: 290, width: 1, height: 20 }}>
        <img alt="" style={{ width: '100%', height: '100%' }} src={loginLine} />
      </div>

      {/* ── Password input — x=36, y=342, w=360, h=51 ── */}
      <div style={{ position: 'absolute', left: 36, top: 342, width: 360, height: 51, backdropFilter: 'blur(2px)', background: passwordBg, border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      {[58, 75, 92, 109, 126, 143].map((x, i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: 357, width: 8, height: 8, filter: dark ? 'brightness(0) invert(1)' : 'none' }}>
          <img alt="" style={{ width: '100%', height: '100%' }} src={i === 4 ? loginDotActive : loginDot} />
        </div>
      ))}
      <div style={{ position: 'absolute', left: 353, top: 359, width: 19.17, height: 17, cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
        <img alt="" style={{ position: 'absolute', width: '100%', height: '100%' }} src={loginEye} />
      </div>

      {/* ── Forgot Password — x=159, y=423, w=116, h=22 ── */}
      <p style={{ position: 'absolute', left: 159, top: 423, width: 116, fontFamily: "'Anek Odia', sans-serif", fontWeight: 500, fontSize: 13, color: dark ? 'rgba(255,255,255,0.7)' : '#2254d4', lineHeight: '1.28', margin: 0, cursor: 'pointer' }}>
        Forgot Password?
      </p>

      {/* ── Confirm button — x=36, y=479, w=360, h=72 ── */}
      <div style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: 'linear-gradient(to bottom, #3a36dd, #9f9dff)', border: '1px solid #2254d4', borderRadius: 25 }} />
      <div
        onClick={onLogin}
        style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: dark ? 'white' : '#1410b1', border: `1px solid ${dark ? 'white' : '#6889dc'}`, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      >
        <span style={{ fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 20, color: dark ? '#1410b1' : 'white', lineHeight: '22px' }}>Confirm</span>
      </div>

      {/* ── VULUE logo + wordmark — x=174, y=761 ── */}
      <div style={{ position: 'absolute', left: 174, top: 761, width: 27, height: 27 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={loginLogo} />
      </div>
      <p style={{ position: 'absolute', left: 200, top: 764, width: 57, height: 25, fontFamily: "'Anek Odia', sans-serif", fontWeight: 200, fontSize: 20, color: vulueTxtColor, lineHeight: '1.28', margin: 0 }}>
        VULUE
      </p>

    </div>
  );
}
