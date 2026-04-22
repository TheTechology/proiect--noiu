// Pages.jsx — faithful rebuild of grupulverde.ro sections
const typo = {
  display: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: -2, lineHeight: 0.9, color: '#0e0f0c' },
  body: { fontFamily: 'Inter', fontWeight: 500, color: '#454745', lineHeight: 1.5 },
};

function Pill({ children, dark, accent }) {
  return <span style={{
    padding: '4px 10px', borderRadius: 9999,
    background: dark ? '#0e0f0c' : accent ? '#9fe870' : 'rgba(22,51,0,0.08)',
    color: dark ? '#9fe870' : accent ? '#163300' : '#0e0f0c',
    fontFamily: 'Inter', fontSize: 12, fontWeight: 600, letterSpacing: -0.08,
    display: 'inline-block', marginRight: 6, marginBottom: 6,
  }}>{children}</span>;
}

function PageHeader({ kickers = [], title, highlight, lead }) {
  return (
    <section style={{ padding: '72px 32px 40px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ marginBottom: 24 }}>{kickers.map((k, i) => <Pill key={i} dark={i === 0}>{k}</Pill>)}</div>
      <h1 style={{ ...typo.display, fontSize: 'clamp(48px, 7vw, 96px)', margin: 0, maxWidth: 1100 }}>
        {title}{highlight && <> <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 25%, transparent 25%)', padding: '0 6px' }}>{highlight}</span></>}
      </h1>
      {lead && <p style={{ ...typo.body, marginTop: 24, fontSize: 19, maxWidth: 820 }}>{lead}</p>}
    </section>
  );
}

function Quicklinks({ links, setRoute }) {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 32px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {links.map(([label, k]) => (
        <a key={label} onClick={() => setRoute(k)} style={{
          padding: '8px 14px', borderRadius: 9999, background: '#fff',
          boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px', cursor: 'pointer',
          fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#0e0f0c',
        }}>{label} →</a>
      ))}
    </div>
  );
}

/* ===================== CINE SUNTEM ===================== */
function CineSuntem({ setRoute }) {
  const directii = ['Educație digitală', 'Incluziune', 'Mediu & citizen science', 'CSR & voluntariat', 'Siguranță online'];
  const pillars = [
    ['Programe educaționale practice', 'Ateliere hands-on, competențe digitale, web, programare, Arduino & micro:bit.'],
    ['Extindere & incluziune', 'Mai multe comunități, focus pe egalitate de șanse, sprijin pentru vulnerabili.'],
    ['Hub educațional local', 'Un loc stabil pentru programe recurente, mentorat, voluntariat și evenimente.'],
    ['Parteneriate & raportare', 'Programe CSR, documentare și transparență: rapoarte, rezultate măsurabile.'],
  ];
  const cumLucram = [
    ['Nevoi reale', 'Începem cu nevoi concrete: școli, comunități, acces, competențe și resurse.'],
    ['Proiectare de program', 'Obiective, curriculum practic, livrabile, calendar și indicatori de progres.'],
    ['Implementare & mentorat', 'Ateliere hands-on, echipe mici, feedback, progres vizibil și comunitate.'],
    ['Rezultate & raportare', 'Documentăm activități și rezultate. Publicăm rapoarte pentru transparență.'],
    ['Continuitate', 'Programe recurente: nivel mai avansat, noi proiecte, noi oportunități.'],
    ['Scalare', 'Replicăm modele bune în alte școli/comunități și extindem parteneriatele.'],
  ];
  return (
    <div>
      <PageHeader
        kickers={['ONG · Adjud (Vrancea)', 'Educație digitală · STEM · Mediu', 'Copii · Tineri · Adulți · Seniori']}
        title="O comunitate care transformă educația prin"
        highlight="tehnologie"
        lead="Asociația Grupul Verde este un ONG din Adjud (Vrancea) care construiește programe de educație digitală, programare, Arduino & micro:bit, siguranță online și tehnologie pentru mediu, cu accent pe incluziune și rezultate măsurabile. Suntem un „hub de competențe” între școli, comunitate și companii: programe recurente, mentorat, voluntariat și parteneriate CSR cu impact documentat."
      />
      <Quicklinks setRoute={setRoute} links={[['Programe & Impact','programe-active'],['Transparență','rapoarte'],['CSR','csr-parteneriate'],['Contact','contact']]} />

      <section style={{ padding: '32px 32px 56px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#fff', borderRadius: 30, boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px', padding: 32 }}>
          <h2 style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#163300', margin: 0 }}>Direcțiile noastre</h2>
          <p style={{ ...typo.body, marginTop: 8, fontSize: 17 }}>3 piloni, o singură idee: competențe reale și șanse egale prin educație aplicată.</p>
          <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {directii.map(d => <div key={d} style={{ padding: '10px 16px', borderRadius: 9999, background: '#e2f6d5', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#163300' }}>{d}</div>)}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 32px 72px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typo.display, fontSize: 56, letterSpacing: -1.6, margin: 0 }}>Identitatea noastră</h2>
        <p style={{ ...typo.body, marginTop: 12, fontSize: 18, maxWidth: 900 }}>Suntem orientați pe acțiune: programe structurate, livrabile concrete, parteneriate solide și transparență. Ne adresăm copiilor, tinerilor, femeilor și seniorilor – cu conținut adaptat, dar aceeași rigoare: educație practică, „ca în industrie”.</p>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            ['Ce ne definește', ['învățare prin proiecte: prototipuri, aplicații, prezentări', 'mentorat și comunitate (peer learning)', 'incluziune: sprijin pentru grupuri vulnerabile', 'date și raportare: impact măsurabil']],
            ['Ce livrăm concret', ['ateliere și programe recurente (digital, web, Arduino)', 'evenimente educaționale (hackathoane, demonstrații)', 'programe pentru mediu (măsurători, citizen science)', 'siguranță digitală și alfabetizare media']],
            ['Cu cine lucrăm', ['școli și cadre didactice', 'autorități locale și comunități', 'companii și programe CSR', 'voluntari, mentori, profesioniști din tech']],
          ].map(([t, items]) => (
            <div key={t} style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px', padding: 24 }}>
              <h3 style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, letterSpacing: -0.3, margin: 0, color: '#0e0f0c' }}>{t}</h3>
              <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map(i => <li key={i} style={{ display: 'flex', gap: 10, ...typo.body, fontSize: 15, color: '#0e0f0c' }}><span style={{ color: '#9fe870', fontWeight: 800 }}>›</span>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 32px', background: '#fafaf7', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typo.display, fontSize: 48, letterSpacing: -1.4, margin: 0 }}>Povestea noastră (pe scurt)</h2>
        <p style={{ ...typo.body, marginTop: 12, fontSize: 17, maxWidth: 820 }}>Grupul Verde a crescut din nevoia reală de educație digitală accesibilă. Am construit pas cu pas programe, parteneriate și un hub educațional local, concentrat pe continuitate și impact.</p>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {pillars.map(([t, b], i) => (
            <div key={t} style={{ borderTop: '2px solid #9fe870', paddingTop: 18 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 44, color: '#163300', letterSpacing: -1.4, lineHeight: 1 }}>{i + 1}</div>
              <h4 style={{ marginTop: 10, fontFamily: 'Inter', fontSize: 17, fontWeight: 600, color: '#0e0f0c', letterSpacing: -0.2 }}>{t}</h4>
              <p style={{ ...typo.body, marginTop: 6, fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typo.display, fontSize: 48, letterSpacing: -1.4, margin: 0 }}>Cum lucrăm</h2>
        <p style={{ ...typo.body, marginTop: 12, fontSize: 17, maxWidth: 900 }}>Metodologia noastră: competențe + proiecte + mentorat + continuitate. Fiecare program are obiective, activități, rezultate și indicatori clari.</p>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {cumLucram.map(([t, b], i) => (
            <div key={t} style={{ background: '#fff', borderRadius: 20, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 22 }}>
              <div style={{ fontFamily: 'Inter', fontSize: 12, fontWeight: 700, color: '#163300', letterSpacing: 0.8 }}>{String(i + 1).padStart(2, '0')}</div>
              <h4 style={{ marginTop: 6, fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#0e0f0c', letterSpacing: -0.2 }}>{t}</h4>
              <p style={{ ...typo.body, marginTop: 6, fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '72px 32px', background: '#0e0f0c', color: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 56, letterSpacing: -1.6, lineHeight: 0.9, margin: 0, color: '#fff' }}>
            Hai să construim <span style={{ color: '#9fe870' }}>împreună</span>
          </h2>
          <p style={{ marginTop: 16, fontFamily: 'Inter', fontSize: 18, color: 'rgba(255,255,255,0.72)', maxWidth: 720, lineHeight: 1.5 }}>Vrei să susții educația digitală în Vrancea? Putem crea un program relevant pentru comunitate, cu impact clar și transparență.</p>
          <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="primary" arrow onClick={() => setRoute('contact')}>Contact</Button>
            <Button variant="secondary" onClick={() => setRoute('programe-active')} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Programe & Impact</Button>
            <Button variant="ghost" style={{ color: '#fff' }} onClick={() => setRoute('donate')}>Donează →</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===================== MISIUNE & VIZIUNE ===================== */
function Misiune({ setRoute }) {
  return (
    <div>
      <PageHeader
        kickers={['Misiune & viziune', 'Educație · Tehnologie · Mediu']}
        title="Competențe reale, șanse egale,"
        highlight="impact măsurabil"
        lead="Dezvoltăm educația digitală, incluziunea și tehnologia pentru mediu — cu programe practice, parteneriate solide și rezultate documentate public."
      />
      <section style={{ padding: '32px 32px 72px', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ background: '#9fe870', borderRadius: 30, padding: 40 }}>
          <Pill accent>Misiune</Pill>
          <h2 style={{ marginTop: 16, ...typo.display, fontSize: 40, letterSpacing: -1.2 }}>Să construim o comunitate în care educația digitală e accesibilă tuturor.</h2>
          <p style={{ ...typo.body, marginTop: 16, color: '#163300', fontSize: 17 }}>Livrăm programe practice pentru copii, tineri, adulți și seniori — în Adjud și dincolo de Adjud — folosind tehnologia ca pârghie de incluziune și dezvoltare.</p>
        </div>
        <div style={{ background: '#0e0f0c', borderRadius: 30, padding: 40, color: '#fff' }}>
          <Pill dark>Viziune</Pill>
          <h2 style={{ marginTop: 16, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, letterSpacing: -1.2, lineHeight: 0.95, color: '#fff' }}>O Vrancea în care fiecare copil are acces la competențe digitale relevante.</h2>
          <p style={{ marginTop: 16, fontFamily: 'Inter', fontSize: 17, fontWeight: 500, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>Un hub regional de educație și inovație socială, replicabil în alte comunități, care produce talent tehnic, cetățeni digitali responsabili și soluții pentru mediu.</p>
        </div>
      </section>
      <section style={{ padding: '0 32px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typo.display, fontSize: 48, letterSpacing: -1.4, margin: 0 }}>Valorile noastre</h2>
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {[
            ['Rigoare', 'Programele noastre au obiective, calendar, livrabile și KPI — ca în industrie.'],
            ['Incluziune', 'Prioritizăm accesul pentru grupuri vulnerabile: fete, seniori, medii defavorizate.'],
            ['Transparență', 'Publicăm rapoarte, dovezi și rezultate. Audit-friendly by default.'],
            ['Continuitate', 'Programe recurente, nu evenimente punctuale. Progres vizibil pe ani.'],
          ].map(([t, b]) => (
            <div key={t} style={{ padding: 24, borderRadius: 20, background: '#fff', boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px' }}>
              <h4 style={{ margin: 0, fontFamily: 'Inter', fontSize: 18, fontWeight: 600, color: '#0e0f0c' }}>{t}</h4>
              <p style={{ ...typo.body, marginTop: 8, fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ===================== ECHIPĂ ===================== */
function Echipa({ setRoute }) {
  const team = [
    { name: 'Ionuț Popa', role: 'Președinte · Program Director', area: 'Strategie, parteneriate, educație digitală' },
    { name: 'Maria Dobrescu', role: 'Coordonator TechWomen Hub', area: 'Incluziune digitală pentru femei' },
    { name: 'Andrei Radu', role: 'Lead Educație STEM', area: 'Arduino, micro:bit, hackathoane' },
    { name: 'Elena Ștefan', role: 'Coordonator Mediu', area: 'Citizen science, AquaKit, EcoWatch' },
    { name: 'Cătălin Mihai', role: 'Operațional & Voluntariat', area: 'Hub Adjud, logistică, evenimente' },
    { name: 'Ruxandra Olaru', role: 'Comunicare & Raportare', area: 'Transparență, rapoarte, CSR' },
  ];
  const colors = ['#9fe870', '#e2f6d5', '#f3f7ef', '#9fe870', '#e2f6d5', '#f3f7ef'];
  return (
    <div>
      <PageHeader
        kickers={['Echipa Grupul Verde']}
        title="Oamenii care construiesc"
        highlight="programele"
        lead="O echipă interdisciplinară: educatori, profesioniști din tech, coordonatori de program și voluntari de bază. Împreună, facem ca fiecare atelier, raport și parteneriat să fie solid."
      />
      <section style={{ padding: '32px 32px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {team.map((p, i) => (
            <div key={p.name} style={{ background: '#fff', borderRadius: 24, boxShadow: 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 24 }}>
              <div style={{ width: '100%', aspectRatio: '4/3', background: colors[i], borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 72, color: '#163300', letterSpacing: -2 }}>
                {p.name.split(' ').map(s => s[0]).join('')}
              </div>
              <h3 style={{ marginTop: 16, fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: '#0e0f0c', letterSpacing: -0.3 }}>{p.name}</h3>
              <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#163300', marginTop: 2 }}>{p.role}</div>
              <p style={{ ...typo.body, marginTop: 8, fontSize: 14 }}>{p.area}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, background: '#e2f6d5', borderRadius: 24, padding: 28, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: '#163300', margin: 0 }}>Ne-ai recunoscut ca potrivit pentru proiecte?</h3>
            <p style={{ ...typo.body, color: '#163300', opacity: 0.8, fontSize: 15, marginTop: 6 }}>Voluntari, mentori, profesioniști din tech — avem roluri clare și impact real.</p>
          </div>
          <Button variant="dark" arrow onClick={() => setRoute('voluntariat')}>Vezi roluri disponibile</Button>
        </div>
      </section>
    </div>
  );
}

/* ===================== PROGRAME ACTIVE ===================== */
function ProgrameActive({ setRoute }) {
  const permanente = [
    ['Youth Code Academy — Tech for Social Impact', 'Program-cadru: competențe digitale, programare, proiecte practice și mentorat orientat către soluții utile pentru educație și comunitate.',
      ['Permanent', 'Adjud · Vrancea', 'Digital Skills', 'CSR-ready'],
      ['ateliere recurente (web, programare, proiecte)', 'mentorat și lucru în echipă', 'livrabile: prototipuri, portofolii, demo-uri']],
    ['TechWomen Empowerment Hub', 'Program activ pentru competențe digitale dedicate femeilor: alfabetizare digitală, instrumente utile, autonomie și oportunități.',
      ['Permanent', 'Incluziune', 'Digital for Women', 'HR & Employability'],
      ['sesiuni practice pe module', 'suport comunitar & mentorat', 'orientare către angajare / antreprenoriat']],
    ['Cluburi & ateliere recurente (copii & tineri)', 'Serii recurente de ateliere hands-on: programare, Arduino & micro:bit, proiecte creative, competențe digitale pentru școală și viață.',
      ['Recurent', 'STEM', 'Hands-on', 'Școli'],
      ['module pe nivel (începători / mediu)', 'proiecte practice și prezentări', 'sprijin pentru grupuri vulnerabile']],
  ];
  const serii = [
    ['Q1 · Ianuarie – Martie', 'Start & consolidare: competențe digitale, inițiere în programare, proiecte scurte pentru elevi.', ['alfabetizare digitală & instrumente', 'programare pentru începători', 'mini-proiecte & portofolii']],
    ['Q2 · Aprilie – Iunie', 'Serii STEM: Arduino & micro:bit, prototipuri și proiecte aplicate (tehnologie pentru comunitate).', ['prototipuri cu senzori', 'demo day / prezentări', 'învățare prin practică & echipă']],
    ['Q3 · Iulie – Septembrie', 'Serii de vară: ateliere intensive, proiecte creative, pregătire pentru evenimente educaționale.', ['workshop-uri concentrate', 'proiecte pentru portofoliu', 'mentorat & prezentări']],
    ['Q4 · Octombrie – Decembrie', 'Serii de impact: siguranță online, incluziune digitală și programe comunitare, cu raportare anuală.', ['siguranță online (prevenție)', 'incluziune digitală', 'raport anual & lecții învățate']],
  ];
  const mediu = [
    ['EcoTech Creators — Tehnologie pentru mediu', 'Copiii și tinerii dezvoltă proiecte cu senzori, date și aplicații digitale utile pentru mediu și comunitate.', ['Green Skills', 'STEM', 'Scalabil']],
    ['AquaKit — Citizen Science pentru apă', 'Ediții recurente de educație pentru mediu prin măsurători și activități în teren, cu elevi și comunitate.', ['Citizen Science', 'Water', 'În teren']],
    ['EcoWatch Vrancea — Plastic & date', 'Program scalabil pentru educație ecologică și monitorizare: date despre poluare, acțiuni locale și învățare prin proiect.', ['Plastic Reduction', 'Data', 'Comunitate']],
  ];
  const incluziune = [
    ['Digital Access for All', 'Program activ pentru reducerea decalajului digital: acces la competențe, mentorat și sprijin educațional.', ['Incluziune', 'Acces', 'Educație']],
    ['Girls in Tech — comunități de învățare', 'Inițiativă recurentă pentru creșterea participării fetelor în tehnologie: cluburi, mentorat și proiecte.', ['Egalitate', 'Mentorat', 'STEM']],
    ['Senior Digital — siguranță & servicii online', 'Program modular pentru seniori: siguranță online, utilizarea serviciilor digitale și autonomie.', ['Seniori', 'Online Safety', 'Autonomie']],
  ];
  const evenimente = [
    ['EduHack Adjud — Digital Skills for Equal Futures', 'Hackathon educațional cu focus pe incluziune și soluții digitale pentru educație și comunitate.', ['Hackathon', 'Youth', 'CSR']],
    ['Open Lab Days — porți deschise', 'Demonstrații, mini-ateliere, înscrieri și prezentări de proiecte realizate de beneficiari.', ['Comunitate', 'Demo', 'Hub']],
    ['GreenTech Challenge — proiecte pentru mediu', 'Eveniment educațional cu proiecte eco-tech: date, prototipuri și idei aplicabile în comunitate.', ['Green', 'STEM', 'Proiecte']],
  ];

  const Card = ({ title, body, tags, bullets, variant = 'default' }) => (
    <div style={{ background: variant === 'accent' ? '#e2f6d5' : '#fff', borderRadius: 24, boxShadow: variant === 'accent' ? 'none' : 'rgba(14,15,12,0.08) 0 0 0 1px', padding: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>{tags.map((t, i) => <Pill key={i} accent={i === 0 && variant === 'default'}>{t}</Pill>)}</div>
      <h3 style={{ fontFamily: 'Inter', fontSize: 22, fontWeight: 600, letterSpacing: -0.4, lineHeight: 1.2, margin: 0, color: '#0e0f0c' }}>{title}</h3>
      <p style={{ ...typo.body, fontSize: 15, margin: 0 }}>{body}</p>
      {bullets && (
        <ul style={{ margin: '6px 0 0', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {bullets.map(b => <li key={b} style={{ display: 'flex', gap: 8, fontFamily: 'Inter', fontSize: 14, fontWeight: 500, color: '#0e0f0c' }}><span style={{ color: '#9fe870', fontWeight: 800 }}>›</span>{b}</li>)}
        </ul>
      )}
      <a onClick={() => setRoute('program')} style={{ marginTop: 'auto', paddingTop: 8, fontFamily: 'Inter', fontSize: 14, fontWeight: 600, color: '#163300', cursor: 'pointer' }}>Vezi detalii →</a>
    </div>
  );

  const Section = ({ id, title, intro, items }) => (
    <section id={id} style={{ padding: '48px 32px', maxWidth: 1280, margin: '0 auto' }}>
      <h2 style={{ ...typo.display, fontSize: 44, letterSpacing: -1.4, margin: 0 }}>{title}</h2>
      {intro && <p style={{ ...typo.body, fontSize: 17, marginTop: 10, maxWidth: 900 }}>{intro}</p>}
      <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: items.length === 4 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)', gap: 16 }}>
        {items.map((it, i) => <Card key={i} title={it[0]} body={it[1]} tags={it[2]} bullets={it[3]} />)}
      </div>
    </section>
  );

  return (
    <div>
      <PageHeader
        kickers={['Programe deschise · înscrieri', 'Livrabile · KPI · raportare', 'Școli · companii · instituții']}
        title="Programe"
        highlight="active"
        lead="Programele active ale Asociației Grupul Verde sunt construite pentru educație digitală, incluziune și mediu, cu metodologie practică și rezultate vizibile. Mai jos le găsești grupate pe tipuri de intervenție."
      />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px 32px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {[['Permanente','#permanente'],['Serii anuale','#serii'],['Mediu & UE','#ue-mediu'],['Incluziune','#incluziune'],['Evenimente','#evenimente'],['CSR & Voluntariat','#csr']].map(([l,h]) =>
          <a key={l} href={h} style={{ padding: '8px 14px', borderRadius: 9999, background: '#fff', boxShadow: 'rgba(14,15,12,0.10) 0 0 0 1px', fontFamily: 'Inter', fontSize: 13, fontWeight: 600, color: '#0e0f0c' }}>{l}</a>
        )}
      </div>

      <section style={{ padding: '16px 32px 24px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ background: '#0e0f0c', color: '#fff', borderRadius: 24, padding: 28 }}>
          <h3 style={{ fontFamily: 'Inter', fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: '#9fe870', margin: 0 }}>Panel pentru companii (CSR/HR/IT/Logistică)</h3>
          <p style={{ marginTop: 8, fontFamily: 'Inter', fontSize: 17, fontWeight: 500, color: 'rgba(255,255,255,0.8)' }}>Un program activ „bun pentru CSR" are: obiective, calendar, livrabile, KPI și raportare.</p>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {[['Calendar','serii & sesiuni · perioade + module'],['Livrabile','proiecte / demo · portofolii, prototipuri'],['KPI','ore, participanți · pre/post, retenție'],['Raport','impact & dovezi · foto, liste, rezultate']].map(([t, b]) => (
              <div key={t} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 14, padding: 16 }}>
                <div style={{ fontFamily: 'Inter', fontSize: 13, fontWeight: 700, color: '#9fe870' }}>{t}</div>
                <div style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>{b}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="primary" arrow onClick={() => setRoute('propune')}>Solicită propunere</Button>
            <Button variant="secondary" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }} onClick={() => setRoute('rapoarte')}>Rapoarte</Button>
          </div>
        </div>
      </section>

      <Section id="permanente" title="Programe permanente (derulare continuă)" intro="Programe active pe tot parcursul anului, derulate în hub-ul educațional din Adjud și prin colaborări cu școli și parteneri." items={permanente} />
      <Section id="serii" title="Serii anuale (organizate pe perioade)" intro="Programe active sub formă de serii și ediții. Formatul este gândit să fie replicabil în școli și scalabil în parteneriate CSR, cu indicatori și raportare." items={serii.map(s => [s[0], s[1], ['Serie anuală','Replicabil'], s[2]])} />
      <Section id="ue-mediu" title="Mediu & direcții UE (programe active)" intro="Programe care folosesc tehnologia ca instrument pentru educație ecologică și citizen science – aliniate cu educația pentru sustenabilitate." items={mediu.map(m => [...m])} />
      <Section id="incluziune" title="Incluziune & acces (programe active)" intro="Inițiative active care reduc decalajul digital și cresc accesul la competențe și oportunități pentru grupuri vulnerabile." items={incluziune.map(m => [...m])} />
      <Section id="evenimente" title="Evenimente active (ediții recurente)" intro="Evenimente educaționale care pot deveni ediții anuale: hackathoane, zile tematice, demo day și activări în comunitate." items={evenimente.map(m => [...m])} />

      <section id="csr" style={{ padding: '64px 32px', background: '#e2f6d5', marginTop: 32 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h2 style={{ ...typo.display, fontSize: 48, letterSpacing: -1.4, margin: 0, color: '#163300' }}>CSR & voluntariat (pentru companii)</h2>
          <p style={{ ...typo.body, color: '#163300', opacity: 0.85, fontSize: 17, marginTop: 10, maxWidth: 900 }}>Poți susține programele active prin sponsorizare, voluntariat corporate sau parteneriate pe termen lung, cu indicatori clari și raportare transparentă.</p>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              ['Sponsorizare 20%', 'Modalitate legală și eficientă prin care companiile susțin programe educaționale în comunitate.', 'Detalii sponsorizare', 'sponsorizare'],
              ['Parteneriate corporate', 'Programe co-create: educație digitală, incluziune, evenimente, mediu & citizen science.', 'Opțiuni CSR', 'corporate'],
              ['Voluntariat corporate', 'Mentorat, ateliere, suport IT/logistic — roluri clare, impact real, experiență pentru voluntari.', 'Devino voluntar corporate', 'voluntariat'],
            ].map(([t, b, cta, k]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 24, padding: 24 }}>
                <h3 style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: 600, color: '#0e0f0c', margin: 0 }}>{t}</h3>
                <p style={{ ...typo.body, fontSize: 15, marginTop: 8 }}>{b}</p>
                <div style={{ marginTop: 14 }}><Button variant="dark" arrow onClick={() => setRoute(k)}>{cta}</Button></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ ...typo.display, fontSize: 56, letterSpacing: -1.6, margin: 0 }}>Vrei să te înscrii sau să <span style={{ background: 'linear-gradient(to top, #9fe870 0%, #9fe870 25%, transparent 25%)', padding: '0 6px' }}>susții</span> un program?</h2>
        <p style={{ ...typo.body, fontSize: 17, marginTop: 12, maxWidth: 900 }}>Spune-ne ce te interesează (copii/tineri/seniori, educație digitală, STEM, mediu, incluziune) și îți propunem rapid o variantă: calendar, obiective, livrabile și KPI.</p>
        <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button variant="primary" arrow onClick={() => setRoute('contact')}>Contact</Button>
          <Button variant="secondary" onClick={() => setRoute('donate')}>Donează</Button>
          <Button variant="ghost" onClick={() => setRoute('propune')}>Devino partener CSR →</Button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Pill, PageHeader, Quicklinks, CineSuntem, Misiune, Echipa, ProgrameActive });
