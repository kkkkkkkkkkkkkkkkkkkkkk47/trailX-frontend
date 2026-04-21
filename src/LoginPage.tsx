import { useState } from 'react';
import MobileBg from './assets/figma/log in with the web app.png';
import DropdownArrowWhite from './assets/figma/dropdown-arrow-white.svg';

// Asset URLs from Figma
const imgBackgroundLogo = "https://www.figma.com/api/mcp/asset/f567b779-aaed-4273-8fcc-5c5d02f1971d";
const imgEllipse334 = "https://www.figma.com/api/mcp/asset/25e06bb1-6fc8-4e34-a50f-2213bdeda122";
const imgEllipse338 = "https://www.figma.com/api/mcp/asset/829c9675-0345-4b98-9a13-6c9ac54cd384";
const imgVector = "https://www.figma.com/api/mcp/asset/b4f2ff7b-3c41-4444-bfb9-b25e364cc51d";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/f8d5db8c-a867-41d3-804c-b08f2b558ecc";

// Original mobile design: 430x849
// Horizontal: (px / 430) * 100 = vw
// Vertical: (px / 849) * 100 = vh

export default function LoginPage({ onLogin }: { onLogin?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ background: `url(${MobileBg}) left 0px top -30px/100% 100% no-repeat`, position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Log In heading - left: 51px (11.86vw), top: 63px (7.42vh) */}
      <p style={{ 
        position: 'absolute', 
        textTransform: 'capitalize',
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 600, 
        lineHeight: 1.505, 
        left: '11.86vw', 
        fontSize: 'clamp(32px, 9.3vw, 40px)', 
        color: 'white', 
        textAlign: 'left', 
        top: '7.42vh', 
        margin: 0
      }}>
        Log In
      </p>

      {/* No Account yet? Sign Up - left: 51px (11.86vw), top: 173px (20.38vh) */}
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 500, 
        lineHeight: 'normal', 
        left: '11.86vw', 
        color: '#99b2f1', 
        fontSize: 13, 
        textAlign: 'left', 
        top: '20.38vh', 
        margin: 0,
        cursor: 'pointer'
      }}>
        No Account yet? Sign Up
      </p>

      {/* Background glow ellipse - left: 50px (11.63vw), top: -111px */}
      <div style={{ position: 'absolute', display: 'flex', height: '34.81vh', alignItems: 'center', justifyContent: 'center', left: '11.63vw', top: '-13.08vh', width: '108.4vw' }}>
        <div style={{ flexShrink: 0, transform: 'rotate(3.39deg)' }}>
          <div style={{ height: '31.74vh', position: 'relative', width: '104.88vw' }}>
            <div style={{ position: 'absolute', inset: '-37.12% -22.17%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgEllipse9} />
            </div>
          </div>
        </div>
      </div>

      {/* Account type selector - centered, top: 208px (24.5vh) */}
      <div style={{ 
        position: 'absolute',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(2px)', 
        border: '1px solid white', 
        height: 51, 
        left: '50%', 
        opacity: 0.7, 
        borderRadius: 15, 
        top: '24.5vh', 
        width: 'clamp(300px, 83.72vw, 360px)' 
      }} />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        lineHeight: 1.28, 
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 16, 
        textAlign: 'left', 
        color: 'white', 
        top: 'calc(24.5vh + 17px)', 
        whiteSpace: 'nowrap',
        margin: 0,
        width: 'clamp(280px, 80vw, 340px)',
        paddingLeft: 20
      }}>
        Individual Account
      </p>
      {/* Dropdown arrow - clean SVG, 2x bigger */}
      <div style={{ position: 'absolute', right: 'calc(50% - 41.86vw + 20px)', top: 'calc(24.5vh + 11.5px)', width: 28, height: 28 }}>
        <img src={DropdownArrowWhite} alt="" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Email input - centered, top: 275px (32.39vh) */}
      <div style={{ 
        position: 'absolute',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(2px)', 
        background: 'rgba(126,132,135,0.1)', 
        border: '1px solid white', 
        height: 51, 
        left: '50%', 
        opacity: 0.7, 
        borderRadius: 15, 
        top: '32.39vh', 
        width: 'clamp(300px, 83.72vw, 360px)' 
      }} />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        lineHeight: 1.28, 
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: 16, 
        color: 'white', 
        textAlign: 'left', 
        top: 'calc(32.39vh + 17px)', 
        width: 'clamp(280px, 80vw, 340px)',
        paddingLeft: 20,
        margin: 0
      }}>
        Ekwey@gmail.com
      </p>

      {/* Password input - centered, top: 342px (40.28vh) */}
      <div style={{ 
        position: 'absolute',
        transform: 'translateX(-50%)',
        backdropFilter: 'blur(2px)', 
        background: 'rgba(119,123,125,0.1)', 
        border: '1px solid white', 
        height: 51, 
        left: '50%', 
        opacity: 0.7, 
        borderRadius: 15, 
        top: '40.28vh', 
        width: 'clamp(300px, 83.72vw, 360px)' 
      }} />
      
      {/* Password dots - inside password input */}
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 'calc(40.28vh + 21.5px)', display: 'flex', gap: '17px', width: 'clamp(280px, 80vw, 340px)', paddingLeft: 20 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ width: 8, height: 8 }}>
            <img alt="" style={{ display: 'block', width: '100%', height: '100%' }} src={i === 4 ? imgEllipse338 : imgEllipse334} />
          </div>
        ))}
      </div>
      
      {/* Eye icon - right side of password input */}
      <div 
        style={{ position: 'absolute', height: 17, right: 'calc(50% - 41.86vw + 20px)', top: 'calc(40.28vh + 17px)', width: 19.174, cursor: 'pointer' }}
        onClick={() => setShowPassword(!showPassword)}
      >
        <img alt="" style={{ position: 'absolute', display: 'block', inset: 0, maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
      </div>

      {/* Forgot Password - centered, top: 439px (51.71vh) */}
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
        top: '51.71vh', 
        margin: 0,
        cursor: 'pointer'
      }}>
        Forgot Password?
      </p>

      {/* Confirm button background gradient (behind) - centered, top: 479px (56.42vh) */}
      <div style={{ 
        position: 'absolute', 
        background: 'linear-gradient(to bottom, #3a36dd, #9f9dff)', 
        border: '1px solid #2254d4', 
        height: 72, 
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 25, 
        top: '56.42vh', 
        width: 'clamp(240px, 70vw, 300px)'
      }} />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        lineHeight: '22px', 
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#bcbbbb', 
        fontSize: 20, 
        textAlign: 'center', 
        top: 'calc(56.42vh + 28px)', 
        margin: 0
      }}>
        Confirm
      </p>

      {/* Confirm button (front white) - centered, top: 479px (56.42vh) */}
      <div style={{ 
        position: 'absolute', 
        background: 'white', 
        border: '1px solid #6889dc', 
        height: 72, 
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 25, 
        top: '56.42vh', 
        width: 'clamp(300px, 83.72vw, 360px)',
        cursor: 'pointer'
      }}
      onClick={onLogin}
      />
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 400, 
        lineHeight: '22px', 
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#1410b1', 
        fontSize: 20, 
        textAlign: 'center', 
        top: 'calc(56.42vh + 28px)', 
        margin: 0,
        pointerEvents: 'none'
      }}>
        Confirm
      </p>

      {/* VULUE logo and text - left: 174px (40.47vw), top: 761px (89.64vh) - moved up 30px */}
      <div style={{ position: 'absolute', left: '40.47vw', width: 27, height: 27, top: 'calc(89.64vh - 30px)' }}>
        <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', pointerEvents: 'none', width: '100%', height: '100%' }} src={imgBackgroundLogo} />
      </div>
      <p style={{ 
        position: 'absolute', 
        fontFamily: "'Anek Odia', sans-serif", 
        fontWeight: 200, 
        lineHeight: 1.28, 
        left: '46.51vw', 
        fontSize: 20, 
        textAlign: 'left', 
        color: 'white', 
        top: 'calc(90vh - 30px)', 
        margin: 0
      }}>
        VULUE
      </p>

    </div>
  );
}
