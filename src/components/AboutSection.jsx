const AboutSection = ()=>{
    return (
        <section id="about" className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-6 lg:mb-10">
              About
            </h2>
            <p>
              I’m a Software Engineer with around 2 years of experience building <span className="font-medium text-slate-200">
              {" "}scalable backend systems</span> and real-time applications, 
              primarily using <span className="font-medium text-slate-200"> Node.js, Kafka, Express.js, Databases, Redis, and WebSockets, </span> along with hands-on full-stack development using 
              <span className="font-medium text-slate-200">React.</span>
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
    )
}
export default AboutSection;