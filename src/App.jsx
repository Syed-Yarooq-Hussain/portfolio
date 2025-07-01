import React, { useEffect, useState } from "react";
import profileImage from './assets/profile.png';
import Header from './Header';
import About from './About';
import Skills from "./Skills";
import Projects from "./Projects";
import Expereince from "./Expereince";
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import Testimonials from './Testimonials';
import Contact from "./Contact";

export default function App() {
  const [language, setLanguage] = useState('en');
  const { t } = useTranslation();

  const [hideSensitiveInfo, setHideSensitiveInfo] = useState(false);

  useEffect(() => {
    const ref = document.referrer;
    const blockedSources = ['fiverr.com', 'upwork.com'];
    const shouldHide = blockedSources.some(domain => ref.includes(domain));
    setHideSensitiveInfo(shouldHide);
  }, []);

  // ✅ Prevent re-render loop
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div style={wrapperStyle}>
      <Header language={language} setLanguage={setLanguage} />

      <header style={{
        textAlign: 'center',
        padding: 30,
        background: 'linear-gradient(to right, rgb(245, 243, 255), rgb(216, 180, 254))',
        borderBottom: '1px solid #d1d5db',
      }}>
        <img src={profileImage} alt="Syed Yarooq Hussain" style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '4px solid rgb(82, 15, 77)',
          marginBottom: 15,
        }} />

        <h1 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 8 }}>Syed Yarooq Hussain</h1>
        <p style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 4 }}>{t('title')}</p>
        <p style={{ fontSize: 14, marginBottom: 15 }}>{t('basedIn')}</p>  
        {!hideSensitiveInfo && (
          <div style={{ marginBottom: 10 }}>
          <span style={{ marginRight: 12 }}>📧 <strong>syed.yarooq1701@gmail.com</strong></span>
          <span>📞 <strong>+49 152 1107 8765</strong></span>
        </div>
        )}
        

        <div style={{ fontSize: 14, color: '#374151', marginBottom: 15 }}>
          <p><strong>{t('languages')}:</strong> English (Fluent), Urdu (Native), German (Basic)</p>
          <p><strong>{t('relocation')}:</strong> {t('openTo')}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
          {!hideSensitiveInfo && (
            <>
              <a href="https://github.com/syed-yarooq-hussain" target="_blank" rel="noreferrer" style={linkButton}>GitHub</a>
              <a href="https://linkedin.com/in/syed-yarooq" target="_blank" rel="noreferrer" style={linkButton}>LinkedIn</a>
              <a href="mailto:syed.yarooq1701@gmail.com" style={linkButton}>{t('emailMe')}</a>
            </>
          )}
          <a href="https://www.fiverr.com/syedyarooq/buying?source=avatar_menu_profile" target="_blank" rel="noreferrer" style={linkButton}>Fiverr</a>
          <a href="https://www.upwork.com/freelancers/syedyarooqh" target="_blank" rel="noreferrer" style={linkButton}>Upwork</a>
          
        </div>
      </header>

      <main style={mainContentStyle}>
        <section id="about" style={sectionStyle}>
          <h2 style={sectionTitle}>{t('aboutMe')}</h2>
          <About />
        </section>

        <section id="skills" style={sectionStyle}>
          <h2 style={sectionTitle}>{t('technicalSkills')}</h2>
          <Skills />
        </section>

        <section id="experience" style={sectionStyle}>
          <h2 style={sectionTitle}>{t('workExperience')}</h2>
          <Expereince />
        </section>

        <section id="projects" style={sectionStyle}>
          <h2 style={sectionTitle}>{t('projectContributions')}</h2>
          <Projects />
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitle}>{t('resume')}</h2>
          <div>
            <a href="/Syed_CV.pdf" download style={buttonStyle}>{t('downloadCV')}</a>
          </div>
        </section>

        <section id="testimonials" style={sectionStyle}>
          <h2 style={sectionTitle}>{'Testimonials'}</h2>
          <Testimonials />
        </section>

        {!hideSensitiveInfo && (
          <section id="contact" style={sectionStyle}>
            <h2 style={sectionTitle}>{t('contact')}</h2>
            <Contact />
          </section>
        )}
      </main>

      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Syed Yarooq. Built with ❤️ in React.</p>
      </footer>
    </div>
  );
}

// ✅ Styling (unchanged)
const wrapperStyle = {
  fontFamily: 'Inter, Segoe UI, sans-serif',
  background: 'linear-gradient(to right, rgb(245, 243, 255), rgb(216, 180, 254))',
  color: '#1f2937',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
};

const mainContentStyle = {
  flex: 1,
  margin: '0 auto',
  padding: '40px 128px',
};

const buttonStyle = {
  marginRight: 10,
  padding: '10px 20px',
  background: '#8b5cf6',
  color: '#fff',
  borderRadius: 8,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

const footerStyle = {
  textAlign: 'center',
  padding: 20,
  fontSize: 14,
  color: '#7c3aed',
};

const linkButton = {
  padding: '8px 16px',
  background: '#8b5cf6',
  color: '#fff',
  borderRadius: 6,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

const sectionStyle = {
  marginBottom: 60,
  padding: '0 20px',
};

const sectionTitle = {
  fontSize: 32,
  marginBottom: 25,
  color: '#6d28d9',
  borderBottom: '3px solid #a78bfa',
  display: 'inline-block',
  paddingBottom: 8,
};
