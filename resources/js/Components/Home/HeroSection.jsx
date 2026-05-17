import { Link } from '@inertiajs/react';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950 font-sans">
            
            {/* Modern Mesh/Glow Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-600/20 blur-[120px] rounded-full mix-blend-screen"></div>
                {/* Subtle tech-grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full gap-16 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:flex-row lg:py-0">

                {/* Left Column: Typography & Action */}
                <div className="flex-1 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6 backdrop-blur-md">
                        <span className="relative flex w-2 h-2">
                          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
                          <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                        </span>
                        Next-Gen E-Waste Intelligence
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
                        Don't Trash It. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            Reclaim It.
                        </span>
                    </h1>

                    <p className="max-w-xl mb-10 text-lg font-light leading-relaxed text-stone-400">
                        Transform obsolete electronics into tangible ecological impact. Locate certified facilities, track your carbon offset, and earn green rewards instantly.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href="/locator" className="relative group overflow-hidden rounded-xl bg-emerald-500 px-8 py-4 text-emerald-950 font-bold text-center transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                            <span className="relative z-10">Launch Map Locator</span>
                            {/* CSS Shimmer Effect */}
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
                        </Link>

                        <Link href="/education" className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all border rounded-xl border-stone-700 bg-stone-900/50 backdrop-blur-md hover:bg-stone-800 hover:border-stone-500">
                            View Rewards
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Floating Glassmorphism Data Cards */}
                <div className="relative flex-1 hidden w-full lg:block">
                    
                    {/* Main UI Card Mockup */}
                    <div className="relative flex flex-col justify-between w-full max-w-md p-8 mx-auto overflow-hidden border shadow-2xl aspect-square rounded-2xl bg-stone-900/60 border-stone-700/50 backdrop-blur-xl">
                        
                        {/* Internal Glow */}
                        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none"></div>

                        <div className="z-10 flex items-start justify-between">
                            <div className="flex items-center justify-center border shadow-inner w-14 h-14 rounded-2xl bg-gradient-to-br from-stone-800 to-stone-900 border-stone-700">
                                <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                            </div>
                            <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase border rounded-full bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                                78% Metals Recovered
                            </span>
                        </div>

                        <div className="z-10 space-y-6">
                            <div>
                                <h3 className="mb-1 text-sm text-stone-400">Processor Analysis</h3>
                                <p className="text-lg font-medium text-white">Intel Core i7 (Scrap)</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-stone-400">Extraction Yield</span>
                                    <span className="font-bold text-emerald-400">Excellent</span>
                                </div>
                                <div className="w-full h-2 overflow-hidden rounded-full bg-stone-800">
                                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[78%] relative">
                                        <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Accent Card 1 */}
                    <div className="absolute -top-6 -right-6 bg-stone-800/80 border border-stone-700 backdrop-blur-md rounded-2xl p-5 shadow-2xl animate-[bounce_6s_infinite]">
                        <p className="mb-1 text-xs font-medium tracking-wider uppercase text-stone-400">Carbon Saved</p>
                        <p className="text-3xl font-black text-white">12.4 <span className="text-sm font-medium text-emerald-400">kg CO₂</span></p>
                    </div>

                    {/* Floating Accent Card 2 */}
                    <div className="absolute -bottom-8 -left-8 bg-stone-800/80 border border-stone-700 backdrop-blur-md rounded-2xl p-5 shadow-2xl animate-[bounce_7s_infinite_reverse]">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-emerald-500/20 border-emerald-500/30">
                                <span className="text-xl">📍</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Facility Found</p>
                                <p className="text-xs text-stone-400">0.8 miles away</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}