export default function HowItWorks() {
    const steps = [
        { num: "01", title: "Locate", desc: "Use our AI-powered map to find certified recycling centers near your pin code instantly." },
        { num: "02", title: "Drop-off or Pickup", desc: "Take your devices to the nearest facility or easily schedule a secure home pickup." },
        { num: "03", title: "Earn Rewards", desc: "Get Eco Points based on the recoverable rare materials inside your old technology." }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-stone-900">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h2 className="mb-16 text-3xl font-bold text-center text-white md:text-4xl">How It Works</h2>
                
                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Connecting Line (Hidden on Mobile) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent z-0"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 p-8 transition-all duration-300 border shadow-xl bg-stone-950/80 rounded-2xl border-stone-800 hover:border-emerald-500/50 hover:-translate-y-2 group backdrop-blur-md">
                            <div className="absolute mb-4 text-6xl font-black transition-colors pointer-events-none text-stone-800 group-hover:text-emerald-900/50 top-4 right-6">
                                {step.num}
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 mb-6 font-bold border rounded-full bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
                                {idx + 1}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-stone-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}