import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import AdminLayout from '@/Layouts/AdminLayout';

const INITIAL_CONTENT = [
    { id: 'mobile', type: 'Mobile Phones', materials: 'Lead, Mercury, Cadmium', effects: 'Chronic exposure causes kidney damage and severe soil pollution.' },
    { id: 'laptop', type: 'Laptops & PCs', materials: 'Flame Retardants, Chromium', effects: 'Releases highly toxic dioxins into the air if improperly incinerated.' }
];

export default function ContentManager() {
    const [content, setContent] = useState(INITIAL_CONTENT);
    const [isEditing, setIsEditing] = useState(null);

    return (
        <AdminLayout>
            <Head title="Content DB | Admin" />
            
            <div className="relative min-h-screen pb-24 font-sans bg-stone-950">
                <div className="relative z-10 px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    <div className="mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                            Education Database
                        </div>
                        <h1 className="text-3xl font-black text-white">Hazard Content Engine</h1>
                        <p className="mt-2 text-stone-400">Manage the toxic material warnings displayed on the user-facing rewards calculator.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {content.map(item => (
                            <div key={item.id} className="relative p-6 overflow-hidden border bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl group">
                                {/* Accent Bar */}
                                <div className="absolute top-0 left-0 w-1 h-full transition-colors bg-stone-700 group-hover:bg-orange-500"></div>
                                
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white">{item.type}</h3>
                                    <button 
                                        onClick={() => setIsEditing(isEditing === item.id ? null : item.id)} 
                                        className="px-3 py-1 text-sm font-bold text-orange-400 rounded-md hover:text-orange-300 bg-orange-500/10"
                                    >
                                        {isEditing === item.id ? 'Close' : 'Edit Details'}
                                    </button>
                                </div>

                                {isEditing === item.id ? (
                                    <div className="space-y-4 mt-4 animate-[fadeIn_0.2s_ease-out]">
                                        <div>
                                            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-stone-500">Harmful Materials</label>
                                            <input type="text" defaultValue={item.materials} className="w-full px-3 py-2 text-sm text-white border rounded-lg bg-stone-950 border-stone-700" />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-xs font-bold tracking-widest uppercase text-stone-500">Environmental Effects</label>
                                            <textarea rows="3" defaultValue={item.effects} className="w-full px-3 py-2 text-sm text-white border rounded-lg resize-none bg-stone-950 border-stone-700"></textarea>
                                        </div>
                                        <button onClick={() => setIsEditing(null)} className="w-full py-2 font-bold text-white transition-colors rounded-lg bg-stone-800 hover:bg-stone-700">Save Content</button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <p className="mb-1 text-xs font-bold tracking-widest text-red-500 uppercase">Materials Found</p>
                                            <p className="text-sm text-stone-300">{item.materials}</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-xs font-bold tracking-widest text-orange-500 uppercase">Effects</p>
                                            <p className="text-sm leading-relaxed text-stone-400">{item.effects}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}