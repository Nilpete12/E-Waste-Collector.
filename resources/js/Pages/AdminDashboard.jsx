import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import axios from 'axios';

export default function AdminDashboard() {
    const [pickups, setPickups] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch all platform data
        axios.get('/api/admin/dashboard')
            .then(res => {
                setPickups(res.data.pickups);
                setUsers(res.data.users);
            })
            .catch(err => console.error(err));
    }, []);

    const updateStatus = async (id, newStatus) => {
        // Optimistic UI update
        setPickups(pickups.map(item => item.id === id ? { ...item, status: newStatus } : item));
        
        // Sync to database
        try {
            await axios.post('/api/admin/pickup/status', { id, status: newStatus });
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    // 🚀 DYNAMIC ANALYTICS ENGINE
    // Calculates platform-wide stats based on the live database arrays
    let totalPoints = 0;
    let totalCO2 = 0;
    let completedCount = 0;

    pickups.forEach(p => {
        if (p.status === 'Completed') {
            completedCount++;
            if (p.device_type === 'laptop') {
                totalPoints += 500;
                totalCO2 += 25.5;
            } else if (p.device_type === 'mobile') {
                totalPoints += 150;
                totalCO2 += 5.2;
            } else {
                totalPoints += 200;
                totalCO2 += 10.0;
            }
        }
    });

    const successRate = pickups.length > 0 
        ? Math.round((completedCount / pickups.length) * 100) + '%' 
        : '0%';

    // Helper for status badge colors
    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
            case 'Approved': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            case 'Completed': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'Rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
            default: return 'bg-stone-500/10 text-stone-400 border-stone-500/20';
        }
    };

    return (
        <AdminLayout>
            <Head title="Admin Control | EcoLocator" />
            
            <div className="relative min-h-screen pb-24 overflow-hidden font-sans bg-stone-950">
                {/* Admin Accent Glow */}
                <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
                                System Administrator
                            </div>
                            <h1 className="text-3xl font-black tracking-tight text-white">Platform Command Center</h1>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                            <Link href="/admin/users" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors border rounded-lg shadow-sm bg-stone-800 hover:bg-stone-700 border-stone-700">
                                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                Manage Users
                            </Link>
                            <Link href="/admin/facilities" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors border rounded-lg shadow-sm bg-stone-800 hover:bg-stone-700 border-stone-700">
                                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                Manage Facilities
                            </Link>
                            <Link href="/admin/education" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-colors border rounded-lg shadow-sm bg-stone-800 hover:bg-stone-700 border-stone-700">
                                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                Content DB
                            </Link>
                        </div>
                    </div>

                    {/* System Analytics */}
                    <div className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-5">
                        <div className="p-5 border bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                            <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-500">Total Users</p>
                            <p className="text-2xl font-black text-white">{users.length}</p>
                        </div>
                        <div className="p-5 border bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                            <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-500">Pickups Processed</p>
                            <p className="text-2xl font-black text-white">{pickups.length}</p>
                        </div>
                        <div className="bg-stone-900/60 backdrop-blur-xl border border-emerald-900/50 rounded-2xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                            <p className="mb-1 text-xs font-bold tracking-wider uppercase text-emerald-500/70">Success Rate</p>
                            <p className="text-2xl font-black text-emerald-400">{successRate}</p>
                        </div>
                        <div className="p-5 border bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                            <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-500">Points Awarded</p>
                            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{totalPoints.toLocaleString()}</p>
                        </div>
                        <div className="p-5 border bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                            <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-500">Est. CO₂ Saved</p>
                            <p className="text-2xl font-black text-white">{totalCO2.toFixed(1)} <span className="text-sm font-medium text-stone-500">kg</span></p>
                        </div>
                    </div>

                    {/* Pickup Queue */}
                    <div className="p-6 border shadow-2xl bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-3xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                                Live Logistics Queue
                            </h2>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search request ID..." 
                                    className="w-64 py-2 pl-10 pr-4 text-sm text-white transition-all border rounded-lg bg-stone-950 border-stone-700 focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-xs font-bold tracking-wider uppercase border-b border-stone-800 text-stone-500">
                                        <th className="pb-4 pl-4">Request ID</th>
                                        <th className="pb-4">User</th>
                                        <th className="pb-4">Device Target</th>
                                        <th className="pb-4">Scheduled Date</th>
                                        <th className="pb-4">Status</th>
                                        <th className="pb-4 pr-4 text-right">Quick Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {pickups.map((item, idx) => (
                                        <tr key={idx} className="transition-colors border-b border-stone-800/30 hover:bg-stone-800/20">
                                            <td className="py-4 pl-4 font-mono font-bold text-stone-400">{item.request_id}</td>
                                            <td className="py-4 font-semibold text-white">
                                                {item.user_name} <br/>
                                                <span className="text-xs font-normal text-stone-500">{item.user_email}</span>
                                            </td>
                                            <td className="py-4 capitalize text-stone-300">{item.device_type}</td>
                                            <td className="py-4 text-stone-400">{item.scheduled_date}</td>
                                            <td className="py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusStyle(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="py-4 pr-4 space-x-4 text-right">
                                                {item.status === 'Pending' && (
                                                    <>
                                                        <button 
                                                            onClick={() => updateStatus(item.id, 'Approved')}
                                                            className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-md text-xs font-bold transition-colors"
                                                        >
                                                            Approve
                                                        </button>
                                                        <button 
                                                            onClick={() => updateStatus(item.id, 'Rejected')}
                                                            className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 rounded-md text-xs font-bold transition-colors"
                                                        >
                                                            Reject
                                                        </button>
                                                    </>
                                                )}
                                                {item.status === 'Approved' && (
                                                    <button 
                                                        onClick={() => updateStatus(item.id, 'Completed')}
                                                        className="px-3 py-1.5 bg-stone-200 hover:bg-white text-stone-900 rounded-md text-xs font-bold transition-colors"
                                                    >
                                                        Mark Completed
                                                    </button>
                                                )}
                                                {(item.status === 'Completed' || item.status === 'Rejected') ? (
                                                    <span className="text-xs italic font-semibold text-stone-600">Processed</span>
                                                ) : null}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}