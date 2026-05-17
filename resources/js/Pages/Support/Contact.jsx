import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1200);
    };

    return (
        <MainLayout>
            <Head title="Contact Support | EcoLocator" />
            
            <div className="relative min-h-screen pt-16 pb-24 font-sans bg-stone-950">
                <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">How can we help?</h1>
                        <p className="max-w-2xl mx-auto text-lg text-stone-400">
                            Whether you need help with a pickup, have questions about data security, or want to register as a facility partner, our team is ready.
                        </p>
                    </div>

                    <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
                        
                        {/* Left: Contact Form */}
                        <div className="relative p-8 overflow-hidden border shadow-2xl lg:col-span-2 bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-3xl">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-stone-400">Full Name</label>
                                            <input type="text" required className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500" />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-stone-400">Email Address</label>
                                            <input type="email" required className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-stone-400">Subject</label>
                                        <select className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500">
                                            <option>General Inquiry</option>
                                            <option>Pickup Issue / Delay</option>
                                            <option>Data Privacy Request</option>
                                            <option>Facility Partnership</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-stone-400">Message</label>
                                        <textarea rows="5" required className="w-full px-4 py-3 text-white transition-all border resize-none bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500"></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 flex justify-center items-center h-14"
                                    >
                                        {isSubmitting ? <span className="w-6 h-6 border-4 rounded-full border-emerald-950 border-t-transparent animate-spin"></span> : "Send Message"}
                                    </button>
                                </form>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                                    <div className="flex items-center justify-center w-20 h-20 mb-6 border-2 rounded-full bg-emerald-500/20 border-emerald-500">
                                        <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                                    <p className="mb-6 text-stone-400">We've received your inquiry and will get back to you within 24 hours.</p>
                                    <button onClick={() => setIsSuccess(false)} className="font-semibold text-emerald-400 hover:text-emerald-300">Send another message</button>
                                </div>
                            )}
                        </div>

                        {/* Right: Info Panel */}
                        <div className="space-y-6">
                            <div className="p-6 border bg-stone-900/40 border-stone-800 rounded-2xl backdrop-blur-md">
                                <h3 className="mb-6 text-lg font-bold text-white">Direct Contact</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 shrink-0">
                                            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-sm font-semibold tracking-wider uppercase text-stone-500">Email</p>
                                            <p className="font-medium text-white">support@ecolocator.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 shrink-0">
                                            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-sm font-semibold tracking-wider uppercase text-stone-500">Phone</p>
                                            <p className="font-medium text-white">+91 1800-ECO-HELP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}