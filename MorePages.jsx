// MorePages.jsx — CSR, Impact, Rapoarte, Stiri, Contact, Parteneri etc.
const typoM = {
  display: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: -2, lineHeight: 0.9, color: '#0e0f0c' },
  body: { fontFamily: 'Inter', fontWeight: 500, color: '#454745', lineHeight: 1.5 },
};

/* ===================== SPONSORIZARE 20% ===================== */
function Sponsorizare({ setRoute }) {
  return (
    <div>
      <PageHeader
        kickers={['Sponsorizare 20%', 'Companii cu impozit pe profit', 'Legea 32/1994']}
        title="Redirecționează 20% din impozitul pe profit către"
        highlight="educație digitală"
        lead="Sponsorizarea 20% este o modalitate legală prin care companiile pot redirecționa până la 20% din impozitul pe profit către ONG-uri eligibile — fără cost suplimentar, cu impact real în comunitate."
      />
      <section style={{ padding: '0 32px 32px', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        <div style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 32 }}>
          <h2 style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: 600, color: '#0e0f0c', margin: 0, letterSpacing: -0.4 }}>Cum funcționează</h2>
          <ol style={{ marginTop: 16, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Calculăm împreună plafonul disponibil (20% din impozitul pe profit datorat).',
              'Semnăm un contract de sponsorizare standard, aliniat cu Legea 32/1994.',
              'Transferul se poate face o singură dată sau eșalonat, pe durata anului fiscal.',
              'Primești rapoarte de utilizare, dovezi de implementare, materiale de comunicare.',
              'Suma sponsorizată se deduce direct din impozitul pe profit datorat către stat.',
            ].map((t, i) => <li key={i} style={{ ...typoM.body, fontSize: 16, color: '#0e0f0c' }}>{t}</li>)}
          </ol>
        </div>
        <div style={{ background: '#9fe870', borderRadius: 24, padding: 28 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 700, color: '#163300', textTransform: 'uppercase', letterSpacing: 1 }}>Exemplu</div>
          <div style={{ marginTop: 10, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, color: '#163300', letterSpacing: -1.6, lineHeight: 1 }}>50.000 RON</div>
          <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#163300', marginTop: 6, opacity: 0.8 }}>impozit pe profit</div>
          <div style={{ marginTop: 20, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: '#163300', letterSpacing: -1 }}>→ 10.000 RON</div>
          <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#163300', opacity: 0.8 }}>disponibil pentru sponsorizare, fără cost suplimentar</div>
          <div style={{ marginTop: 24 }}><Button variant="dark" arrow onClick={() => setRoute('propune')}>Solicită contract</Button></div>
        </div>
      </section>

      <section style={{ padding: '48px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typoM.display, fontSize: 44, letterSpacing: -1.4, margin: 0 }}>În ce programe se investește</h2>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            ['Hub de programare Adjud', 'Echipamente, licențe, facilitare pentru ateliere recurente.'],
            ['Burse & acces', 'Elevi din medii vulnerabile, transport, materiale educaționale.'],
            ['TechWomen Empowerment', 'Programe dedicate pentru femei — alfabetizare digitală și autonomie.'],
            ['Arduino & micro:bit', 'Kit-uri STEM pentru școli partenere, mentorat și demo day.'],
            ['Citizen Science', 'Senzori, platforme, acțiuni de teren pentru mediu (AquaKit, EcoWatch).'],
            ['Siguranță online', 'Ghiduri, ateliere pentru elevi și părinți, materiale media.'],
          ].map(([t, b]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 20, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 22 }}>
              <h4 style={{ margin: 0, fontFamily: 'Inter', fontSize: 17, fontWeight: 600, color: '#0e0f0c' }}>{t}</h4>
              <p style={{ ...typoM.body, marginTop: 6, fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#0e0f0c', color: '#fff', borderRadius: 24, padding: 32 }}>
          <h3 style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#9fe870', margin: 0 }}>Date de sponsorizare</h3>
          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, fontFamily: 'Inter', fontSize: 15 }}>
            <div><div style={{ opacity: 0.6, fontSize: 12 }}>Denumire</div>Asociația Grupul Verde</div>
            <div><div style={{ opacity: 0.6, fontSize: 12 }}>CUI</div>40123456</div>
            <div><div style={{ opacity: 0.6, fontSize: 12 }}>Nr. Reg.</div>15/A/2019</div>
            <div><div style={{ opacity: 0.6, fontSize: 12 }}>IBAN RON</div>RO12 BTRL 0123 4567 8901 2345</div>
            <div><div style={{ opacity: 0.6, fontSize: 12 }}>Banca</div>Banca Transilvania</div>
            <div><div style={{ opacity: 0.6, fontSize: 12 }}>Sediu</div>Adjud, jud. Vrancea, România</div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===================== CORPORATE ===================== */
function Corporate({ setRoute }) {
  return (
    <div>
      <PageHeader
        kickers={['Parteneriate corporate', 'CSR · ESG · HR · Employer Branding']}
        title="Programe CSR cu KPI, livrabile și"
        highlight="raportare"
        lead="Construim parteneriate pe termen lung cu companii care vor rezultate reale și raportabile. Definim obiectivele, co-creăm programul, livrăm și raportăm transparent."
      />
      <section style={{ padding: '0 32px 48px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            ['01', 'Discovery', 'Atelier scurt: obiective CSR/ESG/HR, audiență, constrângeri, buget orientativ.'],
            ['02', 'Propunere', 'Plan concret: program, calendar, echipă, livrabile, KPI, comunicare.'],
            ['03', 'Implementare', 'Ateliere, mentorat, evenimente. Voluntariat corporate opțional.'],
            ['04', 'Raport', 'Date + dovezi: beneficiari, ore, pre/post, portofolii, foto, story-uri.'],
          ].map(([n, t, b]) => (
            <div key={n} style={{ background: '#fff', borderRadius: 20, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 22 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 42, color: '#9fe870', letterSpacing: -1.4, lineHeight: 1 }}>{n}</div>
              <h4 style={{ marginTop: 8, fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#0e0f0c' }}>{t}</h4>
              <p style={{ ...typoM.body, marginTop: 6, fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typoM.display, fontSize: 44, letterSpacing: -1.4, margin: 0 }}>Formate de parteneriat</h2>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            ['Program anual co-branded', 'Un program recurent (ex. TechWomen, Youth Code Academy) cu brandingul tău, calendar, echipă dedicată și raportare lunară.', ['8–24 luni', '40k+ €', 'Co-brand', 'Impact raport']],
            ['Eveniment tematic / hackathon', 'Ediție 1–3 zile, workshop-uri, demo day, prezență în comunicare. Bun pentru vizibilitate + recrutare.', ['1–3 zile', '10–30k €', 'Vizibilitate', 'Recrutare']],
            ['Challenge pilot (test & scale)', '3–6 luni, grup pilot, KPI strict, decidem dacă scalăm la nivel regional.', ['3–6 luni', '15–40k €', 'Pilot', 'Scale-ready']],
          ].map(([t, b, tags]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 26 }}>
              <h3 style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: '#0e0f0c', margin: 0, letterSpacing: -0.3 }}>{t}</h3>
              <p style={{ ...typoM.body, fontSize: 15, marginTop: 10 }}>{b}</p>
              <div style={{ marginTop: 16 }}>{tags.map(tg => <Pill key={tg}>{tg}</Pill>)}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button variant="primary" arrow onClick={() => setRoute('propune')}>Propune un parteneriat</Button>
          <Button variant="secondary" onClick={() => setRoute('rapoarte')}>Vezi rapoartele</Button>
        </div>
      </section>
    </div>
  );
}

/* ===================== VOLUNTARIAT ===================== */
function Voluntariat({ setRoute }) {
  const roles = [
    ['Mentor tehnic', 'Frontend, backend, data, AI — cu elevi, tineri sau femei. 2–4h / săptămână, hybrid.', ['Tech', 'Mentor']],
    ['Facilitator atelier', 'Co-prezinți workshop-uri cu echipa noastră (programare, productivitate, siguranță online).', ['Comunicare', 'On-site']],
    ['Suport IT / hardware', 'Ajuți la setup, întreținere, debugging în hub-ul din Adjud sau remote.', ['IT', 'Logistic']],
    ['Coach de carieră', 'Simulezi interviuri, revizuiești CV-uri, oferi feedback cu TechWomen sau Youth.', ['HR', 'Mentor']],
    ['Ambasador eveniment', 'La hackathoane / demo day: judecător, mentor, speaker.', ['Eveniment', 'Judecător']],
    ['Content creator pro bono', 'Ajuți la comunicare: fotografie, video, storytelling pentru programe.', ['Creativ', 'Comunicare']],
  ];
  return (
    <div>
      <PageHeader
        kickers={['Voluntariat corporate', 'Mentorat · Ateliere · Suport']}
        title="Roluri clare, impact real, experiență bună pentru"
        highlight="voluntari"
        lead="Voluntariatul corporate funcționează când oamenii tăi au roluri clare și resurse. La Grupul Verde, pregătim brief-uri, logistică și feedback loop — ca să fie o experiență bună pentru ambele părți."
      />
      <section style={{ padding: '0 32px 48px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {roles.map(([t, b, tags]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 20, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 22 }}>
              <div>{tags.map(tg => <Pill key={tg} accent>{tg}</Pill>)}</div>
              <h3 style={{ marginTop: 10, fontFamily: 'Inter', fontSize: 19, fontWeight: 600, color: '#0e0f0c', letterSpacing: -0.2 }}>{t}</h3>
              <p style={{ ...typoM.body, fontSize: 14, marginTop: 6 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: '32px 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#e2f6d5', borderRadius: 24, padding: 32, display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 320px' }}>
            <h3 style={{ ...typoM.display, fontSize: 32, letterSpacing: -1, color: '#163300', margin: 0 }}>Ești în HR și cauți program?</h3>
            <p style={{ ...typoM.body, color: '#163300', opacity: 0.85, marginTop: 10 }}>Pregătim brief-uri pentru manageri, matchmaking voluntar-beneficiar, feedback loops și rapoarte.</p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}><Button variant="dark" arrow onClick={() => setRoute('propune')}>Construim împreună</Button></div>
        </div>
      </section>
    </div>
  );
}

/* ===================== PROPUNE UN PARTENERIAT (form) ===================== */
function Propune({ setRoute }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ company: '', name: '', email: '', objective: 'Educație digitală', budget: '10–25k €', message: '' });
  if (submitted) {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, background: '#9fe870', borderRadius: 9999, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, color: '#163300', fontWeight: 800 }}>✓</div>
        <h1 style={{ marginTop: 24, ...typoM.display, fontSize: 72, letterSpacing: -2 }}>Mulțumim!</h1>
        <p style={{ ...typoM.body, marginTop: 20, fontSize: 18 }}>Revenim în 48h cu un plan concret. Între timp, vezi <a onClick={() => setRoute('programe-active')} style={{ color: '#163300', cursor: 'pointer', textDecoration: 'underline' }}>programele active</a>.</p>
      </div>
    );
  }
  return (
    <div style={{ maxWidth: 920, margin: '0 auto', padding: '56px 32px' }}>
      <Pill>CSR & Parteneriate</Pill>
      <h1 style={{ marginTop: 16, ...typoM.display, fontSize: 72, letterSpacing: -2 }}>
        Propune un <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 25%, transparent 25%)', padding: '0 6px' }}>parteneriat</span>
      </h1>
      <p style={{ ...typoM.body, marginTop: 20, fontSize: 18, maxWidth: 640 }}>Trimite-ne câteva rânduri despre obiectivul companiei (CSR/ESG/HR) și îți răspundem cu un plan: obiective, buget, KPI, timeline și implementare.</p>
      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ marginTop: 32, background: '#fff', borderRadius: 30, boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px', padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Field label="Companie" value={form.company} onChange={v => setForm({ ...form, company: v })} placeholder="Ex. Orange România" />
          <Field label="Persoana de contact" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="Nume și prenume" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Field label="Email" value={form.email} onChange={v => setForm({ ...form, email: v })} placeholder="nume@companie.ro" />
          <Select label="Obiectiv principal" value={form.objective} onChange={v => setForm({ ...form, objective: v })} options={['Educație digitală', 'TechWomen', 'STEM (Arduino/micro:bit)', 'Mediu & citizen science', 'Siguranță online', 'Seniori / incluziune', 'Altul']} />
        </div>
        <Select label="Buget orientativ" value={form.budget} onChange={v => setForm({ ...form, budget: v })} options={['Sub 10k €', '10–25k €', '25–50k €', '50k+ €', 'În curs de definire']} />
        <div>
          <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#0e0f0c', marginBottom: 6 }}>Câteva rânduri despre obiectiv</div>
          <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Ce rezultat vrei să obții în 6–12 luni? Ce audiență? Ce KPI intern contează?" style={{ width: '100%', minHeight: 120, resize: 'vertical', fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: '#0e0f0c', padding: '12px 16px', borderRadius: 10, border: '1px solid rgba(14,15,12,0.12)', outline: 'none', lineHeight: 1.5 }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', marginTop: 4 }}>
          <div style={{ fontFamily: 'Inter', fontSize: 13, color: '#868685' }}>Răspundem în 48h. Fără listă de email, fără spam.</div>
          <Button variant="primary" arrow>Trimite propunerea</Button>
        </div>
      </form>
    </div>
  );
}

/* ===================== PROGRAME IMPLEMENTATE ===================== */
function ProgrameImplementate({ setRoute }) {
  const projects = [
    ['TechWomen Empowerment Hub — Adjud (2025)', 'Program de alfabetizare și autonomie digitală pentru femei. Rezultate: retenție 88%, 32 beneficiare, 4 module finalizate.', ['2025', 'Incluziune', 'Raport public']],
    ['#SuperCoders 2025', 'Competiție națională de programare pentru copii & tineri. Rezultate: 112 proiecte, 18 echipe, demo day transmis live.', ['2025', 'Competiție', 'Youth']],
    ['EduHack Adjud 2025 (DigiEduHack)', 'Hackathon educațional — soluții digitale pentru educație incluzivă. Raport public, premiere & mentorat.', ['2025', 'Hackathon', 'DigiEduHack']],
    ['Protejarea mediului cu Arduino & micro:bit', 'Program STEM în școli locale — senzori, monitorizare, proiecte comunitare.', ['2024', 'STEM', 'Green']],
    ['Agricultura 4.0 — viitorul tinerilor fermieri', 'Introducere în tehnologie pentru comunitate rurală: senzori agricoli, automatizări.', ['2024', 'Rural', 'Tech']],
    ['Mâini calde. Inimi calde.', 'Campanie socială — sprijin pentru familii vulnerabile în sezonul rece.', ['2024', 'Social', 'Campanie']],
  ];
  return (
    <div>
      <PageHeader
        kickers={['Programe implementate', 'Documentare · Rapoarte · Impact']}
        title="Ce am"
        highlight="construit deja"
        lead="Portofoliu de programe încheiate, fiecare cu un raport de impact public. Extragem lecțiile învățate și scalăm ce funcționează."
      />
      <section style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {projects.map(([t, b, tags], i) => (
            <div key={t} style={{ background: i % 3 === 0 ? '#0e0f0c' : '#fff', color: i % 3 === 0 ? '#fff' : '#0e0f0c', borderRadius: 24, boxShadow: i % 3 === 0 ? 'none' : 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 28 }}>
              <div>{tags.map((tg, j) => <span key={tg} style={{ padding: '4px 10px', borderRadius: 9999, background: i % 3 === 0 ? 'rgba(159,232,112,0.2)' : 'rgba(22,51,0,0.08)', color: i % 3 === 0 ? '#9fe870' : '#0e0f0c', fontFamily: 'Inter', fontSize: 12, fontWeight: 600, marginRight: 6 }}>{tg}</span>)}</div>
              <h3 style={{ marginTop: 14, fontFamily: 'Inter', fontSize: 26, fontWeight: 600, letterSpacing: -0.5, lineHeight: 1.2, color: i % 3 === 0 ? '#fff' : '#0e0f0c' }}>{t}</h3>
              <p style={{ marginTop: 10, fontFamily: 'Inter', fontSize: 16, fontWeight: 500, color: i % 3 === 0 ? 'rgba(255,255,255,0.72)' : '#454745', lineHeight: 1.5 }}>{b}</p>
              <a onClick={() => setRoute('impact')} style={{ marginTop: 16, display: 'inline-block', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: i % 3 === 0 ? '#9fe870' : '#163300', cursor: 'pointer' }}>Citește raportul →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===================== IMPACT & REZULTATE ===================== */
function Impact({ setRoute }) {
  return (
    <div>
      <PageHeader
        kickers={['Impact & rezultate', 'Date · Dovezi · Transparență']}
        title="Impact"
        highlight="măsurabil"
        lead="Fiecare program are KPI pre/post, portofolii de proiecte și dovezi fotografice. Iată agregatul ultimului an."
      />
      <section style={{ padding: '0 32px 48px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#0e0f0c', color: '#fff', borderRadius: 30, padding: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[['189+', 'Beneficiari direcți'], ['80+', 'Ateliere & sesiuni'], ['24', 'Ore / participant'], ['92%', 'Retenție program']].map(([n, l]) => (
              <div key={l} style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 72, letterSpacing: -2.4, lineHeight: 0.9, color: '#9fe870' }}>{n}</div>
                <div style={{ marginTop: 10, fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typoM.display, fontSize: 44, letterSpacing: -1.4, margin: 0 }}>Cum măsurăm</h2>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            ['Pre/post test', 'Fiecare modul începe și se încheie cu un test scurt. Măsurăm progresul concret, nu prezența.'],
            ['Portofoliu per participant', 'Fiecare elev încheie cu un portofoliu: proiecte, prezentări, code repo.'],
            ['Follow-up la 3 luni', 'Reluăm contactul la 3 luni să vedem ce au continuat să folosească.'],
          ].map(([t, b]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 20, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 22 }}>
              <h4 style={{ margin: 0, fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#0e0f0c' }}>{t}</h4>
              <p style={{ ...typoM.body, marginTop: 6, fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===================== RAPOARTE ===================== */
function Rapoarte({ setRoute }) {
  const items = [
    ['TechWomen Empowerment Hub — Adjud 2025', 'Raport de impact: rezultate măsurabile, impact real.', '2025'],
    ['Raport program #SuperCoders 2025', 'Date, proiecte, lecții învățate.', '2025'],
    ['EduHack Adjud 2025 — DigiEduHack', 'Raport de Impact & Rezultate.', '2025'],
    ['Formular 230 ANAF 2026', 'Aplicație gratuită pentru generare PDF (3,5%).', '2026'],
    ['EduPlan Adjud — Școala Altfel & Săptămâna Verde', 'Program 2026–2027.', '2026'],
    ['Generator Fișe — Școala Altfel', 'PDF pentru profesori.', '2025'],
  ];
  return (
    <div>
      <PageHeader
        kickers={['Rapoarte & transparență']}
        title="Documente"
        highlight="publice"
        lead="Audit-friendly by default. Descarcă rapoarte, vezi date per program și verifică cum a fost utilizat fiecare leu."
      />
      <section style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', overflow: 'hidden' }}>
          {items.map(([t, b, y], i) => (
            <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '18px 24px', borderTop: i === 0 ? 0 : '1px solid rgba(14,15,12,0.06)' }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, background: '#e2f6d5', color: '#163300', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>PDF</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: 600, color: '#0e0f0c' }}>{t}</div>
                <div style={{ ...typoM.body, fontSize: 14, marginTop: 2 }}>{b}</div>
              </div>
              <Pill>{y}</Pill>
              <Button variant="secondary">Descarcă</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===================== PARTENERI ===================== */
function Parteneri({ setRoute }) {
  const parteneri = [
    ['Primăria Adjud', 'Instituțional'], ['Inspectoratul Școlar Vrancea', 'Educațional'],
    ['Liceul „Emil Botta" Adjud', 'Școală parteneră'], ['Școala Gimnazială Nr. 1', 'Școală parteneră'],
    ['Orange România', 'CSR · Telecom'], ['Banca Transilvania', 'CSR · Financiar'],
    ['Code for Romania', 'ONG partener'], ['Techsoup România', 'Resurse · Tech'],
    ['DigiEduHack', 'Rețea europeană'], ['EIT — European Institute', 'Finanțare'],
  ];
  return (
    <div>
      <PageHeader
        kickers={['Parteneri educaționali & CSR']}
        title="Organizațiile cu care"
        highlight="construim"
        lead="Parteneriate solide, pe termen lung, cu instituții publice, școli, companii și rețele internaționale."
      />
      <section style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
          {parteneri.map(([n, k], i) => (
            <div key={n} style={{ background: '#fff', borderRadius: 16, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 20, aspectRatio: '1 / 1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: i % 2 ? '#e2f6d5' : '#f3f7ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#163300' }}>{n.split(' ').map(s => s[0]).slice(0, 2).join('')}</div>
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#0e0f0c', lineHeight: 1.25 }}>{n}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 500, color: '#868685', marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.6 }}>{k}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===================== STIRI ===================== */
function Stiri({ setRoute }) {
  const stiri = [
    ['15 Dec 2025', 'Hub de programare', 'Lansăm Hub-ul de programare din Adjud — 2026', 'Spațiu stabil pentru programe recurente, cu echipamente noi și program săptămânal pentru elevi V–XII.'],
    ['08 Dec 2025', 'Strategie', 'Plan Strategic 2026–2030: Green Skills & Digital Education', 'Viziunea noastră pe 5 ani — direcții de investiție, parteneriate strategice și impact regional.'],
    ['22 Nov 2025', 'Program', 'AI în Educație și Formare — Seminar Practic (10–11 ianuarie 2026)', 'Seminar pentru profesori: integrare AI în lecții, evaluări, instrumente practice.'],
    ['14 Nov 2025', 'CSR', 'Campania socială „Mâini calde. Inimi calde."', 'Sprijin pentru familii vulnerabile din Vrancea în sezonul rece.'],
    ['05 Nov 2025', 'Raport', 'TechWomen Empowerment Hub — raport 2025', 'Rezultate măsurabile, impact real. 88% retenție, 32 beneficiare.'],
    ['28 Oct 2025', 'Eveniment', 'EduHack Adjud 2025 — Raport de impact', 'Ediția din 2025 a DigiEduHack: 18 echipe, 24h, soluții pentru educație incluzivă.'],
  ];
  return (
    <div>
      <PageHeader kickers={['Știri & resurse']} title="Ce se întâmplă la" highlight="Grupul Verde" lead="Noutăți, rapoarte și resurse publicate regulat." />
      <section style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {stiri.map(([d, cat, t, b], i) => (
            <div key={t} style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Pill accent>{cat}</Pill>
                <span style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 500, color: '#868685' }}>{d}</span>
              </div>
              <h3 style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: 600, color: '#0e0f0c', margin: 0, letterSpacing: -0.4, lineHeight: 1.2 }}>{t}</h3>
              <p style={{ ...typoM.body, fontSize: 15 }}>{b}</p>
              <a style={{ marginTop: 'auto', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#163300', cursor: 'pointer' }}>Citește →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===================== CONTACT ===================== */
function Contact({ setRoute }) {
  return (
    <div>
      <PageHeader kickers={['Contact', 'Adjud · Vrancea']} title="Hai să" highlight="vorbim" lead="Programe educaționale, parteneriate CSR, voluntariat, știri — ne găsești oricum îți e mai ușor." />
      <section style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 32 }}>
          <h3 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 600, color: '#0e0f0c', margin: 0, letterSpacing: -0.4 }}>Contact direct</h3>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['Email', 'office@grupulverde.ro'], ['Telefon', '+40 374 962 748'], ['Program', 'Luni – Vineri · 09:00 – 18:30'], ['Sediu', 'Adjud, jud. Vrancea, România']].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 700, color: '#868685', textTransform: 'uppercase', letterSpacing: 0.8 }}>{l}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 17, fontWeight: 600, color: '#0e0f0c', marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}><Button variant="primary" arrow onClick={() => setRoute('propune')}>Formular parteneriat</Button></div>
        </div>
        <div style={{ background: '#9fe870', borderRadius: 24, padding: 32 }}>
          <h3 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 600, color: '#163300', margin: 0, letterSpacing: -0.4 }}>Vino în vizită</h3>
          <p style={{ marginTop: 12, ...typoM.body, color: '#163300', fontSize: 15 }}>Hub-ul nostru e deschis pentru vizitatori în programul anunțat. Sună înainte ca să ne asigurăm că e cineva disponibil să-ți arate locul.</p>
          <div style={{ marginTop: 20, padding: 20, background: '#fff', borderRadius: 16 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: '#163300', letterSpacing: 0.5, textTransform: 'uppercase' }}>Open Lab Days</div>
            <div style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: '#0e0f0c', marginTop: 6 }}>Prima sâmbătă din lună, 10:00 – 13:00</div>
            <div style={{ fontFamily: 'Inter', fontSize: 14, color: '#454745', marginTop: 4 }}>Demo-uri de proiecte, mini-ateliere, înscrieri.</div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===================== DONATE ===================== */
function Donate({ setRoute }) {
  const [amount, setAmount] = React.useState(100);
  const [freq, setFreq] = React.useState('o-singura-data');
  return (
    <div>
      <PageHeader kickers={['Donează']} title="Fiecare donație e un copil care învață" highlight="azi" lead="Donațiile tale finanțează ateliere, transport pentru elevi din medii vulnerabile, materiale și licențe pentru cursuri." />
      <section style={{ padding: '0 32px 72px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ background: '#fff', borderRadius: 30, boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px', padding: 36 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['o-singura-data', 'lunar'].map(f => (
              <button key={f} onClick={() => setFreq(f)} style={{
                padding: '10px 18px', borderRadius: 9999, border: 0, cursor: 'pointer',
                background: freq === f ? '#0e0f0c' : 'rgba(22,51,0,0.06)',
                color: freq === f ? '#fff' : '#0e0f0c',
                fontFamily: 'Inter', fontSize: 14, fontWeight: 600,
              }}>{f === 'o-singura-data' ? 'O singură dată' : 'Lunar'}</button>
            ))}
          </div>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {[50, 100, 250, 500].map(a => (
              <button key={a} onClick={() => setAmount(a)} style={{
                padding: '20px 10px', borderRadius: 16, cursor: 'pointer',
                border: amount === a ? '2px solid #163300' : '2px solid transparent',
                background: amount === a ? '#9fe870' : '#f3f7ef',
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: '#163300', letterSpacing: -0.8,
              }}>{a} RON</button>
            ))}
          </div>
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#0e0f0c' }}>Altă sumă</div>
            <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} style={{ marginTop: 6, width: '100%', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: '#0e0f0c', padding: '12px 16px', borderRadius: 12, border: '1px solid rgba(14,15,12,0.12)', outline: 'none' }} />
          </div>
          <div style={{ marginTop: 24, padding: 16, background: '#e2f6d5', borderRadius: 14, fontFamily: 'Inter', fontSize: 14, color: '#163300' }}>
            <strong>{amount} RON {freq === 'lunar' ? '/ lună' : ''}</strong> finanțează aprox. <strong>{Math.max(1, Math.round(amount / 35))} ore de atelier</strong> pentru elevi din Vrancea.
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="primary" arrow>Donează acum</Button>
            <Button variant="secondary" onClick={() => setRoute('rapoarte')}>Vezi unde merg banii</Button>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: 24, background: '#fff', borderRadius: 20, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px' }}>
          <h4 style={{ margin: 0, fontFamily: 'Inter', fontSize: 16, fontWeight: 600, color: '#0e0f0c' }}>Ești persoană fizică?</h4>
          <p style={{ ...typoM.body, fontSize: 14, marginTop: 6 }}>Poți redirecționa <strong>3,5% din impozitul pe venit</strong> prin Formularul 230 — nu te costă nimic. Avem generator PDF gratuit.</p>
          <div style={{ marginTop: 10 }}><Button variant="secondary">Completează Formular 230 →</Button></div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, {
  Sponsorizare, Corporate, Voluntariat, Propune,
  ProgrameImplementate, Impact, Rapoarte, Parteneri, Stiri, Contact, Donate,
});
