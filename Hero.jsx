// Hero.jsx — display headline + kicker + CTAs
function Hero({ setRoute }) {
  const kickers = ['ONG', 'Adjud', 'Educație digitală', 'STEM', 'Mediu', 'Incluziune', 'CSR'];
  return (
    <section style={{ padding: '80px 32px 64px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {kickers.map((k, i) => (
          <span key={i} style={{
            padding: '4px 10px', borderRadius: 9999,
            background: i === 0 ? '#0e0f0c' : 'rgba(22,51,0,0.08)',
            color: i === 0 ? '#9fe870' : '#0e0f0c',
            fontSize: 12, fontWeight: 600, letterSpacing: -0.084,
          }}>{k}</span>
        ))}
      </div>
      <h1 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700, fontSize: 'clamp(54px, 8vw, 112px)',
        lineHeight: 0.88, letterSpacing: -2, margin: 0,
        color: '#0e0f0c', maxWidth: 1100,
        fontFeatureSettings: '"calt" 1',
      }}>
        Transformăm comunități prin <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 25%, transparent 25%)', padding: '0 6px' }}>educație digitală</span>, tehnologie și impact social.
      </h1>
      <p style={{
        marginTop: 28, maxWidth: 760,
        fontFamily: 'Inter', fontSize: 19, fontWeight: 500,
        lineHeight: 1.44, letterSpacing: 0.1, color: '#454745',
      }}>
        Asociația Grupul Verde dezvoltă programe practice de alfabetizare digitală, programare, Arduino & micro:bit, siguranță online și tehnologie pentru mediu — cu rezultate măsurabile și raportabile pentru comunitate și parteneri.
      </p>
      <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <Button variant="primary" arrow onClick={() => setRoute('program')}>Programe active</Button>
        <Button variant="secondary" onClick={() => setRoute('csr')}>CSR & parteneriate</Button>
        <Button variant="ghost" onClick={() => setRoute('home')}>Impact & rezultate →</Button>
      </div>
    </section>
  );
}
window.Hero = Hero;
