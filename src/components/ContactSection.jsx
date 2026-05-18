const ContactSection = ()=>{
    return (
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
    )
}
export default ContactSection;