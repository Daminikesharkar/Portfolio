const PublicationSection = ()=>{
    return (
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
    )
}
export default PublicationSection;