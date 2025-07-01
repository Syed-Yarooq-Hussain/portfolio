import { experienceItems } from "./constants/expereince";

export default function Expereince() {
    return (
        <div style={cardGrid}>
            {experienceItems.map((item, index) => (
                <div style={cardStyle} key={index}>
                    <span
                        style={{
                            ...tagBadge,
                            ...(item.type === "Part-Time" ? tagPart : tagFull),
                        }}
                    >
                        {item.type}
                    </span>
                    <h3 style={cardTitle}>
                        {item.company}
                        <span style={cardSubTitle}> {item.duration}</span>
                    </h3>
                    <p>{item.description}</p>
                    <p style={cardMeta}>{item.tech}</p>
                </div>
            ))}
        </div>
    )

}

const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: 30,
};

const cardStyle = {
  background: 'linear-gradient(145deg, #fdf4ff, #f3e8ff)',
  borderRadius: 12,
  padding: 20,
  boxShadow: '0 8px 20px rgba(109, 40, 217, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '1px solid #ddd6fe',
};

const cardTitle = {
  fontSize: 22,
  fontWeight: 700,
  color: '#4c1d95',
  marginBottom: 8,
};

const cardSubTitle = {
  fontSize: 12,
  fontWeight: 600,
  marginLeft: 10,
  color: '#7c3aed',
};

const cardMeta = {
  fontSize: 13,
  color: '#6b7280',
  marginTop: 12,
  lineHeight: 1.5,
};

const tagBadge = {
  display: 'inline-block',
  padding: '4px 10px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: 'bold',
  marginBottom: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const tagFull = {
  backgroundColor: '#ede9fe',
  color: '#5b21b6',
};

const tagPart = {
  backgroundColor: '#fff7ed',
  color: '#c2410c',
};
