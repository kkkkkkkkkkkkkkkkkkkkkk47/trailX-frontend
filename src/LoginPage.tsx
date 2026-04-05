import { useState } from 'react';
import loginLogo from './assets/figma/login-logo.svg';
import loginLine from './assets/figma/login-line.svg';
import loginDot from './assets/figma/login-dot.svg';
import loginDotActive from './assets/figma/login-dot-active.svg';
import loginEye from './assets/figma/login-eye.svg';
import loginArrow from './assets/figma/login-arrow.svg';

// Diagonal decorative stripe
function Stripe({ left, top, color, width = 6, height = 196.6 }: { left: number; top: number; color: string; width?: number; height?: number }) {
  return (
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left, top, width: 108.75, height: 170.25 }}>
      <div style={{ transform: 'rotate(-31.81deg)', flexShrink: 0 }}>
        <div style={{ background: color, height, width }} />
      </div>
    </div>
  );
}

export default function LoginPage({ onLogin }: { onLogin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ background: '#f7fafb', position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>

      {/* ── trailX logo top left ── */}
      <p style={{ position: 'absolute', left: 'calc(50% - 179px)', top: 58, fontFamily: 'Urbanist, sans-serif', fontSize: 0, lineHeight: 0, color: '#1410b1' }}>
        <span style={{ fontWeight: 500, fontSize: 40, lineHeight: '1.28' }}>trail</span>
        <span style={{ fontWeight: 200, fontStyle: 'italic', fontSize: 40, lineHeight: '1.28' }}>X </span>
      </p>

      {/* ── Big diagonal white/blue stripe (top area) ── */}
      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: 0, top: 120.5, width: 492.13, height: 731.78 }}>
        <div style={{ transform: 'rotate(33.77deg)', flexShrink: 0 }}>
          <div style={{ background: 'white', border: '1px solid #2254d4', height: 876.32, width: 6 }} />
        </div>
      </div>

      {/* ── Blue stripe cluster top ── */}
      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -7.11, top: 724.56, width: 108.75, height: 170.25 }}>
        <div style={{ transform: 'rotate(-31.81deg)', flexShrink: 0 }}>
          <div style={{ background: 'white', border: '1px solid #2254d4', height: 196.63, width: 6 }} />
        </div>
      </div>
      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -1, top: 739.58, width: 101.94, height: 162.93 }}>
        <div style={{ transform: 'rotate(-31.81deg)', flexShrink: 0 }}>
          <div style={{ background: '#6874eb', height: 190.72, width: 1.65 }} />
        </div>
      </div>
      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -1, top: 741.58, width: 101.94, height: 162.93 }}>
        <div style={{ transform: 'rotate(-31.81deg)', flexShrink: 0 }}>
          <div style={{ background: '#3746cf', height: 190.72, width: 1.65 }} />
        </div>
      </div>
      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', left: -1, top: 744.58, width: 101.94, height: 162.93 }}>
        <div style={{ transform: 'rotate(-31.81deg)', flexShrink: 0 }}>
          <div style={{ background: '#2434b9', height: 190.72, width: 1.65 }} />
        </div>
      </div>

      {/* ── Bottom stripe cluster ── */}
      <Stripe left={-14.11} top={1328.56} color="#d9d9d9" />
      <Stripe left={-8} top={1343.58} color="#4f59bb" width={1.65} height={190.72} />
      <Stripe left={-8} top={1345.58} color="#28307e" width={1.65} height={190.72} />
      <Stripe left={-8} top={1348.58} color="#161f71" width={1.65} height={190.72} />
      <Stripe left={-8.11} top={1343.56} color="#d9d9d9" />
      <Stripe left={-2} top={1358.58} color="#4f59bb" width={1.65} height={190.72} />
      <Stripe left={-2} top={1360.58} color="#28307e" width={1.65} height={190.72} />
      <Stripe left={-2} top={1363.58} color="#161f71" width={1.65} height={190.72} />

      {/* ── Account type selector ── */}
      <div style={{ position: 'absolute', left: 'calc(50% + 1px)', transform: 'translateX(-50%)', top: 208, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(17,70,246,0.7)', border: '1px solid #2254d4', borderRadius: 15 }} />
      <p style={{ position: 'absolute', left: 'calc(50% - 158px)', top: 'calc(50% - 196.5px)', fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: 'white', lineHeight: '1.28', whiteSpace: 'nowrap' }}>
        Individual Account
      </p>
      {/* Arrow down */}
      <div style={{ position: 'absolute', inset: '27.09% 14.07% 71.89% 82.79%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img alt="" style={{ width: 8.6, height: 13.5, transform: 'rotate(-90deg) scaleY(-1)' }} src={loginArrow} />
      </div>

      {/* ── Email input ── */}
      <div style={{ position: 'absolute', left: 'calc(50% + 1px)', transform: 'translateX(-50%)', top: 275, width: 360, height: 51, backdropFilter: 'blur(2px)', background: 'rgba(100,135,225,0.2)', border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      <p style={{ position: 'absolute', left: 'calc(50% - 157px)', top: 'calc(50% - 131.5px)', fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 16, color: '#0c35b8', lineHeight: '1.28' }}>
        Ekwey@gmail.com
      </p>
      {/* Cursor */}
      <div style={{ position: 'absolute', left: 188, top: 290, width: 0, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(90deg)', flexShrink: 0 }}>
          <div style={{ height: 0, position: 'relative', width: 20 }}>
            <div style={{ position: 'absolute', inset: '-1px 0 0 0' }}>
              <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={loginLine} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Password input ── */}
      <div style={{ position: 'absolute', left: 'calc(50% + 1px)', transform: 'translateX(-50%)', top: 342, width: 360, height: 51, backdropFilter: 'blur(2px)', background: '#e3eaf7', border: '1px solid white', borderRadius: 15, opacity: 0.7 }} />
      {/* Password dots */}
      {[
        { left: 'calc(50% - 153px)' },
        { left: 'calc(50% - 136px)' },
        { left: 'calc(50% - 119px)' },
        { left: 'calc(50% - 102px)' },
        { left: 'calc(50% - 85px)' },
        { left: 'calc(50% - 68px)' },
      ].map((d, i) => (
        <div key={i} style={{ position: 'absolute', left: d.left, top: 'calc(50% - 56.5px)', transform: 'translate(-50%, -50%)', width: 8, height: 8 }}>
          <img alt="" style={{ width: '100%', height: '100%' }} src={i === 4 ? loginDotActive : loginDot} />
        </div>
      ))}
      {/* Eye icon */}
      <div style={{ position: 'absolute', left: 353, top: 359, width: 19.17, height: 17, cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
        <img alt="" style={{ position: 'absolute', width: '100%', height: '100%' }} src={loginEye} />
      </div>

      {/* ── Forgot password ── */}
      <p style={{ position: 'absolute', left: 'calc(50% - 56px)', top: 423, fontFamily: "'Anek Odia', sans-serif", fontWeight: 500, fontSize: 13, color: '#2254d4', lineHeight: '1.28', cursor: 'pointer' }}>
        Forgot Password?
      </p>

      {/* ── Confirm button ── */}
      <div style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: 'linear-gradient(to bottom, #3a36dd, #9f9dff)', border: '1px solid #2254d4', borderRadius: 25 }} />
      <div style={{ position: 'absolute', left: 36, top: 479, width: 360, height: 72, background: '#1410b1', border: '1px solid #6889dc', borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={onLogin}>
        <span style={{ fontFamily: "'Anek Odia', sans-serif", fontWeight: 400, fontSize: 20, color: 'white', lineHeight: '22px' }}>Confirm</span>
      </div>

      {/* ── VULUE logo + icon bottom ── */}
      <div style={{ position: 'absolute', left: 174, top: 761, width: 27, height: 27 }}>
        <img alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={loginLogo} />
      </div>
      <p style={{ position: 'absolute', left: 200, top: 764, fontFamily: "'Anek Odia', sans-serif", fontWeight: 200, fontSize: 20, color: '#1410b1', lineHeight: '1.28' }}>
        VULUE
      </p>

    </div>
  );
}
