import { useState } from 'react';
import DesktopBg from './assets/figma/Desktop - 34 .png';
import PasswordDotWhite from './assets/figma/password-dot-white.svg';
import DropdownArrowWhite from './assets/figma/dropdown-arrow-white.svg';

// Asset URLs from Figma
const imgBackgroundLogo = "https://www.figma.com/api/mcp/asset/334917ef-26ba-400f-8f1e-cf0298f164cc";
const imgArrow15 = "https://www.figma.com/api/mcp/asset/ed763e9c-ff78-4ef1-b599-64fae883d5cc";
const imgVector = "https://www.figma.com/api/mcp/asset/e935f96d-55b7-4f47-be0c-911aa921fe39";

// Original Figma design: 1447x855
// Convert pixel positions to viewport percentages
// Horizontal: (px / 1447) * 100 = vw
// Vertical: (px / 855) * 100 = vh

export default function DesktopLoginPage({ onLogin }: { onLogin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ 
      background: `url(${DesktopBg}) center top/100% 100% no-repeat`, 
      position: 'relative', 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden' 
    }}>
      
      {/* Log in heading - left: 114.5px (7.91vw), top: 116px (13.57vh) */}
      <p style={{ 
        position: 'absolute', 
        transform: 'translateX(-50%)',
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 600, 
        lineHeight: 1.4, 
        left: '7.91vw', 
        color: '#ebf0ff', 
        fontSize: 'clamp(32px, 3.32vw, 48px)', 
        textAlign: 'center', 
        top: '13.57vh', 
        width: 'clamp(90px, 9.05vw, 131px)',
        margin: 0
      }}>
        Log in
      </p>

      {/* Back arrow - left: 53.3px (3.68vw), top: 60.82px (7.11vh) */}
      <div style={{ position: 'absolute', display: 'flex', height: 0, alignItems: 'center', justifyContent: 'center', left: '3.68vw', top: '7.11vh', width: 22 }}>
        <div style={{ flexShrink: 0, transform: 'rotate(180deg)' }}>
          <div style={{ height: 0, position: 'relative', width: 22 }}>
            <div style={{ position: 'absolute', inset: '-7.36px -4.55% -7.36px 0' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgArrow15} />
            </div>
          </div>
        </div>
      </div>

      {/* Account type selector - centered at 50%, top: 214px (25.03vh) */}
      <div style={{ 
        position: 'absolute',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(2px)', 
        border: '1px solid white', 
        height: 51, 
        left: 'calc(50% - 0.86vw)', 
        opacity: 0.7, 
        borderRadius: 15, 
        top: '25.03vh', 
        width: 'clamp(300px, 33.31vw, 482px)' 
      }} />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        lineHeight: 1.28, 
        left: 'calc(50% - 16.07vw)', 
        fontSize: 16, 
        textAlign: 'left', 
        color: 'white', 
        top: 'calc(25.03vh + 20px)', 
        whiteSpace: 'nowrap',
        margin: 0
      }}>
        Individual Account
      </p>
      
      {/* Dropdown arrow - positioned on the right side of account selector, 2x bigger and moved left 10px */}
      <div style={{ position: 'absolute', right: 'calc(50% - 16.65vw + 30px)', top: 'calc(25.03vh + 11.5px)', width: 28, height: 28 }}>
        <img src={DropdownArrowWhite} alt="" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Email input - 10px gap from account selector (214 + 51 + 10 = 275px) */}
      <div style={{ 
        position: 'absolute',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(2px)', 
        background: 'rgba(126,132,135,0.1)', 
        border: '1px solid white', 
        height: 51, 
        left: 'calc(50% - 0.86vw)', 
        opacity: 0.7, 
        borderRadius: 15, 
        top: 'calc(25.03vh + 51px + 10px)', 
        width: 'clamp(300px, 33.31vw, 482px)' 
      }} />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        height: 17, 
        lineHeight: 1.28, 
        left: 'calc(50% - 16vw)', 
        fontSize: 16, 
        color: 'white', 
        textAlign: 'left', 
        top: 'calc(25.03vh + 51px + 10px + 18px)', 
        width: 125,
        margin: 0
      }}>
        Ekwey@gmail.com
      </p>

      {/* Password input - 10px gap from email input (275 + 51 + 10 = 336px) */}
      <div style={{ 
        position: 'absolute',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(2px)', 
        background: 'rgba(119,123,125,0.1)', 
        border: '1px solid white', 
        height: 51, 
        left: 'calc(50% - 0.86vw)', 
        opacity: 0.7, 
        borderRadius: 15, 
        top: 'calc(25.03vh + 51px + 10px + 51px + 10px)', 
        width: 'clamp(300px, 33.31vw, 482px)' 
      }}>
        {/* Password dots - positioned inside the input box */}
        <div style={{ position: 'absolute', display: 'flex', gap: '17px', left: '20px', top: '50%', transform: 'translateY(-50%)' }}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <img key={i} src={PasswordDotWhite} alt="" style={{ width: 8, height: 8, flexShrink: 0 }} />
          ))}
        </div>
      </div>
      
      {/* Eye icon - right side of password input, moved 10px left */}
      <div 
        style={{ position: 'absolute', height: 17, right: 'calc(50% - 16.65vw + 30px)', top: 'calc(25.03vh + 51px + 10px + 51px + 10px + 17px)', width: 19.174, cursor: 'pointer' }}
        onClick={() => setShowPassword(!showPassword)}
      >
        <img alt="" style={{ position: 'absolute', display: 'block', inset: 0, maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
      </div>

      {/* No Account yet? Sign Up - positioned below password input */}
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 500, 
        lineHeight: 'normal', 
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#99b2f1', 
        fontSize: 13, 
        textAlign: 'center', 
        top: 'calc(25.03vh + 51px + 10px + 51px + 10px + 51px + 10px)', 
        width: 137,
        margin: 0,
        cursor: 'pointer'
      }}>
        No Account yet? Sign Up
      </p>

      {/* Confirm button background gradient (behind) - centered and responsive */}
      <div style={{ 
        position: 'absolute', 
        background: 'linear-gradient(to bottom, #3a36dd, #9f9dff)', 
        border: '1px solid #2254d4', 
        height: 72, 
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 25, 
        top: 'calc(56.96vh + 10px)', 
        width: 'clamp(240px, 24.88vw, 360px)'
      }} />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        height: 13, 
        lineHeight: '22px', 
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#bcbbbb', 
        fontSize: 20, 
        textAlign: 'center', 
        top: 'calc(56.96vh + 10px + 28px)', 
        width: 73,
        margin: 0
      }}>
        Confirm
      </p>

      {/* Confirm button (front white) - centered and responsive */}
      <div style={{ 
        position: 'absolute', 
        background: 'white', 
        border: '1px solid #6889dc', 
        height: 72, 
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 25, 
        top: 'calc(56.96vh + 10px)', 
        width: 'clamp(300px, 33.31vw, 482px)',
        cursor: 'pointer'
      }}
      onClick={onLogin}
      />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        height: 13, 
        lineHeight: '22px', 
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#1410b1', 
        fontSize: 20, 
        textAlign: 'center', 
        top: 'calc(56.96vh + 10px + 28px)', 
        width: 73,
        margin: 0,
        pointerEvents: 'none'
      }}>
        Confirm
      </p>

      {/* Forgot Password - centered, top: 598px (69.94vh) + 10px */}
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 500, 
        lineHeight: 'normal', 
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#4e74d6', 
        fontSize: 13, 
        textAlign: 'center', 
        top: 'calc(69.94vh + 10px)', 
        width: 102,
        margin: 0,
        cursor: 'pointer'
      }}>
        Forgot Password?
      </p>

      {/* VULUE logo and text - right: 3%, top: 55px (6.43vh) */}
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 200, 
        height: 25, 
        lineHeight: 1.28, 
        right: '3%', 
        fontSize: 20, 
        textAlign: 'left', 
        color: 'white', 
        top: '6.43vh', 
        width: 57,
        margin: 0
      }}>
        VULUE
      </p>
      <div style={{ position: 'absolute', right: 'calc(3% + 65px)', width: 34, height: 34, top: '5.61vh' }}>
        <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', pointerEvents: 'none', width: '100%', height: '100%' }} src={imgBackgroundLogo} />
      </div>

    </div>
  );
}
