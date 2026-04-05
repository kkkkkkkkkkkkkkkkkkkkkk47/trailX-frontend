import { useState, useRef } from 'react';
import {
  Rectangle1040, Vector, Rectangle1556, Group4802, Group4941,
  Ellipse371, Vector1, Arrow26, Ellipse353, Ellipse354,
  Group4951, Line160, Ellipse243, Vector2, Group4957,
  Vector4, Line7Stroke, Line7Stroke1,
  IconCalendar, Group4794, Vector5, Arrow29, Ellipse372,
  Polygon19, Group4968, Vector6, Arrow28, Line7Stroke2,
  Group4987, NgxLogo, Group4984,
  UsStocks, LseStocks, EuronextStocks, JpxStocks, HkStocks, PolandStocks, FrankfurtStocks,
} from './assets/figma/index';

type Tab = 'FX' | 'Metals' | 'Energies' | 'Indices' | 'Bonds' | 'Equities' | 'Equities CFDs' | 'ETF CFDs' | 'Event Contracts';

const tabData: Record<Tab, { subAccount: string; balance: string; holdings: string; todayReturn: string; totalReturn: string; marketValue: string; floatingPnL: string }> = {
  'FX':             { subAccount: 'FX CFDs',          balance: '$783.01', holdings: '1', todayReturn: '10.71%', totalReturn: '42.85%', marketValue: '$28', floatingPnL: '42.85%' },
  'Metals':         { subAccount: 'Metals CFDs',       balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'Energies':       { subAccount: 'Energies CFDs',     balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'Indices':        { subAccount: 'Indices CFDs',      balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'Bonds':          { subAccount: 'Nigeria Bonds',        balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'Equities':       { subAccount: 'Equities',          balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'Equities CFDs':  { subAccount: 'Equities CFDs',     balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'ETF CFDs':       { subAccount: 'ETF CFDs',          balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
  'Event Contracts':{ subAccount: 'Event Contracts',   balance: '$0.0',    holdings: '0', todayReturn: '0%',     totalReturn: '0%',     marketValue: '$0',  floatingPnL: '0.0%'   },
};

export default function VuluePage() {
  const [activeTab, setActiveTab] = useState<Tab>('FX');
  const [cardExpanded, setCardExpanded] = useState(true);
  const [bondIndex, setBondIndex] = useState(0);
  const touchStartX = useRef(0);
  const bondSubAccounts = [
    { name: 'Nigeria Bonds', flag: 'NG' },
    { name: 'US Bonds & Bond CFDs', flag: 'US' },
    { name: 'Brazil Bonds', flag: 'BR' },
    { name: 'Poland Bonds', flag: 'PL' },
    { name: 'S. Africa Bonds', flag: 'ZA' },
    { name: 'UAE Bonds', flag: 'AE' },
  ];
  const currentBond = bondSubAccounts[bondIndex];
  const [equityIndex, setEquityIndex] = useState(0);
  const equitySubAccounts = [
    { name: 'NGX Stocks',             logo: NgxLogo },
    { name: 'US Stocks',              logo: UsStocks },
    { name: 'LSE Stocks',             logo: LseStocks },
    { name: 'EuroNext Stocks',        logo: EuronextStocks },
    { name: 'JPX Stocks',             logo: JpxStocks },
    { name: 'Hong Kong Stocks',       logo: HkStocks },
    { name: 'Poland Stocks',          logo: PolandStocks },
    { name: 'Frankfurt Exotic Stocks',logo: FrankfurtStocks },
  ];
  const currentEquity = equitySubAccounts[equityIndex];
  const [equityCfdIndex, setEquityCfdIndex] = useState(0);
  const equityCfdSubAccounts = [
    { name: 'US Stock CFDs',        logo: UsStocks },
    { name: 'Hong Kong Stock CFDs', logo: HkStocks },
    { name: 'UAE Stock CFDs',       logo: null },
  ];
  const currentEquityCfd = equityCfdSubAccounts[equityCfdIndex];
  const [eventExpandedIndex, setEventExpandedIndex] = useState(0);
  const eventContracts = [
    'Crypto Events Contracts',
    'Economics Events Contracts',
    'Financials Events Contracts',
    'IPOs Events Contracts',
  ];
  const data = tabData[activeTab];
  const yOffset = cardExpanded ? 0 : -157;
  const noDelayedRow = ['FX', 'Metals', 'Energies', 'Indices'].includes(activeTab);
  const cardOffset = noDelayedRow ? -44 : 0;
  return (
    <div style={{ background: '#eef0f1', position: 'relative', width: '100%', height: '100%' }}>

      {/* Your NG Funding Balance */}
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.28, left: 'calc(50% - 194.5px)', color: '#22282c', fontSize: 10, top: 86, whiteSpace: 'nowrap' }}>
        Your NG Funding Balance
      </p>

      {/* ₦395,680.24 */}
      <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 600, lineHeight: 0, left: 20.5, color: '#1f2427', fontSize: 0, top: 117, letterSpacing: '-0.32px', whiteSpace: 'nowrap', fontStyle: 'normal' }}>
        <span style={{ lineHeight: '34px', fontSize: 36, fontWeight: 600, position: 'relative', bottom: 0 }}>₦</span>
        <span style={{ fontFamily: 'Anek Odia, sans-serif', fontWeight: 600, lineHeight: '34px', fontSize: 36 }}>395,680</span>
        <span style={{ fontFamily: 'Anek Odia, sans-serif', fontWeight: 600, lineHeight: '34px', fontSize: 32 }}>.</span>
        <span style={{ fontFamily: 'Anek Odia, sans-serif', fontWeight: 600, lineHeight: '34px', fontSize: 20 }}>24</span>
      </p>

      {/* Top Up pill — x=20, y=181, w=125.6, h=46 */}
      <div style={{ position: 'absolute', background: 'white', height: 46, left: 20, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 181, width: 125.592 }} />
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 'calc(50% - 142.14px)', color: '#2254d4', fontSize: 13, top: 196, width: 53.349 }}>Top Up</p>

      {/* Withdraw pill — x=154.26, y=181, w=125.6, h=46 */}
      <div style={{ position: 'absolute', background: 'white', height: 46, left: 154.26, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 181, width: 125.592 }} />
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 'calc(50% - 10.97px)', color: '#2254d4', fontSize: 13, top: 196, width: 60.017 }}>Withdraw</p>

      {/* Separator bar between Top Up / Withdraw */}
      <div style={{ position: 'absolute', display: 'flex', height: 2, alignItems: 'center', justifyContent: 'center', left: 176.48, top: 203, width: 14.418 }}>
        <div style={{ transform: 'rotate(-90deg)', flex: 'none' }}>
          <div style={{ height: 14.418, position: 'relative', width: 2 }}>
            <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Rectangle1040} />
          </div>
        </div>
      </div>

      {/* Wallets pill — x=289, y=181, w=122, h=46 */}
      <div style={{ position: 'absolute', background: 'white', height: 46, left: 289, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 181, width: 122 }} />
      {/* Wallet card icon */}
      <a style={{ position: 'absolute', display: 'contents', cursor: 'pointer', left: 364, top: 192 }}>
        <div style={{ position: 'absolute', border: '1px solid #2254d4', height: 24, left: 364, opacity: 0.4, borderRadius: 6, top: 192, width: 29.454 }} />
        <div style={{ position: 'absolute', background: '#2254d4', border: '1px solid white', height: 23.04, left: 364.95, borderRadius: 5, top: 192.96, width: 28.504 }} />
        <div style={{ position: 'absolute', background: 'white', border: '0.5px solid #a7bbee', height: 3.84, left: 384.9, borderRadius: 3, top: 200.64, width: 3.801 }} />
      </a>
      {/* Bell/arrow icon */}
      <div style={{ position: 'absolute', left: 39.6, top: 196, width: 14.4, height: 14 }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector} />
      </div>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, height: 12, lineHeight: 1.29, left: 'calc(50% + 93px)', color: '#2254d4', fontSize: 13, top: 196, width: 42 }}>Wallets</p>

      {/* View-filled icons */}
      <div style={{ position: 'absolute', display: 'contents', left: 140, top: 83 }}>
        <div style={{ position: 'absolute', display: 'contents', left: 140, top: 83 }}>
          <div style={{ position: 'absolute', height: 15, left: 140, overflow: 'clip', top: 83, width: 11.806 }}>
            <div style={{ position: 'absolute', border: '0.2px solid #22282c', inset: '22.22% 27.56% 22.22% 27.99%', borderRadius: 1 }} />
            <div style={{ position: 'absolute', background: '#22282c', border: '0.2px solid #22282c', inset: '22.22% 38.67% 22.22% 27.99%', borderRadius: 1 }} />
            <div style={{ position: 'absolute', background: 'white', inset: '22.22% 60.89% 55.56% 27.99%', borderRadius: 1 }} />
          </div>
          <div style={{ position: 'absolute', height: 15, left: 147.19, overflow: 'clip', top: 83, width: 11.806 }}>
            <div style={{ position: 'absolute', border: '0.2px solid #22282c', inset: '22.22% 27.56% 22.22% 27.99%', borderRadius: 1 }} />
            <div style={{ position: 'absolute', background: '#22282c', border: '0.2px solid #22282c', inset: '22.22% 38.67% 22.22% 27.99%', borderRadius: 1 }} />
            <div style={{ position: 'absolute', background: 'white', inset: '22.22% 60.89% 55.56% 27.99%', borderRadius: 1 }} />
          </div>
        </div>
      </div>

      {/* Earn card — x=20, y=298, w=260, h=64 */}
      <div style={{ position: 'absolute', display: 'contents', left: 20, top: 298 }}>
        <div style={{ position: 'absolute', display: 'contents', left: 20, top: 298 }}>
          <div style={{ position: 'absolute', height: 64, left: 20, overflow: 'clip', top: 298, width: 260 }}>
            <div style={{ position: 'absolute', height: 64, left: 1, top: 0, width: 258 }}>
              <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Rectangle1556} />
            </div>
            <div style={{ position: 'absolute', display: 'flex', height: 141.146, alignItems: 'center', justifyContent: 'center', left: 123.19, top: -2.45, width: 139.5 }}>
              <div style={{ flex: 'none', transform: 'rotate(-178.18deg)' }}>
                <div style={{ height: 136.928, position: 'relative', width: 135.226 }}>
                  <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4802} />
                </div>
              </div>
            </div>
            <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, height: 12, lineHeight: 1.29, left: 'calc(50% - 77px)', fontSize: 13, color: 'white', top: 24, width: 28 }}>Earn</p>
          </div>
        </div>
      </div>

      {/* Details dark card — x=286, y=298, w=125, h=64 */}
      <div style={{ position: 'absolute', background: '#111419', height: 64, left: 286, borderRadius: 25, top: 298, width: 125 }} />
      <div style={{ position: 'absolute', height: 19, left: 301, top: 320, width: 19.047 }}>
        <div style={{ position: 'absolute', inset: '0 -26.15% -42.11% -15.75%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4941} />
        </div>
      </div>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, height: 12, lineHeight: 1.29, left: 'calc(50% + 127px)', fontSize: 13, color: '#ebf0ff', top: 321, width: 47 }}>Details</p>

      {/* Notification dot */}
      <div style={{ position: 'absolute', left: 377.52, width: 3, height: 3, top: 60.91 }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Ellipse371} />
      </div>

      {/* Bell icon vector — centered inside the 32x32 bg at left:363 */}
      <div style={{ position: 'absolute', left: 363, top: 40, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img alt="" style={{ width: 11.9, height: 12.7 }} src={Vector1} />
      </div>

      {/* Notification bell bg */}
      <div style={{ position: 'absolute', background: '#22344e', border: '1px solid #404649', left: 363, opacity: 0.25, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.5)', width: 32, height: 32, top: 40 }} />

      {/* Internal Transfer pill — x=20, y=235, w=156, h=47 */}
      <div style={{ position: 'absolute', background: 'white', height: 47, left: 20, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 235, width: 156 }} />
      <div style={{ position: 'absolute', display: 'flex', height: 10.141, alignItems: 'center', justifyContent: 'center', left: 40.16, top: 253, width: 9.84 }}>
        <div style={{ flex: 'none', transform: 'rotate(-45.86deg)' }}>
          <div style={{ height: 0, position: 'relative', width: 14.13 }}>
            <div style={{ position: 'absolute', inset: '-7.36px -7.08%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Arrow26} />
            </div>
          </div>
        </div>
      </div>
      <a style={{ position: 'absolute', display: 'block', cursor: 'pointer', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, height: 14, lineHeight: 0, left: 'calc(50% - 151px)', color: '#2254d4', fontSize: 13, top: 252.09, width: 107 }}>
        <p style={{ lineHeight: 0.99, margin: 0 }}>Internal Transfer</p>
      </a>

      {/* Swap pill — x=184, y=235, w=104, h=47 */}
      <div style={{ position: 'absolute', background: 'white', height: 47, left: 184, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.07)', top: 235, width: 104 }} />
      <div style={{ position: 'absolute', display: 'flex', height: 16.857, alignItems: 'center', justifyContent: 'center', left: 197.77, top: 248.12, width: 17.805 }}>
        <div style={{ flex: 'none', transform: 'rotate(-60.85deg) skewX(1.53deg)' }}>
          <div style={{ height: 13.393, position: 'relative', width: 12.192 }}>
            <div style={{ position: 'absolute', inset: '-41.24% -6.15% -5.6% -6.15%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Ellipse353} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', display: 'flex', height: 16.857, alignItems: 'center', justifyContent: 'center', left: 201.51, top: 254.73, width: 17.805 }}>
        <div style={{ flex: 'none', transform: 'scaleY(-1) rotate(119.15deg) skewX(1.53deg)' }}>
          <div style={{ height: 13.393, position: 'relative', width: 12.192 }}>
            <div style={{ position: 'absolute', inset: '-5.6% -6.15% -41.24% -6.15%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Ellipse354} />
            </div>
          </div>
        </div>
      </div>
      <a style={{ position: 'absolute', display: 'block', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', height: 15, lineHeight: 0, left: 'calc(50% + 14px)', fontStyle: 'normal', color: '#2254d4', fontSize: 13, top: 251, width: 39 }}>
        <p style={{ lineHeight: 0.99, margin: 0 }}>Swap</p>
      </a>

      {/* Insights pill — x=296, y=236, w=115, h=46 */}
      <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 296, borderRadius: 25, boxShadow: '0px 4px 4px 0px rgba(34,84,212,0.2)', top: 236, width: 115 }} />
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 'calc(50% + 130.77px)', color: '#2254d4', fontSize: 13, top: 250, width: 60.017 }}>Insights</p>
      <div style={{ position: 'absolute', left: 307, width: 28.284, height: 28.284, top: 245 }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4951} />
      </div>

      {/* Divider line */}
      <div style={{ position: 'absolute', height: 0, left: 0, top: 397, width: 430 }}>
        <div style={{ position: 'absolute', inset: '-0.4px 0 0 0' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Line160} />
        </div>
      </div>

      {/* Clock icon beside bell — sits left of bell (bell at x=363) */}
      <div style={{ position: 'absolute', left: 320, top: 42, width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#22282c" strokeWidth="0.8"/>
          <path d="M12 7V12L15 14" stroke="#22282c" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Portfolios description */}
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.28, left: 'calc(50% - 194px)', color: '#22282c', fontSize: 10, top: 464, width: 196 }}>
        Default Portfolios act as sub-accounts. Users can always make more Sub-accounts.
      </p>

      {/* Portfolios heading */}
      <p style={{ position: 'absolute', fontFamily: "'Anek Odia', sans-serif", fontWeight: 600, lineHeight: '34px', left: 20, color: '#1f2427', fontSize: 36, top: 422, letterSpacing: '-0.36px', whiteSpace: 'nowrap' }}>
        Portfolios
      </p>

      {/* Add portfolio circle — x=331, y=416, w=34, h=34 */}
      <div style={{ position: 'absolute', display: 'contents', left: 331, top: 416 }}>
        <div style={{ position: 'absolute', left: 331, width: 34, height: 34, top: 416 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Ellipse243} />
        </div>
        {/* ic:round-add — x=341, y=426, w=13, h=14.3 */}
        <div style={{ position: 'absolute', left: 341, top: 426, width: 13, height: 14.3, overflow: 'clip' }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector2} />
        </div>
      </div>

      {/* Group4957 */}
      <div style={{ position: 'absolute', left: 372, width: 34, height: 34, top: 416 }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4957} />
      </div>

      {/* Portfolio tabs background */}
      <div style={{ transform: 'translateX(-50%)', position: 'absolute', background: '#d9d9d9', height: 181, left: '50%', borderRadius: 25, top: 515, width: 390 }} />

      {/* FX tab (active) — x=27, y=525, w=62, h=45 */}
      <div onClick={() => setActiveTab('FX')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'FX' ? 'white' : '#494b4f', border: activeTab === 'FX' ? '1px solid #2254d4' : 'none', left: 27, top: 525, width: 62, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'FX' ? '#2254d4' : 'white' }}>FX</span>
      </div>

      {/* Metals tab — x=95, y=525, w=72, h=45 */}
      <div onClick={() => setActiveTab('Metals')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Metals' ? 'white' : '#494b4f', border: activeTab === 'Metals' ? '1px solid #2254d4' : 'none', left: 95, top: 525, width: 72, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Metals' ? '#2254d4' : 'white' }}>Metals</span>
      </div>

      {/* Energies tab — x=173, y=525, w=72, h=45 */}
      <div onClick={() => setActiveTab('Energies')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Energies' ? 'white' : '#494b4f', border: activeTab === 'Energies' ? '1px solid #2254d4' : 'none', left: 173, top: 525, width: 72, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Energies' ? '#2254d4' : 'white' }}>Energies</span>
      </div>

      {/* Indices tab — x=251, y=525, w=72, h=45 */}
      <div onClick={() => setActiveTab('Indices')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Indices' ? 'white' : '#494b4f', border: activeTab === 'Indices' ? '1px solid #2254d4' : 'none', left: 251, top: 525, width: 72, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Indices' ? '#2254d4' : 'white' }}>Indices</span>
      </div>

      {/* Bonds tab — x=329, y=525, w=72, h=45 */}
      <div onClick={() => setActiveTab('Bonds')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Bonds' ? 'white' : '#494b4f', border: activeTab === 'Bonds' ? '1px solid #2254d4' : 'none', left: 329, top: 525, width: 72, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Bonds' ? '#2254d4' : 'white' }}>Bonds</span>
      </div>
      {/* Equities tab — x=27, y=583, w=112, h=45 */}
      <div onClick={() => setActiveTab('Equities')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Equities' ? 'white' : '#494b4f', border: activeTab === 'Equities' ? '1px solid #2254d4' : 'none', left: 27, top: 583, width: 112, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Equities' ? '#2254d4' : 'white' }}>Equities</span>
      </div>

      {/* Equities CFDs tab — x=144, y=583, w=138, h=45 */}
      <div onClick={() => setActiveTab('Equities CFDs')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Equities CFDs' ? 'white' : '#494b4f', border: activeTab === 'Equities CFDs' ? '1px solid #2254d4' : 'none', left: 144, top: 583, width: 138, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Equities CFDs' ? '#2254d4' : 'white' }}>Equities CFDs</span>
      </div>

      {/* ETF CFDs tab — x=289, y=583, w=112, h=45 */}
      <div onClick={() => setActiveTab('ETF CFDs')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'ETF CFDs' ? 'white' : '#494b4f', border: activeTab === 'ETF CFDs' ? '1px solid #2254d4' : 'none', left: 289, top: 583, width: 112, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'ETF CFDs' ? '#2254d4' : 'white' }}>ETF CFDs</span>
      </div>

      {/* Event Contracts tab — x=26, y=641, w=127, h=45 */}
      <div onClick={() => setActiveTab('Event Contracts')} style={{ cursor: 'pointer', position: 'absolute', background: activeTab === 'Event Contracts' ? 'white' : '#494b4f', border: activeTab === 'Event Contracts' ? '1px solid #2254d4' : 'none', left: 26, top: 641, width: 127, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: activeTab === 'Event Contracts' ? '#2254d4' : 'white' }}>Event Contracts</span>
      </div>

      {/* Add custom sub-account tab — x=160, y=641, w=241, h=45 */}
      <div style={{ position: 'absolute', background: '#494b4f', left: 160, top: 641, width: 241, height: 45, borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="7" height="7" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13M1 7H13" stroke="#888888" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 14, color: 'white' }}>Add custom Sub-Account</span>
      </div>

      {/* Vector4 chevron */}
      <div style={{ position: 'absolute', height: 5, left: 180, top: 431, width: 9 }}>
        <div style={{ position: 'absolute', inset: '-15% -8.33%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector4} />
        </div>
      </div>

      {/* Orders tab lines */}
      <div style={{ transform: `translateX(-50%) translateY(${yOffset}px)`, transition: 'transform 0.3s ease', position: 'absolute', height: 1, left: 'calc(50% - 66.5px)', top: 1226, width: 249 }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Line7Stroke} />
      </div>
      <div style={{ transform: `translateX(-50%) translateY(${yOffset}px)`, transition: 'transform 0.3s ease', position: 'absolute', height: 1, left: 'calc(50% - 165px)', top: 1226, width: 54 }}>
        <div style={{ position: 'absolute', inset: '-50% -0.93%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Line7Stroke1} />
        </div>
      </div>

      {/* Orders tabs */}
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.29, left: 122, color: '#22282c', fontSize: 10, top: 1199 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>ORDERS</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.29, left: 216, color: '#22282c', fontSize: 10, top: 1199 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>CLOSED</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 700, lineHeight: 1.29, left: 32, color: '#22282c', fontSize: 10, top: 1199 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>OPEN</p>
      <p style={{ position: 'absolute', fontFamily: 'Poppins, sans-serif', height: 12, lineHeight: 1.29, left: 'calc(50% + 109px)', fontStyle: 'normal', fontSize: 8, color: '#646363', top: 1200 + yOffset, width: 84, transition: 'top 0.3s ease' }}>Sorted by open time</p>

      {/* Recent positions */}
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 'calc(50% - 187px)', color: '#22282c', fontSize: 10, top: 1143 + yOffset, width: 209, transition: 'top 0.3s ease' }}>
        Your recent positions in this instrument can be viewed here.
      </p>
      <p style={{ position: 'absolute', textDecorationSkipInk: 'none', textDecoration: 'underline solid', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.28, left: 'calc(50% + 76.5px)', color: '#22282c', fontSize: 11, top: 1148 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>
        View trade history
      </p>
      <div style={{ position: 'absolute', left: 389, top: 1148 + yOffset, width: 12, height: 14, transition: 'top 0.3s ease' }}>
        <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={IconCalendar} />
      </div>

      {/* Order card */}
      <div style={{ transform: 'translateX(-50%)', position: 'absolute', background: 'white', height: 72, left: 'calc(50% - 0.5px)', borderRadius: 20, boxShadow: '0px 4px 4px 0px rgba(34,40,44,0.06)', top: 1349 + yOffset, width: 391, transition: 'top 0.3s ease' }} />
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.29, left: 34, color: '#22282c', fontSize: 7, top: 1323 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>21/10/2023</p>

      {/* Portfolio stats */}
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.305, left: 'calc(50% - 4px)', color: '#22282c', fontSize: 9, top: 1252 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>Total Return</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.305, left: 'calc(50% - 180px)', color: '#22282c', fontSize: 9, top: 1252 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>Holdings</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.305, left: 'calc(50% - 180px)', color: '#22282c', fontSize: 10, top: 1268 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>{data.holdings}</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.305, left: 'calc(50% - 103px)', color: '#22282c', fontSize: 9, top: 1252 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>Today's Return</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.305, left: 'calc(50% + 91px)', color: '#22282c', fontSize: 9, top: 1252 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>Current Market Value</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.305, left: 'calc(50% - 103px)', fontSize: 10, color: '#23d223', top: 1268 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>{data.todayReturn}</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.305, left: 'calc(50% - 3px)', fontSize: 10, color: '#23d223', top: 1268 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>{data.totalReturn}</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.29, left: 'calc(50% + 92px)', color: '#22282c', fontSize: 10, top: 1268 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>{data.marketValue}</p>

      {/* Order row */}
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.29, left: 32, color: '#22282c', fontSize: 11, top: 1364 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>VULUEIMS</p>
      <p style={{ position: 'absolute', fontFamily: 'Poppins, sans-serif', lineHeight: 0, left: 32, fontStyle: 'normal', fontSize: 9, color: '#23d223', top: 1379 + yOffset, whiteSpace: 'pre', transition: 'top 0.3s ease' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505 }}>Buy at $4</span>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700, lineHeight: 1.505, color: '#23d223' }}>{` a share, `}</span>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700, lineHeight: 1.505, color: '#23d223' }}>(4 Units)($16)</span>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505 }}>{`  `}</span>
      </p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, lineHeight: 1.505, left: 94, fontSize: 6, color: '#23d223', top: 1366 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>Ongoing</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.505, left: 32, color: '#22282c', fontSize: 6, top: 1395 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>Order Type: Limit Order</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.505, left: 147, fontSize: 5, color: '#1a1a1a', top: 1367 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>TP</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.505, left: 133, fontSize: 5, color: '#1a1a1a', top: 1367 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>SL</p>
      <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 341, color: '#22282c', fontSize: 7, top: 1361 + yOffset, whiteSpace: 'nowrap', transition: 'top 0.3s ease' }}>17:37, Oct 21 2023</p>
      <p style={{ position: 'absolute', fontFamily: 'Poppins, sans-serif', lineHeight: 0, left: 306, fontStyle: 'normal', fontSize: 9, color: '#23d223', top: 1375 + yOffset, whiteSpace: 'pre', transition: 'top 0.3s ease' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505, color: '#22282c' }}>Unrealised PNL</span>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505 }}>{`    12.00  `}</span>
      </p>
      <p style={{ position: 'absolute', fontFamily: 'Poppins, sans-serif', lineHeight: 0, left: 314, fontStyle: 'normal', fontSize: 9, color: '#23d223', top: 1394 + yOffset, whiteSpace: 'pre', transition: 'top 0.3s ease' }}>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505, color: '#22282c' }}>{`% of portfolio      `}</span>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505, color: 'black' }}>100</span>
        <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: 1.505, color: '#ebf0ff' }}>{`  `}</span>
      </p>

      {/* Settings icon */}
      <div style={{ position: 'absolute', display: 'contents', left: 295, top: 418 }}>
        <div style={{ position: 'absolute', background: '#314a6e', border: '0.6px solid #213d4a', left: 295, opacity: 0.25, borderRadius: 25, width: 32, height: 32, top: 418 }} />
        <div style={{ position: 'absolute', height: 15.641, left: 302.99, top: 425.99, width: 15.638 }}>
          <div style={{ position: 'absolute', inset: '-3.18% -3.19% -3.21% -3.21%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4794} />
          </div>
        </div>
      </div>

      {/* ── Portfolio Sub-Account Card (Group 4970) ── */}
      {/* Delayed Execution Available */}
      {/* Text: left=89.5, center-y=730 | Pills: top=728 | Figma node 3069:1734 */}
      {activeTab === 'Bonds' || activeTab === 'Equities' || activeTab === 'Equities CFDs' || activeTab === 'ETF CFDs' && <p style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 12, color: '#455a64', textAlign: 'center', left: 89.5, top: 730, width: 141, letterSpacing: '-0.408px', lineHeight: '22px', whiteSpace: 'nowrap' }}>
        {activeTab === 'Equities' || activeTab === 'Equities CFDs' ? 'Real & Near Real Time Execution Available' : 'Delayed Execution Available'}
      </p>}
      {/* Bond sub-account scroll indicator — right side of Delayed Execution row */}
      {activeTab === 'Bonds' && (
        <div style={{ position: 'absolute', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 4, right: 20, top: 730 }}>
          {bondSubAccounts.map((_, idx) => (
            <div key={idx} onClick={() => setBondIndex(idx)} style={{ width: idx === bondIndex ? 28 : 8, height: 4, borderRadius: 40, background: '#2254d4', opacity: idx === bondIndex ? 1 : 0.7, transition: 'all 0.2s ease', cursor: 'pointer' }} />
          ))}
        </div>
      )}
      {activeTab === 'Equities' && (
        <div style={{ position: 'absolute', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 4, right: 20, top: 730 }}>
          {equitySubAccounts.map((_, idx) => (
            <div key={idx} onClick={() => setEquityIndex(idx)} style={{ width: idx === equityIndex ? 28 : 8, height: 4, borderRadius: 40, background: '#2254d4', opacity: idx === equityIndex ? 1 : 0.7, transition: 'all 0.2s ease', cursor: 'pointer' }} />
          ))}
        </div>
      )}
      {activeTab === 'Equities CFDs' && (
        <div style={{ position: 'absolute', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 4, right: 20, top: 730 }}>
          {equityCfdSubAccounts.map((_, idx) => (
            <div key={idx} onClick={() => setEquityCfdIndex(idx)} style={{ width: idx === equityCfdIndex ? 28 : 8, height: 4, borderRadius: 40, background: '#2254d4', opacity: idx === equityCfdIndex ? 1 : 0.7, transition: 'all 0.2s ease', cursor: 'pointer' }} />
          ))}
        </div>
      )}

      {activeTab !== 'Event Contracts' && <div style={{ position: 'absolute', display: 'contents', left: 19, top: 750 + cardOffset }}>
        {/* Card background */}
        <div
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            if (activeTab === 'Bonds') {
              if (dx < -40) setBondIndex((i) => (i + 1) % bondSubAccounts.length);
              else if (dx > 40) setBondIndex((i) => (i - 1 + bondSubAccounts.length) % bondSubAccounts.length);
            }
            if (activeTab === 'Equities') {
              if (dx < -40) setEquityIndex((i) => (i + 1) % equitySubAccounts.length);
              else if (dx > 40) setEquityIndex((i) => (i - 1 + equitySubAccounts.length) % equitySubAccounts.length);
            }
            if (activeTab === 'Equities CFDs') {
              if (dx < -40) setEquityCfdIndex((i) => (i + 1) % equityCfdSubAccounts.length);
              else if (dx > 40) setEquityCfdIndex((i) => (i - 1 + equityCfdSubAccounts.length) % equityCfdSubAccounts.length);
            }
          }}
          style={{ transform: 'translateX(-50%)', position: 'absolute', background: 'white', border: '2px solid #2254d4', height: cardExpanded ? 382 : 225, left: 'calc(50% - 0.5px)', borderRadius: 20, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 750 + cardOffset, width: 391, overflow: 'hidden', transition: 'height 0.3s ease' }}
        />

        {/* Title — top: 737 + cardOffset */}
        <div style={{ position: 'absolute', left: 37, top: 774 + cardOffset, width: 229 }}>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.2, margin: 0, color: '#22282c', fontSize: 16 }}>Portfolio Sub-Account</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {activeTab === 'Bonds' && currentBond.flag === 'NG' && (
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                <rect x="0" y="0" width="6.67" height="20" fill="#008751" />
                <rect x="6.67" y="0" width="6.66" height="20" fill="#ffffff" />
                <rect x="13.33" y="0" width="6.67" height="20" fill="#008751" />
              </svg>
            )}
            {activeTab === 'Bonds' && currentBond.flag === 'US' && (
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((s) => (
                  <rect key={s} x="0" y={s * (20/13)} width="20" height={20/13} fill={s % 2 === 0 ? '#B22234' : '#FFFFFF'} />
                ))}
                <rect x="0" y="0" width="8" height="10" fill="#3C3B6E" />
                {[0,1,2,3,4].flatMap((row) => [0,1,2,3].map((col) => (
                  <circle key={`${row}-${col}`} cx={col * 1.8 + 1} cy={row * 1.8 + 1} r="0.45" fill="white" />
                )))}
              </svg>
            )}
            {activeTab === 'Bonds' && currentBond.flag === 'BR' && (
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                <rect x="0" y="0" width="20" height="20" fill="#009C3B" />
                <polygon points="10,2 18,10 10,18 2,10" fill="#FFDF00" />
                <circle cx="10" cy="10" r="4" fill="#002776" />
              </svg>
            )}
            {activeTab === 'Bonds' && currentBond.flag === 'PL' && (
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                <rect x="0" y="0" width="20" height="10" fill="#FFFFFF" />
                <rect x="0" y="10" width="20" height="10" fill="#DC143C" />
              </svg>
            )}
            {activeTab === 'Bonds' && currentBond.flag === 'ZA' && (
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                <rect x="0" y="0" width="20" height="20" fill="#007A4D" />
                <rect x="0" y="6.67" width="20" height="6.67" fill="#FFFFFF" />
                <rect x="0" y="7.5" width="20" height="5" fill="#FFB612" />
                <polygon points="0,0 8,10 0,20" fill="#000000" />
                <polygon points="0,2 6,10 0,18" fill="#DE3831" />
              </svg>
            )}
            {activeTab === 'Bonds' && currentBond.flag === 'AE' && (
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                <rect x="0" y="0" width="20" height="6.67" fill="#00732F" />
                <rect x="0" y="6.67" width="20" height="6.67" fill="#FFFFFF" />
                <rect x="0" y="13.33" width="20" height="6.67" fill="#000000" />
                <rect x="0" y="0" width="6" height="20" fill="#FF0000" />
              </svg>
            )}
            {activeTab === 'Equities' && (
              <img src={currentEquity.logo} alt={currentEquity.name} style={{ width: 15, height: 15, borderRadius: 30, objectFit: 'cover', flexShrink: 0 }} />
            )}
            {activeTab === 'Equities CFDs' && currentEquityCfd.logo && (
              <img src={currentEquityCfd.logo} alt={currentEquityCfd.name} style={{ width: 15, height: 15, borderRadius: 30, objectFit: 'cover', flexShrink: 0 }} />
            )}
            {activeTab === 'Equities CFDs' && !currentEquityCfd.logo && (
              <svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, borderRadius: '50%', overflow: 'hidden' }}>
                <rect x="0" y="0" width="20" height="6.67" fill="#00732F" />
                <rect x="0" y="6.67" width="20" height="6.67" fill="#FFFFFF" />
                <rect x="0" y="13.33" width="20" height="6.67" fill="#000000" />
                <rect x="0" y="0" width="6" height="20" fill="#FF0000" />
              </svg>
            )}
            <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 300, lineHeight: 1.2, margin: 0, color: '#22282c', fontSize: 16 }}>
              {activeTab === 'Bonds' ? currentBond.name : activeTab === 'Equities' ? currentEquity.name : activeTab === 'Equities CFDs' ? currentEquityCfd.name : data.subAccount}
            </p>
          </div>

        </div>

        {/* Real/Demo toggle */}
        <div style={{ position: 'absolute', display: 'contents', left: 37, top: 835 + cardOffset }}>
          <div style={{ position: 'absolute', background: '#22282c', height: 13, left: 37, borderRadius: 4, top: 835 + cardOffset, width: 58 }} />
          <div style={{ position: 'absolute', background: '#05a54f', height: 13, left: 37, borderRadius: 4, top: 835 + cardOffset, width: 25 }} />
          <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 40, fontSize: 10, color: 'white', top: 836 + cardOffset, width: 19 }}>Real</p>
          <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 65, color: '#455a64', fontSize: 10, top: 836 + cardOffset, width: 27 }}>Demo</p>
        </div>

        {/* Standard toggle */}
        <div style={{ position: 'absolute', display: 'contents', left: 97, top: 835 + cardOffset }}>
          <div style={{ position: 'absolute', display: 'contents', left: 97, top: 835 + cardOffset }}>
            <div style={{ position: 'absolute', background: '#22282c', height: 13, left: 97, borderRadius: 4, top: 835 + cardOffset, width: 50 }} />
            <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 101, color: '#a6a6a6', fontSize: 10, top: 836 + cardOffset, width: 44 }}>Standard</p>
          </div>
        </div>

        {/* Balance */}
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#22282c', top: 867 + cardOffset, left: 37, lineHeight: 1.28 }}>{data.balance}</p>

        {/* See Less / See More toggle */}
        {cardExpanded ? (
          <div onClick={() => setCardExpanded(false)} style={{ position: 'absolute', left: 327, top: 857 + cardOffset, width: 80, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 11, color: '#0033aa', textDecoration: 'underline', whiteSpace: 'nowrap', margin: 0 }}>See less</p>
          </div>
        ) : (
          <div onClick={() => setCardExpanded(true)} style={{ position: 'absolute', background: '#1410b1', height: 58, left: 26, borderRadius: 15, top: 906 + cardOffset, width: 379, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 14, color: 'white', margin: 0 }}>See more</p>
          </div>
        )}

        {/* Holdings Floating PnL — Figma: center top=778, value top=782, polygon top=793 */}
        <div style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)', left: 345.5, top: 778 + cardOffset, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 85, letterSpacing: '-0.408px' }}>
          <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 10, color: '#455a64', lineHeight: '22px' }}>Holdings Floating PnL</span>
        </div>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#455a64', top: 782 + cardOffset, left: 358, lineHeight: '34px', height: 22, width: 44 }}>{data.floatingPnL}</p>
        <div style={{ position: 'absolute', left: 343, top: 793 + cardOffset, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="" style={{ width: 8, height: 8 }} src={Polygon19} />
        </div>

        {/* Expanded-only content */}
        {cardExpanded && (<>
        {/* Upload button */}
        <div style={{ position: 'absolute', left: 48.375, top: 931.875 + cardOffset, width: 26.25, height: 26.25 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector5} />
        </div>

        {/* Arrow button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 193, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 923 + cardOffset, width: 95 }} />
        <div style={{ position: 'absolute', height: 6.222, left: 227, top: 944 + cardOffset, width: 22.5 }}>
          <div style={{ position: 'absolute', inset: '-58.14% -11.97% -16.07% -4.44%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Arrow29} />
          </div>
        </div>

        {/* Swap button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 295, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 923 + cardOffset, width: 95 }} />
        <div style={{ position: 'absolute', display: 'flex', height: 16.857, alignItems: 'center', justifyContent: 'center', left: 333, top: 940 + cardOffset, width: 17.805 }}>
          <div style={{ flex: 'none', transform: 'rotate(-60.85deg) skewX(1.53deg)' }}>
            <div style={{ height: 13.393, position: 'relative', width: 12.192 }}>
              <div style={{ position: 'absolute', inset: '-54.98% -8.2% -7.47% -8.2%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Ellipse372} />
              </div>
            </div>
          </div>
        </div>

        {/* Chart bars button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 92, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 923 + cardOffset, width: 95 }} />
        <div style={{ position: 'absolute', display: 'contents', left: 129, top: 936 + cardOffset }}>
          <div style={{ position: 'absolute', background: '#2254d4', border: '1px solid white', height: 10.25, left: 129, borderRadius: 1, top: 936 + cardOffset, width: 3.6 }} />
          <div style={{ position: 'absolute', background: '#c80808', border: '1px solid white', height: 10.25, left: 136.2, borderRadius: 1, top: 946.25 + cardOffset, width: 3.6 }} />
          <div style={{ position: 'absolute', background: '#2254d4', border: '1px solid white', height: 10.25, left: 143.4, borderRadius: 1, top: 940.1 + cardOffset, width: 3.6 }} />
        </div>

        {/* Performance Summary button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 36, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 981 + cardOffset, width: 256 }} />
        <div style={{ position: 'absolute', display: 'contents', left: 52, top: 993 + cardOffset }}>
          <div style={{ position: 'absolute', display: 'contents', left: 52, top: 993 + cardOffset }}>
            <div style={{ position: 'absolute', background: '#2254d4', height: 15.999, left: 52, borderRadius: '1px 1px 0 0', top: 993 + cardOffset, width: 4.154 }} />
            <div style={{ position: 'absolute', display: 'flex', height: 5.714, alignItems: 'center', justifyContent: 'center', left: 58.92, top: 1009.29 + cardOffset, width: 4.154 }}>
              <div style={{ transform: 'scaleY(-1)', flex: 'none' }}>
                <div style={{ background: '#2254d4', height: 5.714, borderRadius: '1px 1px 0 0', width: 4.154 }} />
              </div>
            </div>
            <div style={{ position: 'absolute', background: '#2254d4', height: 12.57, left: 65.85, borderRadius: '1px 1px 0 0', top: 996.43 + cardOffset, width: 4.154 }} />
          </div>
        </div>
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 98, color: '#2254d4', fontSize: 14, top: 995 + cardOffset, width: 152 }}>Performance Summary</p>

        {/* Trade button (blue) */}
        <div style={{ position: 'absolute', background: '#2254d4', border: '1px solid #2254d4', height: 46, left: 295, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 981 + cardOffset, width: 95 }} />
        <div style={{ position: 'absolute', height: 12, left: 327, top: 998 + cardOffset, width: 30 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4968} />
        </div>

        {/* Frosted glass panel */}
        <div style={{ position: 'absolute', display: 'flex', height: 79, alignItems: 'center', justifyContent: 'center', left: 36, top: 1039 + cardOffset, width: 358 }}>
          <div style={{ transform: 'rotate(-90deg)', flex: 'none' }}>
            <div style={{ backdropFilter: 'blur(2px)', background: 'rgba(34,40,44,0.1)', border: '0.5px solid #0a2ddb', height: 358, borderRadius: 15, width: 79 }} />
          </div>
        </div>

        {/* Vector6 */}
        <div style={{ position: 'absolute', left: 49, top: 1067 + cardOffset, width: 22, height: 19 }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector6} />
        </div>

        {/* Strategy text */}
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 'calc(50% - 127px)', color: '#22282c', fontSize: 13, top: 1058 + cardOffset, width: 207 }}>
          Strategy Tethering and Portfolio Mirroring marketplace
        </p>

        {/* Arrow28 */}
        <div style={{ position: 'absolute', display: 'flex', height: 9.564, alignItems: 'center', justifyContent: 'center', left: 342, top: 1072 + cardOffset, width: 12.982 }}>
          <div style={{ flex: 'none', transform: 'rotate(-36.38deg)' }}>
            <div style={{ height: 0, position: 'relative', width: 16.125 }}>
              <div style={{ position: 'absolute', inset: '-7.36px -6.2%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Arrow28} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider inside card */}
        <div style={{ transform: 'translateX(-50%)', position: 'absolute', height: 1, left: 'calc(50% - 1px)', top: 902 + cardOffset, width: 386 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Line7Stroke2} />
        </div>
        </>)}
      </div>}

      {/* ── Event Contracts: 4 stacked cards ── */}
      {activeTab === 'Event Contracts' && (<>

        {/* ── Card 1: Crypto Events Contracts (expanded, top:706, h:382) ── */}
        <div style={{ transform: 'translateX(-50%)', position: 'absolute', background: 'white', border: '2px solid #2254d4', height: 382, left: 'calc(50% - 0.5px)', borderRadius: 20, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 706, width: 391, overflow: 'hidden' }} />
        {/* Title */}
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.1, left: 37, top: 730, color: '#22282c', fontSize: 16, margin: 0 }}>Portfolio Sub-Account</p>
        <div style={{ position: 'absolute', left: 37, top: 748, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ height: 9.799, width: 17.57, flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-10.21% -5.69%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4984} />
            </div>
          </div>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 300, lineHeight: 1.1, color: '#22282c', fontSize: 16, margin: 0 }}>Crypto Events Contracts</p>
        </div>
        {/* Holdings Floating PnL */}
        <div style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)', left: 345.5, top: 734, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 85, letterSpacing: '-0.408px' }}>
          <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 10, color: '#525d7a', lineHeight: '22px' }}>Holdings Floating PnL</span>
        </div>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#455a64', top: 738, left: 358, lineHeight: '34px', height: 22, width: 44 }}>0.0%</p>
        <div style={{ position: 'absolute', left: 343, top: 749, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="" style={{ width: 8, height: 8 }} src={Polygon19} />
        </div>
        {/* Real toggle */}
        <div style={{ position: 'absolute', background: '#05a54f', height: 13, left: 37, borderRadius: 4, top: 791, width: 25 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 40, fontSize: 10, color: 'white', top: 792, width: 19 }}>Real</p>
        {/* Balance */}
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#22282c', top: 823, left: 37, lineHeight: 1.28 }}>$0.0</p>
        {/* Confirm */}
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 500, fontSize: 11, color: '#0033aa', textDecoration: 'underline', whiteSpace: 'nowrap', top: 823, left: 348 }}>Confirm</p>
        {/* Divider */}
        <div style={{ transform: 'translateX(-50%)', position: 'absolute', height: 1, left: 'calc(50% - 1px)', top: 858, width: 386 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Line7Stroke2} />
        </div>
        {/* Upload button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 36, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 879, width: 50 }} />
        <div style={{ position: 'absolute', left: 48.375, top: 887.875, width: 26.25, height: 26.25 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector5} />
        </div>
        {/* Arrow button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 193, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 879, width: 95 }} />
        <div style={{ position: 'absolute', height: 6.222, left: 227, top: 900, width: 22.5 }}>
          <div style={{ position: 'absolute', inset: '-58.14% -11.97% -16.07% -4.44%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Arrow29} />
          </div>
        </div>
        {/* Swap button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 295, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 879, width: 95 }} />
        <div style={{ position: 'absolute', display: 'flex', height: 16.857, alignItems: 'center', justifyContent: 'center', left: 333, top: 896, width: 17.805 }}>
          <div style={{ flex: 'none', transform: 'rotate(-60.85deg) skewX(1.53deg)' }}>
            <div style={{ height: 13.393, position: 'relative', width: 12.192 }}>
              <div style={{ position: 'absolute', inset: '-54.98% -8.2% -7.47% -8.2%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Ellipse372} />
              </div>
            </div>
          </div>
        </div>
        {/* Chart bars button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 92, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 879, width: 95 }} />
        <div style={{ position: 'absolute', height: 9.799, left: 129, top: 897, width: 17.57 }}>
          <div style={{ position: 'absolute', inset: '-10.21% -5.69%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4984} />
          </div>
        </div>
        {/* Performance Summary button */}
        <div style={{ position: 'absolute', background: 'white', border: '1px solid #2254d4', height: 46, left: 36, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 937, width: 256 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 98, color: '#2254d4', fontSize: 14, top: 951, width: 152 }}>Performance Summary</p>
        {/* Trade button */}
        <div style={{ position: 'absolute', background: '#2254d4', border: '1px solid #2254d4', height: 46, left: 295, borderRadius: 15, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 937, width: 95 }} />
        <div style={{ position: 'absolute', height: 12, left: 327, top: 954, width: 30 }}>
          <img alt="" style={{ position: 'absolute', display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4968} />
        </div>
        {/* Frosted panel */}
        <div style={{ position: 'absolute', display: 'flex', height: 79, alignItems: 'center', justifyContent: 'center', left: 36, top: 995, width: 358 }}>
          <div style={{ transform: 'rotate(-90deg)', flex: 'none' }}>
            <div style={{ backdropFilter: 'blur(2px)', background: 'rgba(34,40,44,0.1)', border: '0.5px solid #0a2ddb', height: 358, borderRadius: 15, width: 79 }} />
          </div>
        </div>
        {/* Vector5 (upload icon in frosted) */}
        <div style={{ position: 'absolute', left: 49, top: 1023, width: 22, height: 19 }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Vector6} />
        </div>
        {/* Strategy text */}
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: 1.29, left: 88, color: '#22282c', fontSize: 13, top: 1014, width: 207 }}>
          Strategy Tethering and Portfolio Mirroring marketplace
        </p>
        {/* Arrow28 */}
        <div style={{ position: 'absolute', display: 'flex', height: 9.564, alignItems: 'center', justifyContent: 'center', left: 342, top: 1028, width: 12.982 }}>
          <div style={{ flex: 'none', transform: 'rotate(-36.38deg)' }}>
            <div style={{ height: 0, position: 'relative', width: 16.125 }}>
              <div style={{ position: 'absolute', inset: '-7.36px -6.2%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Arrow28} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 2: Economics Events Contracts (collapsed, top:1097, h:190) ── */}
        <div style={{ transform: 'translateX(-50%)', position: 'absolute', background: 'white', border: '1px solid rgba(0,0,0,0.05)', height: 190, left: 'calc(50% - 1.5px)', borderRadius: 20, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 1097, width: 391 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.1, left: 31, top: 1108, color: '#22282c', fontSize: 16, margin: 0 }}>Portfolio Sub-Account</p>
        <div style={{ position: 'absolute', left: 31, top: 1126, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ height: 9.799, width: 17.57, flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-10.21% -5.69%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4984} />
            </div>
          </div>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 300, lineHeight: 1.1, color: '#22282c', fontSize: 16, margin: 0 }}>Economics Events Contracts</p>
        </div>
        <div style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)', left: 339.5, top: 1112, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 85, letterSpacing: '-0.408px' }}>
          <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 10, color: '#525d7a', lineHeight: '22px' }}>Holdings Floating PnL</span>
        </div>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#455a64', top: 1116, left: 352, lineHeight: '34px', height: 22, width: 44 }}>0.0%</p>
        <div style={{ position: 'absolute', left: 337, top: 1127, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="" style={{ width: 8, height: 8 }} src={Polygon19} />
        </div>
        <div style={{ position: 'absolute', background: '#05a54f', height: 13, left: 31, borderRadius: 4, top: 1158, width: 25 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 34, fontSize: 10, color: 'white', top: 1159, width: 19 }}>Real</p>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#22282c', top: 1187, left: 31, lineHeight: 1.28 }}>$0.0</p>
        <div style={{ position: 'absolute', background: '#1410b1', height: 58, left: 24, borderRadius: 15, top: 1222, width: 379, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 14, color: 'white', margin: 0 }}>See more</p>
        </div>

        {/* ── Card 3: Financials Events Contracts (collapsed, top:1294, h:190) ── */}
        <div style={{ transform: 'translateX(-50%)', position: 'absolute', background: 'white', border: '1px solid rgba(0,0,0,0.05)', height: 190, left: 'calc(50% - 1.5px)', borderRadius: 20, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 1294, width: 391 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.1, left: 31, top: 1305, color: '#22282c', fontSize: 16, margin: 0 }}>Portfolio Sub-Account</p>
        <div style={{ position: 'absolute', left: 31, top: 1323, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ height: 9.799, width: 17.57, flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-10.21% -5.69%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4984} />
            </div>
          </div>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 300, lineHeight: 1.1, color: '#22282c', fontSize: 16, margin: 0 }}>Financials Events Contracts</p>
        </div>
        <div style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)', left: 339.5, top: 1309, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 85, letterSpacing: '-0.408px' }}>
          <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 10, color: '#525d7a', lineHeight: '22px' }}>Holdings Floating PnL</span>
        </div>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#455a64', top: 1313, left: 352, lineHeight: '34px', height: 22, width: 44 }}>0.0%</p>
        <div style={{ position: 'absolute', left: 337, top: 1324, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="" style={{ width: 8, height: 8 }} src={Polygon19} />
        </div>
        <div style={{ position: 'absolute', background: '#05a54f', height: 13, left: 31, borderRadius: 4, top: 1355, width: 25 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 34, fontSize: 10, color: 'white', top: 1356, width: 19 }}>Real</p>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#22282c', top: 1384, left: 31, lineHeight: 1.28 }}>$0.0</p>
        <div style={{ position: 'absolute', background: '#1410b1', height: 58, left: 24, borderRadius: 15, top: 1419, width: 379, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 14, color: 'white', margin: 0 }}>See more</p>
        </div>

        {/* ── Card 4: IPOs Events Contracts (collapsed, top:1492, h:190) ── */}
        <div style={{ transform: 'translateX(-50%)', position: 'absolute', background: 'white', border: '1px solid rgba(0,0,0,0.05)', height: 190, left: 'calc(50% - 1.5px)', borderRadius: 20, boxShadow: '0px 4px 4px 0px rgba(38,50,56,0.06)', top: 1492, width: 391 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: 1.1, left: 31, top: 1503, color: '#22282c', fontSize: 16, margin: 0 }}>Portfolio Sub-Account</p>
        <div style={{ position: 'absolute', left: 31, top: 1521, display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ height: 9.799, width: 17.57, flexShrink: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-10.21% -5.69%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={Group4984} />
            </div>
          </div>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 300, lineHeight: 1.1, color: '#22282c', fontSize: 16, margin: 0 }}>IPOs Events Contracts</p>
        </div>
        <div style={{ position: 'absolute', transform: 'translateX(-50%) translateY(-50%)', left: 339.5, top: 1507, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: 85, letterSpacing: '-0.408px' }}>
          <span style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 10, color: '#525d7a', lineHeight: '22px' }}>Holdings Floating PnL</span>
        </div>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 12, color: '#455a64', top: 1511, left: 352, lineHeight: '34px', height: 22, width: 44 }}>0.0%</p>
        <div style={{ position: 'absolute', left: 337, top: 1522, width: 12, height: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img alt="" style={{ width: 8, height: 8 }} src={Polygon19} />
        </div>
        <div style={{ position: 'absolute', background: '#05a54f', height: 13, left: 31, borderRadius: 4, top: 1553, width: 25 }} />
        <p style={{ position: 'absolute', fontFamily: 'Urbanist, sans-serif', fontWeight: 300, height: 8, lineHeight: 1.1, left: 34, fontSize: 10, color: 'white', top: 1554, width: 19 }}>Real</p>
        <p style={{ position: 'absolute', fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#22282c', top: 1582, left: 31, lineHeight: 1.28 }}>$0.0</p>
        <div style={{ position: 'absolute', background: '#1410b1', height: 58, left: 24, borderRadius: 15, top: 1617, width: 379, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <p style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, fontSize: 14, color: 'white', margin: 0 }}>See more</p>
        </div>

      </>)}

    </div>
  );
}
