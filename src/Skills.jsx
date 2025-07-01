export default function Skills() {
    return (
        <div style={skillGridStyle}>
            {[
              'JavaScript', 'TypeScript', 'Node.js', 'React.js', 'Angular', 'Laravel', '.Net', 'Nest js', 'Express.js',
              'Redux', 'Next.js', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Swagger', '3rd party ingeration (meta, open AI , Ebay , Ecwid, Shopify ...)',
              'Docker', 'AWS', 'CI/CD', 'Kafka', 'Firebase', 'Jenkins', 'Socket.io', 'B2B', 'Microservices (Kafka , RabitMQ)',
              'HTML', 'CSS', 'Bootstrap', 'PHP', 'Laravel', 'Git', 'Jira', 'Agile', 'Tailwind', 'Github', 'GitLab', 'Bitbucket'
            ].map((skill, index) => (
              <span key={index} style={skillTagStyle}>{skill}</span>
            ))}
          </div>
    )

}

const skillGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '20px',
};

const skillTagStyle = {
  padding: '6px 12px',
  backgroundColor: '#ede9fe',
  color: '#7c3aed',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 1px 5px rgba(124, 58, 237, 0.2)',
  transition: 'transform 0.2s ease',
};
