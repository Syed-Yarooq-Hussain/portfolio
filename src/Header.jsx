import { useTranslation } from 'react-i18next';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 40px',
  background: '#ede9fe',
  borderBottom: '2px solid #c4b5fd',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  color: '#6b21a8',
  textDecoration: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const langButtonStyle = (active) => ({
  padding: '6px 12px',
  borderRadius: '20px',
  fontWeight: 'bold',
  backgroundColor: active ? '#c084fc' : '#e9d5ff',
  color: '#4c1d95',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '8px',
  opacity: active ? 1 : 0.7,
});

export default function Header({ language, setLanguage }) {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <header style={headerStyle}>
      <div>
        <span style={{ fontWeight: 'bold', fontSize: 18, color: '#4c1d95' }}>Syed Yarooq</span>
      </div>

      <nav style={navLinksStyle}>
        {navItems.map(({ id, label }) => (
          <span key={id} style={linkStyle} onClick={() => scrollToSection(id)}>
            {label}
          </span>
        ))}
      </nav>

      <div>
        <button
          onClick={() => setLanguage('en')}
          style={langButtonStyle(language === 'en')}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('de')}
          style={langButtonStyle(language === 'de')}
        >
          Deutsch
        </button>
      </div>
    </header>
  );
}
