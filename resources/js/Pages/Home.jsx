import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import HeroSection from '@/Components/Home/HeroSection';
import ImpactStats from '@/Components/Home/ImpactStats';
import HowItWorks from '@/Components/Home/HowItWorks';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home | Next-Gen E-Waste Intelligence" />
            
            <HeroSection />
            <ImpactStats />
            <HowItWorks />
            
            {/* Dark Mode Call to Action Section */}
            <section className="relative py-24 overflow-hidden text-center border-t bg-stone-950 border-stone-800/50">
                {/* Accent glow */}
                <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl px-4 mx-auto">
                    <h2 className="mb-6 text-3xl font-black tracking-tight text-white md:text-5xl">Ready to clear out your drawers?</h2>
                    <p className="mb-10 text-lg font-light leading-relaxed text-stone-400">
                        Toxic materials from obsolete electronics seep into our soil and water if not handled properly. Be part of the solution today.
                    </p>
                    <a href="/locator" className="inline-block relative overflow-hidden rounded-xl bg-stone-100 px-10 py-4 text-stone-900 font-bold transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <span className="relative z-10">Start Recycling Now</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-stone-300/40 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
                    </a>
                </div>
            </section>
        </MainLayout>
    );
}