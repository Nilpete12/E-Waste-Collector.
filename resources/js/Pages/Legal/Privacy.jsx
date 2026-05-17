import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Privacy() {
    const lastUpdated = "May 17, 2026";

    return (
        <MainLayout>
            <Head title="Privacy Policy | EcoLocator" />
            
            <div className="relative min-h-screen pt-16 pb-24 font-sans bg-stone-950">
                {/* Subtle Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl px-4 mx-auto sm:px-6">
                    <div className="pb-8 mb-12 border-b border-stone-800/80">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Legal Documentation
                        </div>
                        <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">Privacy Policy</h1>
                        <p className="font-semibold text-emerald-400">Last Updated: {lastUpdated}</p>
                    </div>

                    <div className="space-y-10 leading-relaxed text-stone-400">
                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-white">1. Data Collection & Security</h2>
                            <p className="mb-4">
                                At EcoLocator, we take your privacy as seriously as our environmental impact. When you schedule a pickup or use our facility locator, we collect necessary geographical and contact information. All data is encrypted at rest using AES-256 standards.
                            </p>
                            <p>
                                When recycling devices with local storage (laptops, phones), our certified partners are contractually obligated to perform military-grade data wipes (DoD 5220.22-M standard) before any physical recycling occurs.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-white">2. Location Services</h2>
                            <p>
                                To accurately display nearby e-waste facilities, our application may request access to your device's location. This data is processed locally on your device to calculate routing and is never stored permanently on our servers unless you explicitly save a default address in your User Profile.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-2xl font-bold text-white">3. Third-Party Sharing</h2>
                            <p>
                                We do not sell your personal data. We only share necessary logistics information (Address, Phone Number, Device Type) with our rigorously vetted recycling facility partners solely for the purpose of executing your requested e-waste pickups. 
                            </p>
                        </section>

                        <div className="p-6 mt-12 border bg-stone-900/50 border-stone-800 rounded-xl">
                            <p className="text-sm">
                                For data deletion requests or privacy concerns, please contact our Data Protection Officer via our <a href="/contact" className="text-emerald-400 hover:underline">Contact Support</a> page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}