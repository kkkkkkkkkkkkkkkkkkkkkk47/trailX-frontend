import VuluePage from './VuluePage';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#c8cdd0', display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
      <div style={{ width: 430, height: 1579, position: 'relative', flexShrink: 0 }}>
        <VuluePage />
      </div>
    </div>
  );
}

export default App;
