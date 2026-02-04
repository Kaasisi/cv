export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl font-bold tracking-tight">Eric Kiptoo Mutai</h1>
        <p className="mt-4 text-xl text-slate-300">
          Information Technician • Web Developer • IT Support & Networking
        </p>
        <p className="mt-6 max-w-2xl text-slate-400">
          Diploma-trained IT professional with hands-on experience in web development, cloud computing,
          cybersecurity, networking, and enterprise IT support across public and private sector environments.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition">Contact Me</a>
          <a href="#" className="px-6 py-3 rounded-2xl border border-slate-500 hover:border-slate-300 transition">Download CV</a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          I am a graduate of Diploma in Information Technology from Kabarak University with a strong
          foundation in networking, web development, cloud computing, and cybersecurity. I have
          practical experience developing websites, supporting enterprise systems, and maintaining
          hardware and software infrastructure.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Web & Programming</h3>
              <ul className="text-slate-400 space-y-1">
                <li>HTML, CSS, JavaScript</li>
                <li>PHP & Django (Python)</li>
                <li>CMS & Databases</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Cloud & Security</h3>
              <ul className="text-slate-400 space-y-1">
                <li>AWS Cloud Practitioner</li>
                <li>Cybersecurity Fundamentals</li>
                <li>Penetration Testing & Vulnerability Scanning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">IT Operations</h3>
              <ul className="text-slate-400 space-y-1">
                <li>Networking & Routing</li>
                <li>Hardware & Software Support</li>
                <li>System Administration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">Water Resources Authority (WRA)</h3>
            <p className="text-slate-400">IT Intern • May 2023 – April 2025</p>
            <ul className="mt-2 text-slate-300 list-disc list-inside">
              <li>QGIS mapping for WRUAs</li>
              <li>Data entry and system documentation</li>
              <li>Hardware and software maintenance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Kaasisi Digital Technologies Ltd</h3>
            <p className="text-slate-400">Web & Application Developer • Nov 2022 – Present</p>
            <ul className="mt-2 text-slate-300 list-disc list-inside">
              <li>Website and e-commerce development</li>
              <li>Digital marketing and online presence strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-slate-400 mb-4">📞 +254 712 190 927</p>
          <p className="text-slate-400 mb-4">✉️ ericmutai@kabarak.ac.ke</p>
          <p className="text-slate-400">LinkedIn: Eric (Kiptoo) Mutai</p>
        </div>
      </section>
    </main>
  );
}
