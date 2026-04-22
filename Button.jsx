// Button.jsx — pill button with scale hover
function Button({ variant = 'primary', children, onClick, arrow = false, style = {} }) {
  const base = {
    fontFamily: 'Inter', fontWeight: 600, fontSize: 16, lineHeight: 1,
    letterSpacing: -0.108, borderRadius: 9999, border: 0,
    padding: '12px 18px', cursor: 'pointer',
    transition: 'transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1), background 150ms',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFeatureSettings: '"calt" 1', textDecoration: 'none',
    ...style,
  };
  const variants = {
    primary: { background: '#9fe870', color: '#163300' },
    secondary: { background: 'rgba(22,51,0,0.08)', color: '#0e0f0c' },
    ghost: { background: 'transparent', color: '#0e0f0c' },
    dark: { background: '#0e0f0c', color: '#fff' },
  };
  const hovers = {
    primary: '#cdffad',
    secondary: 'rgba(22,51,0,0.14)',
    ghost: 'rgba(211,242,192,0.4)',
    dark: '#2a2b27',
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = hovers[variant]; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = variants[variant].background; }}
      onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.95)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.05)'; }}
    >
      {children}
      {arrow && <span style={{ fontSize: 18 }}>→</span>}
    </button>
  );
}
window.Button = Button;
