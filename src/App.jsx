import React from "react";
import profileImage from './assets/profile.png';

export default function Portfolio() {

  const projectItems = [
    {
      title: "🏢 B2B Marketplace Platform",
      description: "Led the backend development of a high-scale B2B FMCG & electronics platform with logistics, warehouse, seller, retailer, and admin systems. Migrated monolith to microservices, optimized performance, resolved production issues, and led feature development cycles across multiple teams.",
    },
    {
      title: "☁️ AWS & DevOps Infrastructure",
      description: "Provisioned and managed AWS services including S3, CloudWatch, Lambda, ECS, and API Gateway. Implemented CI/CD, containerized applications using Docker, optimized logging pipelines, and supported scalable backend deployment flows.",
    },
    {
      title: "📦 Middleware: eBay → Alibaba / Ecwid Integration",
      description: "Developed a Node.js/NestJS middleware enabling seamless product listing sync across platforms like eBay, Ecwid, and Alibaba with minimal user input.",
    },
    {
      title: "📱 WhatsApp Order Chatbot",
      description: "Integrated a chatbot to manage end-to-end order flow including place/track/update for both customers and drivers via WhatsApp, supporting payments and delivery status.",
    },
    {
      title: "🛍️ Shopify Gift App",
      description: "Built an event-based Shopify app that allowed hosts to create gift registries from store products, and guests could purchase selected gifts directly from Shopify backend.",
    },
    {
      title: "🔧 Custom Shopify Store with Hydrogen",
      description: "Created a low-code custom storefront using Shopify Hydrogen and added personalized feature extensions with API integration.",
    },
    {
      title: "🧾 SaaS E-Commerce Engines",
      description: "Built and deployed multiple SaaS-based e-commerce applications with features like product management, checkout, cart, inventory, and order tracking, used by different business clients.",
    },
    {
      title: "💬 Discord Broadcasting Bot",
      description: "Designed a Discord bot to auto-publish content from one channel to others and sync posts to a connected Facebook Page.",
    },
    {
      title: "🎯 Web3 NFT Stats Bot (Discord)",
      description: "Built a bot to fetch NFT stats via APIs or scraping, process real-time data and return computed metrics back to Discord users via commands.",
    },
    {
      title: "🚗 Ride Sharing App (Finland)",
      description: "Created a location-based ride-sharing app with custom route rendering logic (avoiding Map APIs), allowing users to request and join carpools efficiently.",
    },
    {
      title: "🌾 Finland Job Portal (COVID Era)",
      description: "Built a local job discovery portal for Finnish agricultural laborers during the pandemic, with geolocation-based job search.",
    },
    {
      title: "🏢 Student Apartment Manager",
      description: "Created a communication & e-commerce portal for student residents to chat, shop, get notified, and interact with building communities.",
    },
    {
      title: "🔐 IoT Smart Rental System",
      description: "Developed a keyless item rental platform with IoT integrations — users could unlock doors, shelves, and return items without staff intervention. Admins had full control over the store network.",
    },
    {
      title: "🛡️ Audit Management Web App",
      description: "Designed a secure internal audit management system to track compliance workflows, assign responsibilities, and automate reporting cycles with user-based access roles.",
    },
    {
      title: "🔔 Notification Service for German NGO",
      description: "Built a multilingual push-notification microservice for a German NGO to manage user alerts, emergency announcements, and volunteer communications in real-time.",
    },
    {
      title: "🏥 Clinic Management Platform",
      description: "Developed a modern patient management portal for clinics to handle appointments, prescriptions, medical records, billing, and doctor communication dashboards.",
    },
    {
      title: "🛒 Shopify Stores (Multiple)",
      description: "Delivered custom Shopify storefronts and embedded apps for small businesses including theme customizations, gift flow automation, and inventory sync with third-party tools.",
    },
    {
      title: "🚚 Logistics Platform",
      description: "Built a logistics dashboard to manage vehicle tracking, order pickup, delivery timelines, route optimizations, and warehouse coordination using RESTful APIs and microservices.",
    },
    {
      title: "🌾 Rice Distribution Marketplace",
      description: "Developed an e-commerce platform tailored for B2B rice distributors to showcase bulk products, process wholesale orders, and support multilingual customer engagement.",
    },
  ];
  return (
    <div style={wrapperStyle}>

      <header style={{
        textAlign: 'center',
        padding: 30,
        background: 'linear-gradient(to right, #f0f4f8, #e0f2fe)',
        borderBottom: '1px solid #d1d5db',
      }}>
        <img src={profileImage} alt="Syed Yarooq Hussain" style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '4px solid #0ea5e9',
          marginBottom: 15,
        }} />

        <h1 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 8 }}>Syed Yarooq Hussain</h1>
        <p style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 4 }}>Senior Fullstack JavaScript Developer</p>
        <p style={{ fontSize: 14, marginBottom: 15 }}>📍 Based in Germany | Chancenkarte Visa Holder</p>

        <div style={{ marginBottom: 10 }}>
          <span style={{ marginRight: 12 }}>📧 <strong>syed.yarooq1701@gmail.com</strong></span>
          <span>📞 <strong>+49 152 1107 8765</strong></span>
        </div>

        <div style={{ fontSize: 14, color: '#374151', marginBottom: 15 }}>
          <p><strong>Languages:</strong> English (Fluent), Urdu (Native), German (Basic)</p>
          <p><strong>Relocation:</strong> Open to remote/on-site roles in Germany & Europe</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
          <a href="https://github.com/syed-yarooq-hussain" target="_blank" rel="noreferrer" style={linkButton}>GitHub</a>
          <a href="https://linkedin.com/in/syed-yarooq" target="_blank" rel="noreferrer" style={linkButton}>LinkedIn</a>
          <a href="https://www.fiverr.com/syedyarooq/buying?source=avatar_menu_profile" target="_blank" rel="noreferrer" style={linkButton}>Fiverr</a>
          <a href="https://www.upwork.com/freelancers/syedyarooqh" target="_blank" rel="noreferrer" style={linkButton}>Upwork</a>
          <a href="mailto:syed.yarooq1701@gmail.com" style={linkButton}>Email Me</a>
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
              <span style={cardName}>Part-Time</span>
              <h3 style={cardTitle}>Koders Club <span style={cardSubTitle}>(March 2025 - present)</span></h3>
              <p>
                Working as a freelance Senior Software Engineer with Koders Club, delivering and deploying scalable MEAN/MERN solutions for various clients. Develop full-stack features, design APIs, build dynamic frontends, manage MongoDB/PostgreSQL databases, and handle end-to-end deployments. Also support teams with architecture guidance, clean code practices, and smooth production rollouts.              </p>
              <p style={cardMeta}>Full-Stack Development · MEAN · MERN · Node.js · React · Angular · MongoDB · PostgreSQL · REST APIs · Deployment · CI/CD · Mentorship</p>
            </div>

            <div style={cardStyle}>
              <span style={cardName}>Full-Time</span>
              <h3 style={cardTitle}>
                Codup Pvt Ltd
                <span style={cardSubTitle}>(Jan 2024 - Nov 2024)</span>

              </h3>
              <p>
                Lead development of scalable full-stack solutions with Node.js and React, boosting client retention by 20% and improving system performance by 30% through microservices. Built a custom WhatsApp chatbot, integrated Shopify stores with external systems, and delivered integration solutions for eBay and Ecwid. Managed a team of developers, deployed new features, refactored APIs, designed efficient databases, documented PRDs, and optimized cloud costs — all while contributing to frontend and mobile tasks when needed.
              </p>
              <p style={cardMeta}>React.js · Microservices · Software Development · Shopify - Ebay - ECWID - meta API's - Open API · PostgreSQL · Full-Stack Development · Jenkins · Redis · REST APIs · JavaScript · SQL · Nest.js · TypeScript · Jira · Back-End Web Development · Git · Node.js · API Development</p>
            </div>


            <div style={cardStyle}>
              <span style={cardName}>Full-Time</span>
              <h3 style={cardTitle}>Dastgyr PTE Ltd <span style={cardSubTitle}>(Feb 2022 - Jan 2024)</span></h3>
              <p>
                Played a key role in Dastgyr’s US$37M Series A funding by building and scaling a dynamic B2B marketplace for retailers and sellers across Pakistan. Led a team of 8 developers, developed and optimized microservices in Node.js on AWS, deployed 8+ new features, and refactored 50+ APIs — cutting complaints by 70%. Designed robust database structures, improved code quality through detailed PRs, documented PRDs, and mentored juniors. Also handled logistics support, 3rd-party cost optimizations, and contributed to occasional frontend and mobile tasks.              </p>
              <p style={cardMeta}>Microservice | Typescript | JavaScript | Node.js | React | Redis | Postgres | Sqlite | HTML | CSS | AWS | Kafka | Finja | Socket | Slack | Bitbucket | Gitlab | Jira | Knex | AWS | Firebase | Jest | Stripe</p>
            </div>

            <div style={cardStyle}>
              <span style={cardName}>Part-Time</span>
              <h3 style={cardTitle}>Inaequo Solutions <span style={cardSubTitle}>(Feb 2022 - Dec 2022)</span></h3>
              <p>
                Worked on integration-focused projects, automating workflows using batch scripts and implementing webhooks, Socket.io, and real-time features. Contributed to both MEAN and MERN stack codebases. Guided integration logic, built REST APIs, and supported backend processes using Node.js, PHP, Redis, PostgreSQL, and Jenkins in an agile setup.              </p>
              <p style={cardMeta}>Node.js · React · Angular · MongoDB · Express · Webhooks · Socket.io · Redis · Automation Scripting · Jenkins · PostgreSQL · Git · Agile · PHP</p>
            </div>

            <div style={cardStyle}>
              <span style={cardName}>Part-Time</span>
              <h3 style={cardTitle}>NXT Labs <span style={cardSubTitle}>(March 2023 - June 2023)</span></h3>
              <p>
                Worked on integration-focused projects, automating workflows using batch scripts and implementing webhooks, Socket.io, and real-time features. Contributed to both MEAN and MERN stack codebases. Guided integration logic, built REST APIs, and supported backend processes using Node.js, PHP, Redis, PostgreSQL, and Jenkins in an agile setup.              </p>
              <p style={cardMeta}>Node.js · React · Angular · MongoDB · Express · Webhooks · Socket.io · Redis · Automation Scripting · Jenkins · PostgreSQL · Git · Agile · PHP</p>
            </div>

            <div style={cardStyle}>
              <span style={cardName}>Full-Time</span>
              <h3 style={cardTitle}>Progstream Pvt Ltd <span style={cardSubTitle}>(Feb 2019 - Dec 2021)</span></h3>
              <p>
                Delivered 10+ Finland-based projects at Progstream, building scalable web and mobile apps like an online store, ride-sharing app, farmer job portal, and dynamic UIs with Contentful & React. Worked with Node.js, React, Angular (old & new), .NET, Laravel, AWS, and PostgreSQL, using monolithic and microservices approaches. Managed secure payments, real-time features with Socket.io, deployment troubleshooting, and CI/CD pipelines with Jenkins in an agile team.              </p>
              <p style={cardMeta}>Angular | Node.js | Laravel | .Net | PostgreSQL | IoT | Sqlite | HTML | CSS | AWS | Kafka | Finja | Socket | Slack | Bitbucket | Gitlab | Jira | Knex | AWS | Firebase | Jest | Stripe </p>
            </div>
            
            <div style={cardStyle}>
              <span style={cardName}>Full-Time</span>
              <h3 style={cardTitle}>Generic Solution <span style={cardSubTitle}>(Dec 2018 - Feb 2019)</span></h3>
              <p>
                Developed a rice supply chain management system at Generic Solution, enabling better coordination between distributors, retailers, importers, and exporters. Used .NET Entity Framework 3 and AngularJS 1.x, later transitioned to Angular 6. Built REST APIs and UIs for inventory, transactions, and relationship tracking in the rice trade ecosystem              </p>
              <p style={cardMeta}>.NET · Entity Framework 3 · AngularJS 1.x · Angular 6 · REST APIs · Git · Backend Development</p>
            </div>

            <div style={cardStyle}>
              <span style={cardName}>Full-Time</span>
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


const buttonStyle = {
  marginRight: 10,
  padding: '10px 20px',
  background: '#0ea5e9',
  color: '#fff',
  borderRadius: 6,
  textDecoration: 'none',
  fontWeight: 'bold',
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

const linkButton = {
  padding: '8px 16px',
  background: '#0ea5e9',
  color: '#fff',
  borderRadius: 6,
  textDecoration: 'none',
  fontWeight: 'bold',
};

const cardName = {
  backgroundColor: '#e0f2fe',
  color: '#0284c7',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '12px',
  marginLeft: '10px'
}
