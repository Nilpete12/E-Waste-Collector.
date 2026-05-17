export default function ImpactStats() {
    const stats = [
        { 
            label: "Devices Recycled", 
            value: "14,592", 
            icon: <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        },
        { 
            label: "CO₂ Saved (Tons)", 
            value: "840", 
            icon: <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        },
        { 
            label: "Metals Recovered (kg)", 
            value: "3,205", 
            icon: <svg className="w-8 h-8 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        },
    ];

    return (
        <section className="relative z-20 py-16 border-t bg-stone-950 border-stone-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-sm font-bold tracking-widest uppercase text-emerald-500">Platform Metrics</h2>
                    <p className="text-3xl font-bold text-white">Our Collective Impact</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-8 transition-colors border shadow-lg group bg-stone-900/50 backdrop-blur-sm rounded-2xl border-stone-800 hover:border-emerald-500/30">
                            <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 rounded-xl bg-stone-800 group-hover:scale-110">
                                {stat.icon}
                            </div>
                            <div className="mb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-400">
                                {stat.value}
                            </div>
                            <div className="font-medium text-stone-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}