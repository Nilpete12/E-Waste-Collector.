import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Terms() {
    return (
        <MainLayout>
            <Head title="Terms of Service | EcoLocator" />
            
            <div className="relative min-h-screen pt-16 pb-24 font-sans bg-stone-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6">
                    <div className="pb-8 mb-12 border-b border-stone-800/80">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Legal Documentation
                        </div>
                        <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">Terms of Service</h1>
                        <p className="font-semibold text-emerald-400">Effective Date: May 1, 2026</p>
                    </div>

                    <div className="space-y-10 leading-relaxed text-stone-400">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-white">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the EcoLocator platform, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the platform or use any of its services.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-white">2. The Eco Points System</h2>
                            <p className="mb-4">
                                Eco Points are a gamified metric designed to track environmental impact. They hold no real-world monetary value and cannot be exchanged for cash. 
                            </p>
                            <ul className="pl-5 space-y-2 list-disc marker:text-emerald-500">
                                <li>Points calculated by the "Device Reward Calculator" are estimates based on standard material yields.</li>
                                <li>Final points are awarded only after a facility physically receives and verifies the e-waste.</li>
                                <li>EcoLocator reserves the right to adjust point balances if fraudulent activity is detected.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-white">3. Pickup Request Liability</h2>
                            <p>
                                When scheduling a home pickup, you certify that the items handed over are your legal property and do not contain biohazards, undisclosed leaking chemicals, or illicit materials. EcoLocator acts as an intermediary routing platform and is not liable for damages occurring during physical transport by third-party facilities.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}