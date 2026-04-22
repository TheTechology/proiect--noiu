// Sections.jsx — stats, programs, CSR ladder, options, FAQ, footer
function StatRow() {
  const stats = [
    ['189+', 'Beneficiari direcți: copii, tineri, adulți, seniori'],
    ['80+', 'Ateliere & sesiuni practice'],
    ['5+', 'Școli / comunități implicate'],
    ['2019+', 'Inițiative educaționale în comunitate'],
  ];
  return (
    <section style={{ padding: '32px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ background: '#fff', borderRadius: 40, boxShadow: 'rgba(14,15,12,0.12) 0 0 0 1px', padding: 40, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {stats.map(([n, l], i) => (
          <div key={i}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 72, lineHeight: 0.9, letterSpacing: -2.4, color: '#0e0f0c' }}>{n}</div>
            <div style={{ marginTop: 12, fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#454745', lineHeight: 1.4 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ tag, title, body, featured, onOpen }) {
  return (
    <div style={{
      background: featured ? '#fff' : '#fff',
      border: featured ? '1px solid #9fe870' : 0,
      boxShadow: featured ? 'none' : 'rgba(14,15,12,0.12) 0 0 0 1px',
      borderRadius: 30, padding: 28,
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <span style={{
        alignSelf: 'flex-start',
        padding: '4px 10px', borderRadius: 9999,
        background: featured ? '#9fe870' : '#e2f6d5',
        color: '#163300', fontSize: 12, fontWeight: 600, letterSpacing: -0.084,
      }}>{tag}</span>
      <h3 style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: 600, letterSpacing: -0.5, lineHeight: 1.2, margin: 0, color: '#0e0f0c' }}>{title}</h3>
      <p style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: '#454745', margin: 0 }}>{body}</p>
      <a onClick={onOpen} style={{ marginTop: 'auto', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#163300', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>Vezi programul →</a>
    </div>
  );
}

function ProgramGrid({ setRoute }) {
  const items = [
    ['STEM', 'Arduino & micro:bit', 'Ateliere hands-on: prototipuri, senzori, demo day, gândire logică și proiecte demonstrabile.', true],
    ['Digital', 'Educație digitală & web', 'Alfabetizare digitală, productivitate, web & programare — cu progres pe nivel și livrabile practice.', false],
    ['Mediu', 'Citizen science', 'Măsurători în teren (apă/aer/energie), date pentru comunitate, educație ecologică prin tehnologie.', false],
    ['Siguranță', 'Cetățenie digitală', 'Prevenție, alfabetizare media, protecția datelor, comportamente sigure — resurse pentru elevi și părinți.', false],
    ['Incluziune', 'TechWomen Hub', 'Acces real la educație pentru grupuri vulnerabile și creșterea participării fetelor în tech.', false],
    ['Seniori', 'Incluziune digitală', 'Competențe digitale utile, autonomie și siguranță (anti-fraudă, comunicare, servicii online).', false],
  ];
  return (
    <section style={{ padding: '64px 32px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 32, maxWidth: 820 }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 0.88, letterSpacing: -1.6, margin: 0, color: '#0e0f0c' }}>
          Ce facem — programe construite pe competențe, continuitate și rezultate
        </h2>
        <p style={{ marginTop: 16, fontFamily: 'Inter', fontSize: 18, fontWeight: 500, color: '#454745', lineHeight: 1.44 }}>
          Livrăm programe pentru copii, tineri, adulți și seniori, pe direcții aliniate la priorități europene și la nevoile comunității.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {items.map((it, i) => <ProgramCard key={i} tag={it[0]} title={it[1]} body={it[2]} featured={it[3]} onOpen={() => setRoute('program')} />)}
      </div>
    </section>
  );
}

function CsrSteps() {
  const steps = [
    ['Definim nevoia & obiectivele', 'CSR/ESG, HR, employer branding, digital inclusion, mediu — alegem un format potrivit.'],
    ['Stabilim KPI & livrabile', 'beneficiari, ore, retenție, pre/post, portofolii, demo day, materiale de comunicare.'],
    ['Implementăm "ca în industrie"', 'calendar, roluri, responsabilități, mentorat/voluntariat corporate, management operațional.'],
    ['Raportăm transparent', 'rezultate + dovezi, rapoarte publice, impact ușor de comunicat intern/extern.'],
  ];
  return (
    <section style={{ padding: '64px 32px', background: '#0e0f0c', color: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 900, marginBottom: 40 }}>
          <span style={{ padding: '4px 10px', borderRadius: 9999, background: '#9fe870', color: '#163300', fontSize: 12, fontWeight: 600 }}>Pentru companii</span>
          <h2 style={{ marginTop: 16, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 0.88, letterSpacing: -1.6, color: '#fff' }}>
            Programe CSR/ESG cu <span style={{ color: '#9fe870' }}>KPI, livrabile</span> și raportare
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {steps.map(([t, b], i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 20 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 1, color: '#9fe870', letterSpacing: -2 }}>{i+1}</div>
              <h3 style={{ marginTop: 14, fontFamily: 'Inter', fontSize: 20, fontWeight: 600, letterSpacing: -0.3, color: '#fff' }}>{t}</h3>
              <p style={{ marginTop: 8, fontFamily: 'Inter', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionsGrid({ setRoute }) {
  const opts = [
    ['Sponsorizare 20%', 'Modalitate legală și eficientă pentru a finanța educația digitală, incluziunea și programe de mediu — fără cost suplimentar în multe cazuri.', 'Detalii sponsorizare 20%'],
    ['Voluntariat corporate & mentorat', 'Roluri clare pentru angajați: mentorat, ateliere, suport IT/logistic, evenimente. Rezultate raportabile.', 'Explorează voluntariatul'],
    ['Co-creare program CSR', 'Educație digitală, TechWomen, hackathoane educaționale, citizen science, programe recurente pentru comunități vulnerabile.', 'Propune un parteneriat'],
  ];
  return (
    <section style={{ padding: '64px 32px', maxWidth: 1280, margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 0.9, letterSpacing: -1.4, margin: 0, maxWidth: 800, color: '#0e0f0c' }}>
        Opțiuni rapide de implicare
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginTop: 32 }}>
        {opts.map(([t, b, cta], i) => (
          <div key={i} style={{ background: i===2 ? '#e2f6d5' : '#fff', borderRadius: 30, padding: 32, boxShadow: i===2 ? 'none' : 'rgba(14,15,12,0.12) 0 0 0 1px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h3 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 600, letterSpacing: -0.4, lineHeight: 1.2, margin: 0, color: i===2 ? '#163300' : '#0e0f0c' }}>{t}</h3>
            <p style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 500, lineHeight: 1.5, color: i===2 ? '#163300' : '#454745', opacity: i===2 ? 0.85 : 1, margin: 0 }}>{b}</p>
            <div style={{ marginTop: 'auto' }}>
              <Button variant={i===2 ? 'dark' : 'secondary'} arrow onClick={() => setRoute('csr')}>{cta}</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqList() {
  const faqs = [
    ['Ce primește o companie dacă finanțează un program la Grupul Verde?', 'Un program cu obiective clare, calendar, livrabile (workshop-uri, demo day, portofolii), KPI (beneficiari, ore, retenție) și raportare + materiale de comunicare.'],
    ['Putem integra voluntariat corporate sau mentorat?', 'Da. Definim roluri clare pentru angajați (mentori, suport tehnic, facilitare), astfel încât implicarea să fie reală și raportabilă, nu simbolică.'],
    ['Există transparență publică (rapoarte, indicatori)?', 'Da. Avem pagini dedicate pentru impact, rapoarte și transparență, inclusiv structură tip „audit-friendly".'],
    ['Cum începe colaborarea?', 'Cel mai simplu: completezi „Propune un parteneriat", iar noi revenim cu un plan: obiective, buget, KPI, timeline și implementare.'],
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '64px 32px', maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, lineHeight: 0.9, letterSpacing: -1.4, margin: 0, color: '#0e0f0c' }}>
        Întrebări frecvente
      </h2>
      <p style={{ marginTop: 12, fontFamily: 'Inter', fontSize: 17, fontWeight: 500, color: '#454745', marginBottom: 28 }}>
        Răspunsuri scurte, utile pentru aprobări interne și planificare de parteneriat.
      </p>
      <div style={{ background: '#fff', borderRadius: 30, boxShadow: 'rgba(14,15,12,0.12) 0 0 0 1px', overflow: 'hidden' }}>
        {faqs.map(([q, a], i) => (
          <div key={i} style={{ borderTop: i === 0 ? 0 : '1px solid rgba(14,15,12,0.08)' }}>
            <button onClick={() => setOpen(open === i ? -1 : i)} style={{
              width: '100%', textAlign: 'left', background: 'transparent', border: 0, cursor: 'pointer',
              padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#0e0f0c', letterSpacing: -0.3,
            }}>
              <span>{q}</span>
              <span style={{ fontSize: 24, color: '#9fe870', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 150ms' }}>+</span>
            </button>
            {open === i && (
              <div style={{ padding: '0 28px 22px', fontFamily: 'Inter', fontSize: 16, fontWeight: 500, lineHeight: 1.55, color: '#454745' }}>{a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: '#0e0f0c', color: '#fff', padding: '64px 32px 32px', marginTop: 64 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, background: '#9fe870', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 26, color: '#163300' }}>G</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: -0.8, color: '#fff' }}>
              Grupul <span style={{ color: '#9fe870' }}>Verde</span>
            </div>
          </div>
          <p style={{ marginTop: 20, fontFamily: 'Inter', fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: 360 }}>
            Organizație non-guvernamentală · Adjud, jud. Vrancea · România. Educație digitală · Tehnologie · Mediu · Incluziune socială.
          </p>
        </div>
        {[
          ['Programe', ['Active', 'Implementate', 'Impact', 'Rapoarte']],
          ['Companii', ['CSR & parteneriate', 'Sponsorizare 20%', 'Voluntariat corporate', 'Propune parteneriat']],
          ['Despre', ['Cine suntem', 'Misiune & viziune', 'Echipă', 'Contact']],
        ].map(([title, items]) => (
          <div key={title}>
            <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 600, color: '#9fe870', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 14 }}>{title}</div>
            {items.map(it => (
              <div key={it} style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.85)', padding: '4px 0', cursor: 'pointer' }}>{it}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: '40px auto 0', paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>
        <div>© Asociația Grupul Verde · office@grupulverde.ro · +40 374 962 748</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <span>Politica de confidențialitate</span>
          <span>Politica cookies</span>
          <span>Termeni</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { StatRow, ProgramCard, ProgramGrid, CsrSteps, OptionsGrid, FaqList, Footer });
