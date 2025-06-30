export default function App() {
  return (
    <main className="max-w-4xl mx-auto p-4 space-y-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Syed Yarooq</h1>
        <p className="text-xl mt-2 text-gray-600">
          Senior Fullstack JavaScript Developer (Node.js, React, AWS)
        </p>
        <p className="mt-1">Based in Germany | Chancenkarte Visa Holder</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://github.com/syed-yarooq-hussain" target="_blank">
            <button className="px-4 py-2 bg-black text-white rounded">GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/syed-yarooq/" target="_blank">
            <button className="px-4 py-2 border border-black rounded">LinkedIn</button>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I am a passionate Fullstack Developer with 6+ years of experience building scalable
          applications using JavaScript, TypeScript, Node.js, and React. My focus is delivering high-quality,
          maintainable code for global clients. I'm currently open to opportunities in Germany and Europe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-bold text-lg">Dastgyr B2B Marketplace</h3>
            <p className="text-sm mt-1">
              Developed 40+ Node.js APIs, integrated AWS & Kafka, improved performance, and led a team of 10 developers.
            </p>
            <p className="text-xs text-gray-500 mt-1">Node.js, React, AWS, Kafka, PostgreSQL</p>
          </div>
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-bold text-lg">Codup Web Solutions</h3>
            <p className="text-sm mt-1">
              Built fullstack features using Node.js, React, and AWS; implemented microservices and CI/CD pipelines.
            </p>
            <p className="text-xs text-gray-500 mt-1">Node.js, React, Docker, AWS, Redis</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Resume</h2>
        <a href="/Syed_Yarooq_CV.pdf" download>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Download CV</button>
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: syed.yarooq1701@gmail.com</p>
        <p>Phone: +49 152 1107 8765</p>
      </section>
    </main>
  );
}
