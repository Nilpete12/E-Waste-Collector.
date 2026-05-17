import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function SchedulePickup() {
    const [formData, setFormData] = useState({
        deviceType: 'mobile',
        condition: 'broken',
        address: '',
        pincode: '',
        date: '',
        timeSlot: 'morning',
        notes: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate an API call to your Laravel backend
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <MainLayout>
            <Head title="Schedule Pickup | EcoLocator" />
            
            <div className="relative min-h-screen pb-24 overflow-hidden font-sans bg-stone-950">
                {/* Background Ambient Glow */}
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 px-4 pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4 backdrop-blur-md">
                            Secure Logistics
                        </div>
                        <h1 className="mb-4 text-4xl font-black tracking-tight text-white">
                            Schedule a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Home Pickup</span>
                        </h1>
                        <p className="max-w-xl text-lg text-stone-400">
                            Let our certified recycling partners come to you. Book a secure pickup for your e-waste and start earning Eco Points from the comfort of your home.
                        </p>
                    </div>

                    {!isSuccess ? (
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            
                            {/* Left Column: The Booking Form */}
                            <div className="relative p-8 overflow-hidden border shadow-2xl lg:col-span-2 bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-3xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    
                                    {/* Device Information */}
                                    <div>
                                        <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-white">
                                            <span className="flex items-center justify-center w-6 h-6 text-sm rounded-full bg-emerald-500/20 text-emerald-400">1</span>
                                            Device Details
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-stone-400 mb-1.5">Primary Device Type</label>
                                                <select 
                                                    value={formData.deviceType}
                                                    onChange={(e) => setFormData({...formData, deviceType: e.target.value})}
                                                    className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500"
                                                >
                                                    <option value="mobile">Mobile Phones / Tablets</option>
                                                    <option value="laptop">Laptops / PCs</option>
                                                    <option value="appliance">Large Appliances (TV, Fridge)</option>
                                                    <option value="battery">Batteries & Cables</option>
                                                    <option value="mixed">Mixed E-Waste Box</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-stone-400 mb-1.5">Condition</label>
                                                <select 
                                                    value={formData.condition}
                                                    onChange={(e) => setFormData({...formData, condition: e.target.value})}
                                                    className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500"
                                                >
                                                    <option value="working">Working / Intact</option>
                                                    <option value="broken">Broken Screen / Parts</option>
                                                    <option value="scrap">Completely Dead / Scrap</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location Information */}
                                    <div className="pt-6 border-t border-stone-800/80">
                                        <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-white">
                                            <span className="flex items-center justify-center w-6 h-6 text-sm rounded-full bg-emerald-500/20 text-emerald-400">2</span>
                                            Pickup Location
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-stone-400 mb-1.5">Full Address</label>
                                                <textarea 
                                                    rows="2"
                                                    value={formData.address}
                                                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                                                    placeholder="Enter your street address, apartment, building..."
                                                    required
                                                    className="w-full px-4 py-3 text-white transition-all border resize-none bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 placeholder-stone-600"
                                                ></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-stone-400 mb-1.5">PIN Code</label>
                                                <input 
                                                    type="text" 
                                                    value={formData.pincode}
                                                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                                                    placeholder="e.g. 110001"
                                                    required
                                                    className="w-full px-4 py-3 text-white transition-all border md:w-1/2 bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 placeholder-stone-600"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Schedule */}
                                    <div className="pt-6 border-t border-stone-800/80">
                                        <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-white">
                                            <span className="flex items-center justify-center w-6 h-6 text-sm rounded-full bg-emerald-500/20 text-emerald-400">3</span>
                                            Preferred Schedule
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label className="block text-sm font-medium text-stone-400 mb-1.5">Date</label>
                                                {/* Inversion trick for native date picker icon in dark mode */}
                                                <input 
                                                    type="date" 
                                                    value={formData.date}
                                                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                                                    required
                                                    className="w-full bg-stone-950 border border-stone-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 transition-all [color-scheme:dark]"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-stone-400 mb-1.5">Time Slot</label>
                                                <select 
                                                    value={formData.timeSlot}
                                                    onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                                                    className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500"
                                                >
                                                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                                                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                                                    <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 flex justify-center items-center gap-2 text-lg"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-6 h-6 border-4 rounded-full border-emerald-950 border-t-transparent animate-spin"></span>
                                        ) : (
                                            "Confirm Pickup Request"
                                        )}
                                    </button>
                                </form>
                            </div>

                            {/* Right Column: Info Card */}
                            <div className="space-y-6">
                                <div className="p-6 border bg-stone-900/40 border-stone-800 rounded-2xl backdrop-blur-md">
                                    <h3 className="mb-4 text-xl font-bold text-white">What happens next?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3 text-sm text-stone-400">
                                            <span className="text-emerald-400 shrink-0">✓</span>
                                            <div>
                                                <strong className="text-white block mb-0.5">Verification</strong>
                                                We'll verify your details and assign a certified local recycling partner.
                                            </div>
                                        </li>
                                        <li className="flex gap-3 text-sm text-stone-400">
                                            <span className="text-emerald-400 shrink-0">✓</span>
                                            <div>
                                                <strong className="text-white block mb-0.5">Secure Transport</strong>
                                                An agent will collect your devices at the scheduled time.
                                            </div>
                                        </li>
                                        <li className="flex gap-3 text-sm text-stone-400">
                                            <span className="text-emerald-400 shrink-0">✓</span>
                                            <div>
                                                <strong className="text-white block mb-0.5">Points Awarded</strong>
                                                Once the facility processes your items, Eco Points are credited to your dashboard!
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 text-center border bg-stone-900/40 border-stone-800 rounded-2xl backdrop-blur-md">
                                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-stone-800">
                                        <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                    </div>
                                    <h4 className="mb-2 font-bold text-white">Data Security Guarantee</h4>
                                    <p className="text-xs leading-relaxed text-stone-500">
                                        All devices undergo a military-grade data wipe before physical destruction or material recovery. Your privacy is mathematically guaranteed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Success State */
                        <div className="bg-stone-900/60 backdrop-blur-xl border border-stone-800 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-2xl animate-[fadeIn_0.5s_ease-out]">
                            <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h2 className="mb-4 text-3xl font-black text-white">Pickup Request Confirmed!</h2>
                            <p className="mb-8 text-lg text-stone-400">
                                Thank you for choosing to recycle responsibly. Your request ID is <strong className="text-emerald-400">PK-8911</strong>. We have sent the details to your email.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link href="/dashboard" className="px-8 py-3 font-bold transition-all shadow-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-xl">
                                    Go to Dashboard
                                </Link>
                                <button onClick={() => setIsSuccess(false)} className="px-8 py-3 font-bold text-white transition-all border bg-stone-800 hover:bg-stone-700 rounded-xl border-stone-700">
                                    Schedule Another
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}