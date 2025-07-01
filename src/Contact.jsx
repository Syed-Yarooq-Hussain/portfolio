export default function Contact() {

  return (
    <div style={contactGridStyle}>
            <div>
              <h4 style={contactHeading}>🇩🇪 Germany</h4>
              <p>Email: <strong>syed.yarooq1701@gmail.com</strong></p>
              <p>Phone: <strong>+49 152 1107 8765</strong></p>
            </div>
            <div>
              <h4 style={contactHeading}>🇵🇰 Pakistan</h4>
              <p>Email: <strong>syed.yarooq@gmail.com</strong></p>
              <p>Phone: <strong>+92 346 3575378</strong></p>
            </div>
          </div>
  );
}

const contactGridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 30,
  flexWrap: 'wrap',
  padding: '20px 180px',
  backgroundColor: '#f3e8ff',
  borderRadius: 12,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  marginTop: 20,
};;

const contactHeading = {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#6b21a8',
  marginBottom: 10,
};