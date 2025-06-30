import React from "react";
import profileImage from './assets/profile.png';

export default function Portfolio() {

  const projectItems = [
    {
      title: "🤖 Bot Integration",
      description: "Integrated AI chatbot into a customer support platform to automate user queries and escalate to human support when needed.",
    },
    {
      title: "📊 Real-Time Dashboard",
      description: "Built a dashboard with WebSocket and Redux to show live statistics and KPIs for operations teams.",
    },
    {
      title: "📄 PDF Automation",
      description: "Implemented automated PDF invoice generation and email distribution system using Puppeteer and Node.js.",
    },
    {
      title: "⚙️ Microservice Migration",
      description: "Refactored legacy backend into a scalable microservice architecture using Node.js and Redis queues.",
    },
    {
      title: "🛒 E-Commerce Backend",
      description: "Developed secure checkout flow, product APIs, and order processing logic with PostgreSQL and Express.js.",
    },
  ];

  return (
    <div style={wrapperStyle}>
      <header style={headerStyle}>
        <img src={profileImage} alt="Syed Yarooq" style={profilePicStyle} />
        <h1 style={nameStyle}>Syed Yarooq Hussain</h1>
        <p style={roleStyle}>Senior Fullstack JavaScript Developer</p>
        <p>📍 Germany | Chancenkarte Visa Holder</p>
        <div style={buttonGroupStyle}>
          <a href="https://github.com/syed-yarooq-hussain" target="_blank" rel="noreferrer" style={buttonStyle}>GitHub</a>
          <a href="https://linkedin.com/in/syed-yarooq" target="_blank" rel="noreferrer" style={buttonStyleSecondary}>LinkedIn</a>
        </div>
      </header>

      <main style={mainContentStyle}>
        <section style={sectionStyle}>
          <h2 style={sectionTitle}>🌟 About Me</h2>
          <p>
            I am a passionate Senior Fullstack JavaScript Developer with over 6 years of experience, specializing in building robust and scalable web applications using technologies like Node.js, React, Angular, and AWS. With a strong focus on backend development and microservices architecture, I excel in creating solutions that enhance system performance, increase user engagement, and streamline deployment processes.
          </p>
          <p>
            <b>Key Skills and Expertise:</b>
            <ul>
              <li>
                Fullstack Development: Extensive experience with JavaScript, TypeScript, Node.js, React.js, Angular, and microservices architecture.
              </li>
              <li>
                Cloud and DevOps: Skilled in deploying and managing applications on AWS, Docker, and CI/CD pipelines, with a focus on scalability and efficiency.
              </li>
              <li>
                Backend Mastery: Deep knowledge in building and optimizing REST APIs, GraphQL endpoints, and working with databases like PostgreSQL, MongoDB, and Redis.
              </li>
              <li>
                Team Leadership: Proficient in leading cross-functional teams using Agile methodologies, ensuring timely delivery of complex projects.
              </li>
              <li>
                Project Success: Known for reducing operational costs by implementing effective technology solutions and improving system performance by up to 50%.
              </li>
            </ul>
          </p>

        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitle}>🛠 Technical Skills</h2>
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
        </section>


        <section style={sectionStyle}>
          <h2 style={sectionTitle}>💼 Work experience</h2>
          <div style={cardGrid}>
            <div style={cardStyle}>
              <h3 style={cardTitle}>Codup Pvt Ltd <span style={cardSubTitle}>(Jan 2024 - Nov 2024)</span></h3>
              <p>
                Lead development of scalable full-stack solutions with Node.js and React, boosting client retention by 20% and improving system performance by 30% through microservices. Built a custom WhatsApp chatbot, integrated Shopify stores with external systems, and delivered integration solutions for eBay and Ecwid. Managed a team of developers, deployed new features, refactored APIs, designed efficient databases, documented PRDs, and optimized cloud costs — all while contributing to frontend and mobile tasks when needed.
              </p>
              <p style={cardMeta}>React.js · Microservices · Software Development · Shopify - Ebay - ECWID - meta API's - Open API · PostgreSQL · Full-Stack Development · Jenkins · Redis · REST APIs · JavaScript · SQL · Nest.js · TypeScript · Jira · Back-End Web Development · Git · Node.js · API Development</p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Dastgyr PTE Ltd <span style={cardSubTitle}>(Feb 2022 - Jan 2024)</span></h3>
              <p>
                Played a key role in Dastgyr’s US$37M Series A funding by building and scaling a dynamic B2B marketplace for retailers and sellers across Pakistan. Led a team of 8 developers, developed and optimized microservices in Node.js on AWS, deployed 8+ new features, and refactored 50+ APIs — cutting complaints by 70%. Designed robust database structures, improved code quality through detailed PRs, documented PRDs, and mentored juniors. Also handled logistics support, 3rd-party cost optimizations, and contributed to occasional frontend and mobile tasks.              </p>
              <p style={cardMeta}>Microservice | Typescript | JavaScript | Node.js | React | Redis | Postgres | Sqlite | HTML | CSS | AWS | Kafka | Finja | Socket | Slack | Bitbucket | Gitlab | Jira | Knex | AWS | Firebase | Jest | Stripe</p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Progstream Pvt Ltd <span style={cardSubTitle}>(Feb 2019 - Dec 2021)</span></h3>
              <p>
                Delivered 10+ Finland-based projects at Progstream, building scalable web and mobile apps like an online store, ride-sharing app, farmer job portal, and dynamic UIs with Contentful & React. Worked with Node.js, React, Angular (old & new), .NET, Laravel, AWS, and PostgreSQL, using monolithic and microservices approaches. Managed secure payments, real-time features with Socket.io, deployment troubleshooting, and CI/CD pipelines with Jenkins in an agile team.              </p>
              <p style={cardMeta}>Angular | Node.js | Laravel | .Net | PostgreSQL | IoT | Sqlite | HTML | CSS | AWS | Kafka | Finja | Socket | Slack | Bitbucket | Gitlab | Jira | Knex | AWS | Firebase | Jest | Stripe </p>
            </div>

            <div style={cardStyle}>

              <h3 style={cardTitle}>Inaequo Solutions <span style={cardSubTitle}>(Feb 2022 - Dec 2022)</span></h3>
              <p>
                Worked on integration-focused projects, automating workflows using batch scripts and implementing webhooks, Socket.io, and real-time features. Contributed to both MEAN and MERN stack codebases. Guided integration logic, built REST APIs, and supported backend processes using Node.js, PHP, Redis, PostgreSQL, and Jenkins in an agile setup.              </p>
              <p style={cardMeta}>Node.js · React · Angular · MongoDB · Express · Webhooks · Socket.io · Redis · Automation Scripting · Jenkins · PostgreSQL · Git · Agile · PHP</p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>NXT Labs <span style={cardSubTitle}>(March 2023 - June 2023)</span></h3>
              <p>
                Worked on integration-focused projects, automating workflows using batch scripts and implementing webhooks, Socket.io, and real-time features. Contributed to both MEAN and MERN stack codebases. Guided integration logic, built REST APIs, and supported backend processes using Node.js, PHP, Redis, PostgreSQL, and Jenkins in an agile setup.              </p>
              <p style={cardMeta}>Node.js · React · Angular · MongoDB · Express · Webhooks · Socket.io · Redis · Automation Scripting · Jenkins · PostgreSQL · Git · Agile · PHP</p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Generic Solution <span style={cardSubTitle}>(Dec 2018 - Feb 2019)</span></h3>
              <p>
                Developed a rice supply chain management system at Generic Solution, enabling better coordination between distributors, retailers, importers, and exporters. Used .NET Entity Framework 3 and AngularJS 1.x, later transitioned to Angular 6. Built REST APIs and UIs for inventory, transactions, and relationship tracking in the rice trade ecosystem              </p>
              <p style={cardMeta}>.NET · Entity Framework 3 · AngularJS 1.x · Angular 6 · REST APIs · Git · Backend Development</p>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>U.I.S BPO <span style={cardSubTitle}>(Feb 2018 - July 2018)</span></h3>
              <p>
                Started my career at Universal Information System, developing backend APIs for NAVEX (logistics) using Java Spring and designing/integrating frontend with AngularJS 1.x. Gained hands-on full-stack experience handling core logistics modules from backend logic to user interface              </p>
              <p style={cardMeta}> Java · Spring Framework · AngularJS 1.x · REST APIs · Frontend Integration</p>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitle}>🧪 Project Contributions</h2>
          <div style={accordionGrid}>
            {projectItems.map((item, index) => (
              <details key={index} style={accordionItem}>
                <summary style={accordionSummary}>{item.title}</summary>
                <p style={accordionText}>{item.description}</p>
              </details>
            ))}
          </div>
        </section>


        <section style={sectionStyle}>
          <h2 style={sectionTitle}>📄 Resume</h2>
          <div>
            <a href="/Syed_CV.pdf" download style={buttonStyle}>Download My CV</a>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitle}>📬 Contact</h2>
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
        </section>
      </main>

      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Syed Yarooq. Built with ❤️ in React.</p>
      </footer>
    </div>
  );
}

const wrapperStyle = {
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(135deg, #f8fafc, #e0f2fe)',
  color: '#1f2937',
  minHeight: '100vh',
  width: '143%',
  display: 'flex',
  flexDirection: 'column',
};

const mainContentStyle = {
  flex: 1,
  maxWidth: 1000,
  margin: '0 auto',
  padding: 30,
};

const headerStyle = {
  textAlign: 'center',
  padding: 30,
};

const profilePicStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  border: '4px solid #38bdf8',
  marginBottom: 10,
};

const nameStyle = {
  fontSize: 36,
  margin: '10px 0 5px',
  fontWeight: 'bold',
};

const roleStyle = {
  fontSize: 18,
  color: '#0ea5e9',
  marginBottom: 5,
};

const buttonGroupStyle = {
  marginTop: 15,
};

const buttonStyle = {
  marginRight: 10,
  padding: '10px 20px',
  background: '#0ea5e9',
  color: '#fff',
  borderRadius: 6,
  textDecoration: 'none',
  fontWeight: 'bold',
};

const buttonStyleSecondary = {
  ...buttonStyle,
  background: '#e2e8f0',
  color: '#000',
};

const sectionStyle = {
  marginBottom: 50,
};

const sectionTitle = {
  fontSize: 26,
  marginBottom: 15,
  borderBottom: '2px solid #38bdf8',
  display: 'inline-block',
  paddingBottom: 5,
};

const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: 20,
};

const cardStyle = {
  background: '#fff',
  borderRadius: 8,
  padding: 14,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const cardTitle = {
  fontSize: 20,
  fontWeight: 'bold',
};
const cardSubTitle = {
  fontSize: 10,
  fontWeight: 'bold',
};

const cardMeta = {
  fontSize: 12,
  color: '#64748b',
  marginTop: 10,
};

const footerStyle = {
  textAlign: 'center',
  padding: 20,
  fontSize: 14,
  color: '#64748b',
};

const skillGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginTop: '20px',
};

const skillTagStyle = {
  padding: '6px 12px',
  backgroundColor: '#e0f2fe',
  color: '#0369a1',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
};

const contactGridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 30,
  flexWrap: 'wrap',
};

const contactHeading = {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 8,
};

const accordionGrid = {
  marginTop: 20,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: 20,
};

const accordionItem = {
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: 6,
  padding: '10px 15px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
};

const accordionSummary = {
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: 16,
};

const accordionText = {
  fontSize: 14,
  marginTop: 10,
  color: '#374151',
};