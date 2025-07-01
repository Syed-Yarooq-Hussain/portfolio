import React from 'react';
import { useTranslation } from 'react-i18next';

const testimonialCard = {
  background: '#faf5ff',
  border: '1px solid #ddd6fe',
  borderRadius: 10,
  padding: 20,
  boxShadow: '0 4px 12px rgba(109, 40, 217, 0.1)',
  marginBottom: 20,
};

const nameStyle = {
  fontWeight: 'bold',
  fontSize: 16,
  color: '#4c1d95',
  marginTop: 10,
};

const titleStyle = {
  fontSize: 13,
  color: '#6b7280',
};

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Mobeen Ahmed",
      title: t("testimonials.mobeen.title"),
      feedback: t("testimonials.mobeen.feedback"),
    },
    {
      name: "Rai Muhammad Rafay",
      title: t("testimonials.rafay.title"),
      feedback: t("testimonials.rafay.feedback"),
    },
    {
      name: "Muneed Abdul Shakoor",
      title: t("testimonials.muneeb.title"),
      feedback: t("testimonials.muneeb.feedback"),
    },
  ];

  return (
    <section style={{ padding: '0 20px', marginBottom: 60 }}>
      <h2 style={{
        fontSize: 32,
        marginBottom: 25,
        color: '#6d28d9',
        borderBottom: '3px solid #a78bfa',
        display: 'inline-block',
        paddingBottom: 8,
      }}>
        💬 {t("testimonials.title")}
      </h2>

      {testimonials.map((item, index) => (
        <div key={index} style={testimonialCard}>
          <p>“{item.feedback}”</p>
          <div style={nameStyle}>{item.name}</div>
          <div style={titleStyle}>{item.title}</div>
        </div>
      ))}
    </section>
  );
}
