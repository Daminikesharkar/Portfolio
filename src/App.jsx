import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"
import collabboardImg from "../src/assets/react.svg"

function App() {
  return (
    <div className="min-h-screen flex">
      <div className="w-[50%]">
        <div className="sticky top-0 h-screen flex flex-col justify-between px-40 py-24">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-100">Damini Kesharkar</h1>
            <h2 className="mt-4 text-xl font-medium tracking-tight text-teal-300">Backend Heavy Full-stack Developer</h2>
            <p className="mt-6 max-w-sm leading-relaxed text-slate-400">I build scalable backend systems 
            <br/> and clean web experiences.</p>
          </div>

          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="group flex items-center gap-4">
                  <span className="h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-300">About</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="group flex items-center gap-4">
                  <span className="h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-300">Experience</span>
                </a>
              </li>
              <li><a href="#projects" className="group flex items-center gap-4">
                  <span className="h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-300">Projects</span>
                </a>
              </li>
              <li>
                <a href="#publications" className="group flex items-center gap-4">
                  <span className="h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-300">Publications</span>
                </a>
              </li>
              <li>
                <a href="#techstack" className="group flex items-center gap-4">
                  <span className="h-px w-8 bg-slate-500 transition-all duration-300 group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-teal-300">Tech Stack</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6 text-2xl text-slate-400">
            <a href="#" className="hover:text-teal-300 transition"><FaGithub /></a>
            <a href="#" className="hover:text-teal-300 transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-teal-300 transition"><FaMailBulk /></a>
          </div>
        </div>
      </div>

      <div className="w-[50%] py-24 pr-40">
        <div className="space-y-40">
    
          <section id="about" className="text-slate-400">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-10">
              About
            </h2>
            <p>
              I’m a Software Engineer with around 2 years of experience building scalable backend systems and real-time applications, 
              primarily using Node.js, Kafka, Redis, and WebSockets, along with hands-on full-stack development using React.
            </p>
            <br/>
            <p>
              I started my career at Uptycs, where I worked on backend systems for a large-scale Offline Asset Tracker. There, 
              I focused on improving system performance and reliability—like building scalable APIs, optimizing telemetry 
              data pipelines using Presto and MongoDB, and automating workflows using Airflow. I also worked on real-time 
              data streaming systems using Kafka and WebSockets, which helped reduce latency and improve live data processing. 
              Alongside that, I contributed to CI/CD pipelines using Jenkins and Docker, which significantly improved deployment 
              efficiency.
            </p>
            <br/>
            <p>
              After that, I used a planned break to upskill deeply in full-stack development and system design. During this time, 
              I built production-grade projects to strengthen my hands-on skills.
            </p>
            <br/>
            <p>
              One of my key projects is CollabBoard, a real-time collaboration platform where I designed JWT-based authentication, 
              role-based access control, WebSocket-based real-time updates, and an event-driven notification system using Kafka. 
              I also integrated Redis for caching and rate limiting, added AI-based task generation using LLM APIs, 
              implemented payment integration with Razorpay, and deployed the system using AWS with Dockerized services.
            </p>
            <br/>
            <p>
              Another project is GoTasky, a location-aware smart assistant that uses GPS tracking and proximity detection to trigger real-time 
              alerts when users are near task locations. It also includes AI-based optimization to intelligently group nearby tasks and 
              suggest efficient execution order.
            </p>
            <br/>
            <p>
              Overall, I enjoy working on systems that involve real-time communication, backend architecture, and scalable design. 
              I’m now looking for opportunities where I can contribute to product-scale systems and continue working on 
              backend-heavy, distributed, and real-time applications.
            </p>
          </section>

          <section id="experience">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Experience
            </h2>

            <div className="mt-10 space-y-12">

              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <p className="text-sm text-slate-500">
                    JUL 2021 — NOV 2022
                  </p>
                </div>

                <div className="col-span-6">
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    Software Engineer · Uptycs India Pvt. Ltd.
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Designed and deployed scalable backend systems for
                    the Offline Asset Tracker, improving asset visibility
                    and system performance by 25% through dashboards,
                    alerts, and notifications.
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Built real-time streaming solutions using Kafka and
                    WebSockets, reducing latency by 30% and enabling
                    efficient live data processing.
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Developed telemetry data pipelines using Presto SQL,
                    MongoDB, and Airflow DAGs, reducing manual
                    intervention by 80%.
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Automated deployments using Jenkins pipelines and
                    Docker, reducing deployment time by 50%.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Node.js
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Kafka
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      MongoDB
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Docker
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Jenkins
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Airflow
                    </span>
                  </div>
                </div>
              </div>

              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <p className="text-sm text-slate-500">
                    APR 2021 — JUL 2021
                  </p>
                </div>

                <div className="col-span-6">
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    Software Engineer Intern · Uptycs India Pvt. Ltd.
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Developed data processing scripts using Redis and
                    PostgreSQL to generate user-level analytics,
                    improving data-driven decision-making by 40%.
                  </p>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    Built REST APIs using Node.js and Express.js and
                    performed API testing using Postman, reducing bug
                    reports by 30%.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Node.js
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Express
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      Redis
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-m font-medium text-slate-200 transition hover:text-teal-300"
              >
                <span>
                  View Full Resume
                </span>
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </section>          

          <section id="projects">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Projects
            </h2>

            <div className="mt-10 space-y-8">
              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <img 
                    src={collabboardImg}
                    alt="collabboard"
                    className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    CollabBoard
                  </h3>
                    <p className="mt-4 leading-relaxed text-slate-400">
                      A real-time collaboration platform featuring live chat,
                      AI-powered task generation, notifications, RBAC, and
                      scalable event-driven architecture for modern teams.
                    </p>
                    {/* <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">React</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Node.js</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Kafka</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Redis</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">AWS</span>
                    </div> */}
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <img 
                    src={collabboardImg}
                    alt="gotasky"
                    className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    GoTasky
                  </h3>
                    <p className="mt-4 leading-relaxed text-slate-400">
                      A location-aware smart assistant that delivers
                      intelligent proximity reminders, live tracking, and
                      AI-optimized errand planning in real time.
                    </p>
                    {/* <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">React</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Node.js</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">TypeScript</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">WebSockets</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">AWS</span>
                    </div> */}
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <img 
                    src={collabboardImg}
                    alt="expensetracker"
                    className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    Expense Tracker
                  </h3>
                    <p className="mt-4 leading-relaxed text-slate-400">
                      A full-stack finance management app with secure CRUD
                      operations, CI/CD automation, and AWS deployment for
                      scalable expense tracking workflows.
                    </p>
                    {/* <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Html-css</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Node.js</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Jenkins</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">MongoDB</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">AWS</span>
                    </div> */}
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <img 
                    src={collabboardImg}
                    alt="circlechat"
                    className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    Circle Chat
                  </h3>
                    <p className="mt-4 leading-relaxed text-slate-400">
                      A secure real-time communication platform supporting
                      one-to-one and group messaging with Socket.IO-powered
                      live interactions and automated background workflows.
                    </p>
                    {/* <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Socket.IO</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Node.js</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">MongoDB</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Express.js</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Cron jobs</span>
                    </div> */}
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-8">
              <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                  <img 
                    src={collabboardImg}
                    alt="Gesture Based Operating System"
                    className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                  />
                </div>
                <div className="col-span-6">
                  <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    Gesture Based Operating System
                  </h3>
                    <p className="mt-4 leading-relaxed text-slate-400">
                      A computer vision–powered gesture recognition system
                      enabling intuitive real-time human-computer
                      interaction using hand tracking and motion detection.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Python</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">MediaPipe</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">OpenCV</span>
                      <span className="rounded-full bg-teal-400/10 px-4 py-1 text-sm text-teal-300">Computer Vision</span>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section id="publications">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Publications
            </h2>

            <div className="mt-10">
              <div className="group rounded-xl p-6 transition hover:bg-slate-800/40">
                <p className="text-sm text-slate-500">
                  2021 · IJAEM, IRJET
                </p>

                <h3 className="mt-3 text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                  Effective Computer Vision Techniques for Real-Time
                  Hand Gesture Recognition and Detection
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  Research focused on real-time gesture recognition
                  systems using computer vision and hand-tracking
                  techniques for intuitive human-computer interaction.
                </p>

                <div className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-teal-300 hover:text-teal-200"
                  >
                    View Publication →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="techstack">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Tech Stack
            </h2>           

            <div className="mt-20 space-y-8">
              <div className="border-b border-slate-800 pb-6">
                <div className="flex items-start justify-between gap-10">
                  <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    Languages
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    JavaScript, TypeScript, Python
                  </p>  
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="flex items-start justify-between gap-10">
                  <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    Frontend
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    React.js, Redux, React Query, Tailwind CSS
                  </p>
                </div>
              </div>
 
              <div className="border-b border-slate-800 pb-6">
                <div className="flex items-start justify-between gap-10">
                  <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    Backend
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    Node.js, Express.js, REST APIs, WebSockets
                  </p>
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="flex items-start justify-between gap-10">
                  <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    Databases
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    PostgreSQL, MongoDB, Redis, MySQL
                  </p>
                </div>
              </div>

              <div className="border-b border-slate-800 pb-6">
                <div className="flex items-start justify-between gap-10">
                  <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    Cloud
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    AWS EC2, S3, IAM, Docker, CI/CD
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-start justify-between gap-10">
                  <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    AI
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    LLMs, RAG, Embeddings, OpenAI APIs
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="bg-slate-900/50 p-10 backdrop-blur-sm">
              <div>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-100">
                  Let’s Work Together
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
                  I’m interested in backend engineering, scalable systems,
                  AI-powered applications, and impactful product experiences.
                  Whether you have a project, opportunity, or just want to
                  connect — feel free to reach out.
                </p>
              </div>

              <form className="mt-12 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl bg-slate-950 px-5 py-4 text-slate-200 outline-none transition focus:border-teal-300"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-slate-950 px-5 py-4 text-slate-200 outline-none transition focus:border-teal-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl bg-slate-950 px-5 py-4 text-slate-200 outline-none transition focus:border-teal-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm bg-teal-300 px-10 py-3 font-medium text-slate-900 transition hover:scale-[1.02] hover:bg-teal-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>          
        </div>
      </div>
    </div>
  )
}

export default App