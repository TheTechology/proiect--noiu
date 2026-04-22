// Screens.jsx — ProgramDetail, CsrForm
function ProgramDetail({ setRoute }) {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 32px' }}>
      <a onClick={() => setRoute('home')} style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#454745', cursor: 'pointer', textDecoration: 'none' }}>← Programe & Impact</a>
      <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ padding: '4px 10px', borderRadius: 9999, background: '#9fe870', color: '#163300', fontSize: 12, fontWeight: 600 }}>STEM</span>
        <span style={{ padding: '4px 10px', borderRadius: 9999, background: 'rgba(22,51,0,0.08)', color: '#0e0f0c', fontSize: 12, fontWeight: 600 }}>Hands-on</span>
        <span style={{ padding: '4px 10px', borderRadius: 9999, background: 'rgba(22,51,0,0.08)', color: '#0e0f0c', fontSize: 12, fontWeight: 600 }}>2025–2026</span>
      </div>
      <h1 style={{ marginTop: 20, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 88, lineHeight: 0.88, letterSpacing: -2.4, color: '#0e0f0c' }}>
        Arduino & <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 25%, transparent 25%)', padding: '0 6px' }}>micro:bit</span> — Hab Adjud
      </h1>
      <p style={{ marginTop: 24, fontFamily: 'Inter', fontSize: 19, fontWeight: 500, color: '#454745', lineHeight: 1.5, maxWidth: 780 }}>
        Ateliere hands-on pentru elevi V–VIII și liceu: prototipuri, senzori de mediu, gândire logică și un demo day la final de modul. Livrăm portofolii documentate per participant.
      </p>

      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
        <div style={{ background: '#fff', borderRadius: 30, boxShadow: 'rgba(14,15,12,0.12) 0 0 0 1px', padding: 32 }}>
          <h2 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 600, letterSpacing: -0.4, margin: 0, color: '#0e0f0c' }}>Ce învață participanții</h2>
          <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Fundamente Arduino & micro:bit — I/O, senzori, bucle', 'Citizen science — date reale de mediu (apă, aer, zgomot)', 'Gândire algoritmică prin proiecte demonstrabile', 'Prezentare la demo day, portofoliu documentat'].map(t => (
              <li key={t} style={{ display: 'flex', gap: 10, fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: '#0e0f0c', lineHeight: 1.45 }}>
                <span style={{ color: '#9fe870', fontWeight: 800 }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: '#e2f6d5', borderRadius: 30, padding: 28 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600, color: '#163300', textTransform: 'uppercase', letterSpacing: 1 }}>KPI</div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[['48', 'Beneficiari'], ['24', 'Ore / participant'], ['92%', 'Retenție modul'], ['1', 'Demo day']].map(([n,l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'baseline', gap: 12, borderTop: '1px solid rgba(22,51,0,0.14)', paddingTop: 12 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: '#163300', letterSpacing: -1 }}>{n}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#163300' }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <Button variant="dark" arrow onClick={() => setRoute('csr')}>Susține programul</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CsrForm({ setRoute }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ company: '', email: '', objective: 'Educație digitală', budget: '10–25k €', message: '' });
  if (submitted) {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, background: '#9fe870', borderRadius: 9999, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, color: '#163300', fontWeight: 800 }}>✓</div>
        <h1 style={{ marginTop: 24, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 0.9, letterSpacing: -2, color: '#0e0f0c' }}>
          Mulțumim!
        </h1>
        <p style={{ marginTop: 20, fontFamily: 'Inter', fontSize: 18, color: '#454745', lineHeight: 1.5 }}>
          Revenim în 48h cu un plan concret: obiective, KPI, timeline și buget. Între timp, vezi <a onClick={() => setRoute('home')} style={{ color: '#163300', cursor: 'pointer' }}>programele active</a>.
        </p>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: 920, margin: '0 auto', padding: '56px 32px' }}>
      <span style={{ padding: '4px 10px', borderRadius: 9999, background: 'rgba(22,51,0,0.08)', color: '#0e0f0c', fontSize: 12, fontWeight: 600 }}>CSR & Parteneriate</span>
      <h1 style={{ marginTop: 16, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 0.88, letterSpacing: -2, color: '#0e0f0c' }}>
        Propune un <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 25%, transparent 25%)', padding: '0 6px' }}>parteneriat</span>
      </h1>
      <p style={{ marginTop: 20, fontFamily: 'Inter', fontSize: 18, fontWeight: 500, color: '#454745', lineHeight: 1.5, maxWidth: 640 }}>
        Trimite-ne 3 rânduri despre obiectivul companiei (CSR/ESG/HR) și îți răspundem cu un plan: obiective, buget, KPI, timeline și implementare.
      </p>

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ marginTop: 32, background: '#fff', borderRadius: 40, boxShadow: 'rgba(14,15,12,0.12) 0 0 0 1px', padding: 36, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Field label="Companie" value={form.company} onChange={v => setForm({ ...form, company: v })} placeholder="Ex. Orange România" />
          <Field label="Email" value={form.email} onChange={v => setForm({ ...form, email: v })} placeholder="nume@companie.ro" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Select label="Obiectiv" value={form.objective} onChange={v => setForm({ ...form, objective: v })} options={['Educație digitală', 'TechWomen', 'Mediu & citizen science', 'Seniori – incluziune', 'Alt obiectiv']} />
          <Select label="Buget orientativ" value={form.budget} onChange={v => setForm({ ...form, budget: v })} options={['Sub 10k €', '10–25k €', '25–50k €', '50k+ €', 'În curs de definire']} />
        </div>
        <div>
          <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#0e0f0c', marginBottom: 6 }}>3 rânduri despre obiectiv</div>
          <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Ce rezultat vrei să obții în 6–12 luni? Ce audiență? Ce KPI intern contează?" style={{
            width: '100%', minHeight: 120, resize: 'vertical',
            fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: '#0e0f0c',
            padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(14,15,12,0.12)',
            outline: 'none', lineHeight: 1.5,
          }} onFocus={e => e.target.style.boxShadow = 'rgb(134,134,133) 0 0 0 1px inset'} onBlur={e => e.target.style.boxShadow = 'none'} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8, gap: 14, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: '#868685' }}>Răspundem în 48h. Fără listă de email, fără spam.</div>
          <Button variant="primary" arrow onClick={null}>Trimite propunerea</Button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#0e0f0c', marginBottom: 6 }}>{label}</div>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{
        width: '100%', fontFamily: 'Inter', fontSize: 16, fontWeight: 600,
        padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(14,15,12,0.12)',
        outline: 'none', color: '#0e0f0c', letterSpacing: -0.1,
      }} onFocus={e => e.target.style.boxShadow = 'rgb(134,134,133) 0 0 0 1px inset'} onBlur={e => e.target.style.boxShadow = 'none'} />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#0e0f0c', marginBottom: 6 }}>{label}</div>
      <select value={value} onChange={e => onChange(e.target.value)} style={{
        width: '100%', fontFamily: 'Inter', fontSize: 16, fontWeight: 600,
        padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(14,15,12,0.12)',
        outline: 'none', color: '#0e0f0c', background: '#fff', appearance: 'none',
        backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none' stroke='%230e0f0c' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m1 1 5 5 5-5'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
        paddingRight: 36,
      }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

Object.assign(window, { ProgramDetail, CsrForm, Field, Select });
