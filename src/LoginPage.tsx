import { useState } from 'react';
import loginLogo from './assets/figma/login-logo.svg';
import loginLine from './assets/figma/login-line.svg';
import loginDot from './assets/figma/login-dot.svg';
import loginDotActive from './assets/figma/login-dot-active.svg';
import loginEye from './assets/figma/login-eye.svg';
import loginArrow from './assets/figma/login-arrow.svg';

export default function LoginPage({ onLogin }: { onLogin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ background: '#f7fafb', position: 'relative', width: 430, height: 849, overflow: 'hidden' }}>

      {/* ── trailX heading — x=36, y=58, w=223, h=44 ── */}
      <p style={{ position: 'absolute', left: 36, top: 58, width: 223, height: 44, fontFamily: 'Urbanist, sans-serif', fontSize: 0, lineHeight: 0, color: '#1410b1', margin: 0 }}>
        <span style={{ fontWeight: 500, fontSize: 40, lineHeight: '1.28' }}>trail</span>
        <span style={{ fontWeight: 200, fontStyle: 'italic', fontSize: 40, lineHeight: '1.28' }}>X</span>
      </p>

      {/* ── Big diagonal stripe (background) — rotated 33.77deg ── */}
      <div style={{ position: 'absolute', left: 0, top: 120.5, width: 492.13, height: 731.78, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(33.77deg)', flexShrink: 0 }}>
          <div style={{ background: 'white', border: '1px solid #2254d4', height: 876.32, width: 6 }} />
        </div>
      </div>

      {/* ── Blue stripe cluster (left side, mid) ── */}
      {/* x=-7.11, y=727.72 */}
      <div style={{ position: 'absolute', left: -7.11, top: 727.72, width: 108.75, height: 170.25, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ transform: 'rotate(-31.81deg)' }}><div style={{ background: 'white', border: '1px solid #2254d4', height: 196.63, width: 6 }} /></div>
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
      <div style={{ position: 'absolute', left: 36, top: 208, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(17,70,246,0.7)', border: '1px solid #2254d4', borderRadius: 15 }} />
      {/* label — x=57, y=228 */}
      <p style={{ position: 'absolute', left: 57, top: 228, fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: 'white', lineHeight: '1.28', margin: 0, whiteSpace: 'nowrap' }}>
        Individual Account
      </p>
      {/* arrow — x=369.5, y=238.6, w=13.5, h=8.6 */}
      <div style={{ position: 'absolute', left: 369.5, top: 238.6, width: 13.5, height: 8.6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img alt="" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg) scaleY(-1)' }} src={loginArrow} />
      </div>

      {/* ── Email input — x=36, y=275, w=360, h=51 ── */}
      <div style={{ position: 'absolute', left: 36, top: 275, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(100,135,225,0.2)', border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      {/* email text — x=58, y=293 */}
      <p style={{ position: 'absolute', left: 58, top: 293, fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: '#0c35b8', lineHeight: '1.28', margin: 0 }}>
        Ekwey@gmail.com
      </p>
      {/* cursor line — x=188, y=290, h=20 */}
      <div style={{ position: 'absolute', left: 188, top: 290, width: 1, height: 20 }}>
        <img alt="" style={{ width: '100%', height: '100%' }} src={loginLine} />
      </div>

      {/* ── Password input — x=36, y=342, w=360, h=51 ── */}
      <div style={{ position: 'absolute', left: 36, top: 342, width: 360, height: 51, backdropFilter: 'blur(2px)', background: '#e3eaf7', border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      {/* dots — x=58,75,92,109,126,143 y=364 w=8 h=8 */}
      {[58, 75, 92, 109, 126, 143].map((x, i) => (
        <div key={i} style={{ position: 'absolute', left: x, top: 364, width: 8, height: 8 }}>
          <img alt="" style={{ width: '100%', height: '100%' }} src={i === 4 ? loginDotActive : loginDot} />
        </div>
      ))}
      {/* eye icon — x=353, y=359, w=19.17, h=17 */}
      <div style={{ position: 'absolute', left: 353, top: 359, width: 19.17, height: 17, cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
        <img alt="" style={{ position: 'absolute', width: '100%', height: '100%' }} src={loginEye} />
      </div>

      {/* ── Forgot Password — x=159, y=423, w=116, h=22 ── */}
      <p style={{ position: 'absolute', left: 159, top: 423, width: 116, fontFamily: "'Anek Odia', sans-serif", fontWeight: 500, fontSize: 13, color: '#2254d4', lineHeight: '1.28', margin: 0, cursor: 'pointer' }}>
        Forgot Password?
      </p>

      {/* ── Confirm button — x=36, y=479, w=360, h=72 ── */}
      {/* gradient layer */}
      <div style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: 'linear-gradient(to bottom, #3a36dd, #9f9dff)', border: '1px solid #2254d4', borderRadius: 25 }} />
      {/* solid layer on top */}
      <div
        onClick={onLogin}
        style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: '#1410b1', border: '1px solid #6889dc', borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
      >
        {/* text — x=182, y=507 */}
        <span style={{ fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 20, color: 'white', lineHeight: '22px' }}>Confirm</span>
      </div>

      {/* ── VULUE logo + wordmark — x=174, y=761 ── */}
      <div style={{ position: 'absolute', left: 174, top: 761, width: 27, height: 27 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={loginLogo} />
      </div>
      {/* VULUE text — x=200, y=764, w=57, h=25 */}
      <p style={{ position: 'absolute', left: 200, top: 764, width: 57, height: 25, fontFamily: "'Anek Odia', sans-serif", fontWeight: 200, fontSize: 20, color: '#1410b1', lineHeight: '1.28', margin: 0 }}>
        VULUE
      </p>

    </div>
  );
}
