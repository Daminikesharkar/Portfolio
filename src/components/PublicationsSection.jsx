const PublicationSection = ()=>{
    return (
        <section id="publications" className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-6 lg:mb-10">
              Publications
            </h2>

            <div className="mt-5 lg:mt-10">
              <div className="group rounded-xl p-4 sm:p-5 lg:p-6 transition hover:bg-slate-800/40">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  2021 · IJAEM, IRJET
                </p>

                <h3 className="mt-2 text-lg font-semibold text-slate-200 transition group-hover:text-teal-300 sm:text-xl">
                  Effective Computer Vision Techniques for Real-Time
                  Hand Gesture Recognition and Detection
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
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