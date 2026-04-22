// Header.jsx — Grupul Verde website nav with real routes
const { useState } = React;

function Header({ route, setRoute }) {
  const [menuOpen, setMenuOpen] = useState(null);
  const nav = [
    { k: 'home', label: 'Acasă' },
    { k: 'despre', label: 'Despre Noi', sub: [
      { k: 'cine-suntem', label: 'Cine suntem' },
      { k: 'misiune', label: 'Misiune & viziune' },
      { k: 'echipa', label: 'Echipă' },
      { k: 'parteneri', label: 'Parteneri' },
    ]},
    { k: 'programe', label: 'Programe & Impact', sub: [
      { k: 'programe-active', label: 'Programe active' },
      { k: 'programe-implementate', label: 'Programe implementate' },
      { k: 'impact', label: 'Impact & rezultate' },
      { k: 'rapoarte', label: 'Rapoarte & transparență' },
    ]},
    { k: 'csr', label: 'CSR & Parteneriate', sub: [
      { k: 'sponsorizare', label: 'Sponsorizare 20%' },
      { k: 'corporate', label: 'Parteneriate corporate' },
      { k: 'voluntariat', label: 'Voluntariat corporate' },
      { k: 'propune', label: 'Propune un parteneriat' },
    ]},
    { k: 'stiri', label: 'Știri' },
    { k: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250,250,247,0.92)',
      backdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: '1px solid rgba(14,15,12,0.06)',
    }}>
      <div style={{ background: '#0e0f0c', color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter', fontSize: 12, fontWeight: 500 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '8px 32px', display: 'flex', gap: 20, justifyContent: 'flex-end' }}>
          <span>✉ office@grupulverde.ro</span>
          <span>🕘 09:00 – 18:30</span>
          <span>☎ +40 374 962 748</span>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a onClick={() => setRoute('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <div style={{ width: 36, height: 36, background: '#9fe870', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 26, color: '#163300', letterSpacing: -1 }}>G</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: -0.6, color: '#0e0f0c' }}>
            Grupul <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 20%, transparent 20%)', padding: '0 2px' }}>Verde</span>
          </div>
        </a>
        <nav style={{ marginLeft: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
          {nav.map(it => {
            const active = route === it.k || (it.sub && it.sub.some(s => s.k === route));
            return (
              <div key={it.k} style={{ position: 'relative' }}
                onMouseEnter={() => it.sub && setMenuOpen(it.k)}
                onMouseLeave={() => setMenuOpen(null)}>
                <button onClick={() => setRoute(it.sub ? it.sub[0].k : it.k)}
                  style={{
                    background: active ? 'rgba(211,242,192,0.5)' : 'transparent',
                    border: 0, cursor: 'pointer',
                    fontFamily: 'Inter', fontSize: 13.5, fontWeight: 600,
                    color: '#0e0f0c', padding: '8px 12px', borderRadius: 9999,
                    letterSpacing: -0.08, transition: 'background 150ms',
                  }}>{it.label}{it.sub && <span style={{ marginLeft: 4, opacity: 0.5, fontSize: 9 }}>▼</span>}</button>
                {it.sub && menuOpen === it.k && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 6, background: '#fff', borderRadius: 14, boxShadow: '0 12px 32px rgba(14,15,12,0.14), 0 0 0 1px rgba(14,15,12,0.06)', padding: 8, minWidth: 240, zIndex: 60 }}>
                    {it.sub.map(s => (
                      <div key={s.k} onClick={() => { setRoute(s.k); setMenuOpen(null); }} style={{
                        padding: '9px 12px', borderRadius: 8, fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: route === s.k ? '#163300' : '#0e0f0c', cursor: 'pointer',
                        background: route === s.k ? '#e2f6d5' : 'transparent',
                      }}
                        onMouseEnter={e => { if (route !== s.k) e.currentTarget.style.background = '#f3f7ef'; }}
                        onMouseLeave={e => { if (route !== s.k) e.currentTarget.style.background = 'transparent'; }}
                      >{s.label}</div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Button variant="primary" onClick={() => setRoute('donate')} style={{ marginLeft: 10 }}>Donează!</Button>
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
