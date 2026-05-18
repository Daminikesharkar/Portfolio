const ContactSection = ()=>{
    return (
        <section id="contact">
            <div className="bg-slate-900/50 p-5 backdrop-blur-sm sm:p-8 lg:p-10">
              <div>
                <h2 className="lg:mt-4 sm:text-3xl text-2xl lg:text-4xl font-bold tracking-tight text-slate-100">
                  Let’s Work Together
                </h2>

                <p className="mt-4 lg:mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  I’m interested in backend engineering, scalable systems,
                  AI-powered applications, and impactful product experiences.
                  Whether you have a project, opportunity, or just want to
                  connect — feel free to reach out.
                </p>
              </div>

              <form  action="https://api.web3forms.com/submit" method="POST" className="mt-8 space-y-5 lg:mt-12 lg:space-y-6">
                <input type="hidden" name="access_key" value="77a91e75-e856-48a5-8a49-e706f71faf54" />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm sm:px-5 sm:py-4 sm:text-base text-slate-200 outline-none transition focus:border-teal-300"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm sm:px-5 sm:py-4 sm:text-base text-slate-200 outline-none transition focus:border-teal-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full rounded-xl bg-slate-950 px-5 py-4 text-sm sm:px-5 sm:py-4 sm:text-base text-slate-200 outline-none transition focus:border-teal-300 resize-none"
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