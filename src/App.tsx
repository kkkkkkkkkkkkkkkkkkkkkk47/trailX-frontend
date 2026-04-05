import { useEffect, useState } from 'react';
import VuluePage from './VuluePage';

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 1579;

function App() {
  const [scale, setScale] = useState(() => Math.min(1, window.innerWidth / DESIGN_WIDTH));

  useEffect(() => {
    const onResize = () => setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#eef0f1' }}>
      {/* Outer container collapses to the scaled height so the page scrolls naturally */}
      <div style={{ width: DESIGN_WIDTH * scale, height: scaledHeight, position: 'relative', margin: '0 auto' }}>
        <div
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
          }}
        >
          <VuluePage />
        </div>
      </div>
    </div>
  );
}

export default App;
