import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// Mock Data for the Education Section
const HAZARD_DATA = [
    {
        id: 'mobile',
        icon: '📱',
        name: 'Mobile Phones',
        materials: ['Lead', 'Mercury', 'Cadmium', 'Beryllium'],
        effects: 'Toxic materials from degrading batteries and circuit boards can leach into groundwater. Chronic exposure causes kidney damage, neurological impairment, and severe soil pollution.',
        color: 'from-amber-500 to-orange-600'
    },
    {
        id: 'laptop',
        icon: '💻',
        name: 'Laptops & PCs',
        materials: ['Brominated Flame Retardants', 'Lead', 'Hexavalent Chromium'],
        effects: 'When improperly incinerated, these plastics release highly toxic dioxins into the air. Heavy metals disrupt endocrine systems and cause respiratory illnesses.',
        color: 'from-rose-500 to-red-600'
    },
    {
        id: 'battery',
        icon: '🔋',
        name: 'Batteries (Lithium/Alkaline)',
        materials: ['Lithium', 'Cobalt', 'Sulfuric Acid', 'Lead'],
        effects: 'Punctured or degrading batteries pose severe fire risks in landfills. Chemical runoff causes rapid water acidification, destroying local aquatic ecosystems.',
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 'tv',
        icon: '📺',
        name: 'Televisions & Monitors',
        materials: ['Lead Glass', 'Phosphor', 'Mercury (LCDs)'],
        effects: 'Older CRTs contain up to 8 lbs of lead. Broken screens release phosphor dust and mercury vapor, severely damaging the central nervous system if inhaled.',
        color: 'from-amber-400 to-orange-500'
    }
];

export default function DeviceEducation() {
    // Calculator State
    const [calcData, setCalcData] = useState({ category: 'mobile', brand: '', model: '', condition: 'good' });
    const [result, setResult] = useState(null);
    const [isCalculating, setIsCalculating] = useState(false);

    // Hazard Modal State
    const [activeHazard, setActiveHazard] = useState(null);

    // Fake Calculation Logic
    const handleCalculate = (e) => {
        e.preventDefault();
        setIsCalculating(true);
        
        // Simulate a quick API loading state
        setTimeout(() => {
            const basePoints = calcData.category === 'laptop' ? 500 : 150;
            const conditionMultiplier = calcData.condition === 'new' ? 1.5 : calcData.condition === 'good' ? 1.2 : calcData.condition === 'broken' ? 0.8 : 0.5;
            
            setResult({
                points: Math.floor(basePoints * conditionMultiplier),
                metals: {
                    gold: (Math.random() * 0.5 + 0.1).toFixed(2),
                    silver: (Math.random() * 2 + 0.5).toFixed(2),
                    copper: (Math.random() * 15 + 5).toFixed(1),
                    palladium: (Math.random() * 0.1 + 0.01).toFixed(3)
                }
            });
            setIsCalculating(false);
        }, 800);
    };

    return (
        <MainLayout>
            <Head title="Rewards Calculator | EcoLocator" />
            
            <div className="relative min-h-screen pb-24 overflow-hidden bg-stone-950">
                
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 px-4 pt-8 mx-auto mb-10 max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4 backdrop-blur-md">
                            Device Valuation Intelligence
                        </div>
                        <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                            Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Eco Potential</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-stone-400">
                            Estimate the rare earth materials locked inside your old devices and see how many Eco Points you can earn by recycling them properly.
                        </p>
                    </div>

                    {/* TOP HALF: Calculator Section */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        
                        {/* Input Form */}
                        <div className="relative p-8 overflow-hidden border shadow-2xl bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                            <h2 className="mb-6 text-2xl font-bold text-white">Device Diagnostic</h2>
                            
                            <form onSubmit={handleCalculate} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-stone-400 mb-1.5">Device Category</label>
                                    <select 
                                        value={calcData.category}
                                        onChange={(e) => setCalcData({...calcData, category: e.target.value})}
                                        className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    >
                                        <option value="mobile">Mobile Phone</option>
                                        <option value="laptop">Laptop / PC</option>
                                        <option value="tablet">Tablet</option>
                                        <option value="battery">Battery Pack</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-stone-400 mb-1.5">Brand</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. Apple, Dell"
                                            value={calcData.brand}
                                            onChange={(e) => setCalcData({...calcData, brand: e.target.value})}
                                            required
                                            className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 placeholder-stone-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone-400 mb-1.5">Model</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. iPhone 12"
                                            value={calcData.model}
                                            onChange={(e) => setCalcData({...calcData, model: e.target.value})}
                                            required
                                            className="w-full px-4 py-3 text-white transition-all border bg-stone-950 border-stone-700 rounded-xl focus:ring-2 focus:ring-emerald-500 placeholder-stone-600"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-400 mb-1.5">Approximate Condition</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {['new', 'good', 'broken', 'scrap'].map((cond) => (
                                            <button
                                                key={cond}
                                                type="button"
                                                onClick={() => setCalcData({...calcData, condition: cond})}
                                                className={`py-2 px-1 text-xs font-bold rounded-lg uppercase tracking-wider transition-all border ${
                                                    calcData.condition === cond 
                                                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                                                    : 'bg-stone-950 border-stone-800 text-stone-500 hover:border-stone-600'
                                                }`}
                                            >
                                                {cond}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    disabled={isCalculating}
                                    className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                >
                                    {isCalculating ? (
                                        <span className="w-5 h-5 border-2 rounded-full border-emerald-950 border-t-transparent animate-spin"></span>
                                    ) : (
                                        "Run Material Scan"
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Output Dashboard */}
                        <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden text-center border bg-stone-900/40 border-stone-800 rounded-2xl backdrop-blur-md">
                            {!result ? (
                                <div className="flex flex-col items-center text-stone-500">
                                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    <p>Enter device details to initiate scan.</p>
                                </div>
                            ) : (
                                <div className="w-full animate-[fadeIn_0.5s_ease-out]">
                                    <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-stone-400">Estimated Value</p>
                                    <div className="mb-2 text-6xl font-black text-white">
                                        {result.points} <span className="text-2xl text-emerald-400">Pts</span>
                                    </div>
                                    <p className="mb-8 text-sm text-stone-500">Credited upon successful facility drop-off</p>
                                    
                                    <div className="grid w-full grid-cols-2 gap-4 text-left">
                                        <div className="p-4 border bg-stone-950/80 rounded-xl border-stone-800">
                                            <p className="mb-1 text-xs font-bold text-amber-400">Gold (Au)</p>
                                            <p className="text-xl font-medium text-white">{result.metals.gold} <span className="text-sm text-stone-500">g</span></p>
                                        </div>
                                        <div className="p-4 border bg-stone-950/80 rounded-xl border-stone-800">
                                            <p className="mb-1 text-xs font-bold text-stone-300">Silver (Ag)</p>
                                            <p className="text-xl font-medium text-white">{result.metals.silver} <span className="text-sm text-stone-500">g</span></p>
                                        </div>
                                        <div className="p-4 border bg-stone-950/80 rounded-xl border-stone-800">
                                            <p className="mb-1 text-xs font-bold text-orange-400">Copper (Cu)</p>
                                            <p className="text-xl font-medium text-white">{result.metals.copper} <span className="text-sm text-stone-500">g</span></p>
                                        </div>
                                        <div className="p-4 border bg-stone-950/80 rounded-xl border-stone-800">
                                            <p className="mb-1 text-xs font-bold text-stone-400">Palladium (Pd)</p>
                                            <p className="text-xl font-medium text-white">{result.metals.palladium} <span className="text-sm text-stone-500">g</span></p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* BOTTOM HALF: Hazard Education */}
                    <div className="pt-8 mt-8 border-t border-stone-800/80">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold text-white">The Hidden Cost of E-Waste</h2>
                            <p className="max-w-2xl mx-auto text-stone-400">
                                Devices improperly disposed of in landfills release critical toxins. Select a device category to understand its environmental and human impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {HAZARD_DATA.map((hazard) => (
                                <button 
                                    key={hazard.id}
                                    onClick={() => setActiveHazard(hazard)}
                                    className="p-6 text-left transition-all border shadow-lg group bg-stone-900/50 backdrop-blur-sm border-stone-800 hover:border-red-500/50 rounded-2xl hover:-translate-y-1"
                                >
                                    <div className="mb-4 text-4xl transition-transform origin-left group-hover:scale-110">{hazard.icon}</div>
                                    <h3 className="mb-2 text-lg font-bold text-white">{hazard.name}</h3>
                                    <p className="text-sm font-medium transition-colors text-stone-500 group-hover:text-red-400/80">
                                        View Hazards &rarr;
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Hazard Modal Overlay */}
            {activeHazard && (
                <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 9999 }}>
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
                        onClick={() => setActiveHazard(null)}
                    ></div>
                    
                    {/* Modal Content */}
                    <div className="relative bg-stone-900 border border-stone-700 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                        
                        {/* Danger Header */}
                        <div className={`p-6 bg-gradient-to-r ${activeHazard.color} relative overflow-hidden`}>
                            {/* Warning Pattern Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
                            
                            <div className="relative z-10 flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl drop-shadow-md">{activeHazard.icon}</span>
                                    <h3 className="text-2xl font-black text-white drop-shadow-md">{activeHazard.name}</h3>
                                </div>
                                <button 
                                    onClick={() => setActiveHazard(null)}
                                    className="bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <h4 className="mb-3 text-xs font-bold tracking-widest text-red-500 uppercase">Toxic Materials Present</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {activeHazard.materials.map((mat, idx) => (
                                    <span key={idx} className="px-3 py-1 text-sm font-semibold text-red-400 border rounded-md bg-red-500/10 border-red-500/20">
                                        {mat}
                                    </span>
                                ))}
                            </div>

                            <h4 className="mb-3 text-xs font-bold tracking-widest text-orange-500 uppercase">Environmental & Health Effects</h4>
                            <p className="p-4 text-sm leading-relaxed border text-stone-300 bg-stone-950 rounded-xl border-stone-800">
                                {activeHazard.effects}
                            </p>
                        </div>
                        
                        <div className="p-4 text-center border-t border-stone-800 bg-stone-950/50">
                            <button 
                                onClick={() => setActiveHazard(null)}
                                className="text-sm font-semibold transition-colors text-stone-400 hover:text-white"
                            >
                                Close Report
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}