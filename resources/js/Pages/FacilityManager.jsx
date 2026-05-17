import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import AdminLayout from '@/Layouts/AdminLayout';

const INITIAL_FACILITIES = [
    { id: 1, name: "GreenTech E-Waste Hub", address: "Sector 62, Noida, UP 201309", contact: "+91 98765 43210", status: "Active" },
    { id: 2, name: "EcoReclaim Delhi", address: "Okhla Industrial Area, Phase 1", contact: "+91 91234 56789", status: "Inactive" },
];

export default function FacilityManager() {
    const [facilities, setFacilities] = useState(INITIAL_FACILITIES);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingFacility, setEditingFacility] = useState(null);

    const openModal = (facility = null) => {
        setEditingFacility(facility || { name: '', address: '', contact: '', status: 'Active' });
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        setFacilities(facilities.filter(f => f.id !== id));
    };

    return (
        <AdminLayout>
            <Head title="Manage Facilities | Admin" />
            
            <div className="relative min-h-screen pb-24 font-sans bg-stone-950">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                                Infrastructure
                            </div>
                            <h1 className="text-3xl font-black text-white">Facility Management</h1>
                        </div>
                        <button onClick={() => openModal()} className="bg-orange-500 hover:bg-orange-400 text-orange-950 font-bold px-6 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                            + Add Facility
                        </button>
                    </div>

                    <div className="overflow-hidden border shadow-2xl bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-xs font-bold tracking-wider uppercase border-b bg-stone-900/80 border-stone-800 text-stone-500">
                                    <th className="p-4">Facility Name</th>
                                    <th className="p-4">Address</th>
                                    <th className="p-4">Contact</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-stone-300">
                                {facilities.map(facility => (
                                    <tr key={facility.id} className="border-b border-stone-800/50 hover:bg-stone-800/20">
                                        <td className="p-4 font-bold text-white">{facility.name}</td>
                                        <td className="p-4">{facility.address}</td>
                                        <td className="p-4">{facility.contact}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${facility.status === 'Active' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10' : 'text-stone-400 border-stone-700 bg-stone-800'}`}>
                                                {facility.status}
                                            </span>
                                        </td>
                                        <td className="p-4 space-x-3 text-right">
                                            <button onClick={() => openModal(facility)} className="font-semibold text-emerald-400 hover:text-emerald-300">Edit</button>
                                            <button onClick={() => handleDelete(facility.id)} className="font-semibold text-red-400 hover:text-red-300">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Simple CRUD Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999]">
                    <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-stone-900 border border-stone-700 w-full max-w-md rounded-2xl p-6 shadow-2xl animate-[fadeIn_0.2s_ease-out]">
                        <h2 className="mb-6 text-xl font-bold text-white">{editingFacility?.id ? 'Edit Facility' : 'Add New Facility'}</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm text-stone-400">Facility Name</label>
                                <input type="text" defaultValue={editingFacility?.name} className="w-full px-4 py-2 text-white border rounded-lg bg-stone-950 border-stone-700" />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm text-stone-400">Address</label>
                                <input type="text" defaultValue={editingFacility?.address} className="w-full px-4 py-2 text-white border rounded-lg bg-stone-950 border-stone-700" />
                            </div>
                            <div className="flex justify-end gap-3 mt-8">
                                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 transition-colors text-stone-400 hover:text-white">Cancel</button>
                                <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 font-bold transition-colors bg-orange-500 rounded-lg hover:bg-orange-400 text-orange-950">Save Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}