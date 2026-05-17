export default function FacilityCard({ facility, isActive, onClick }) {
    return (
        <div 
            onClick={onClick}
            className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                isActive 
                ? 'bg-emerald-900/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                : 'bg-stone-900/40 border-stone-800 hover:border-stone-600 hover:bg-stone-800/40'
            }`}
        >
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white transition-colors group-hover:text-emerald-400">
                    {facility.name}
                </h3>
                {facility.isOpen ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        OPEN
                    </span>
                ) : (
                    <span className="px-2 py-1 text-xs font-bold rounded-full text-stone-500 bg-stone-800">
                        CLOSED
                    </span>
                )}
            </div>
            
            <p className="flex items-start gap-2 mb-4 text-sm text-stone-400">
                <svg className="w-4 h-4 text-stone-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                {facility.address}
            </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {(facility.accepted_devices || facility.acceptedDevices || []).map((device, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-wider font-semibold text-stone-300 bg-stone-800 border border-stone-700 px-2 py-1 rounded-md">
                            {device}
                        </span>
                    ))}
                </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-stone-800/50">
                <div className="flex items-center gap-1">
                    <span className="text-sm text-amber-400">★</span>
                    <span className="text-sm font-bold text-white">{facility.rating}</span>
                    <span className="text-xs text-stone-500">({facility.reviews} reviews)</span>
                </div>
                <button className="flex items-center gap-1 text-sm font-semibold transition-colors text-emerald-400 hover:text-emerald-300">
                    Navigate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
}