import { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useUser } from '@clerk/clerk-react';
import MainLayout from '@/Layouts/MainLayout';
import axios from 'axios';

// A visual array to make the Carbon Savings chart look great for the presentation
const WEEKLY_IMPACT = [
    { day: 'MON', height: 'h-4', active: false },
    { day: 'TUE', height: 'h-8', active: false },
    { day: 'WED', height: 'h-3', active: false },
    { day: 'THU', height: 'h-12', active: false },
    { day: 'FRI', height: 'h-6', active: false },
    { day: 'SAT', height: 'h-16', active: true }, // Highlighted for visual flair
    { day: 'SUN', height: 'h-10', active: false },
];

export default function Dashboard() {
    const { user, isLoaded } = useUser();
    
    // Start with a clean, zeroed-out state
    const [data, setData] = useState({
        stats: { points: 0, co2: 0, metals: 0, devices: 0 },
        myPickups: [],
        leaderboard: []
    });

    // Fetch the live database stats when Clerk finishes loading
    useEffect(() => {
        if (isLoaded && user) {
            const email = user.primaryEmailAddress?.emailAddress;
            axios.get(`/api/user/dashboard?email=${email}`)
                .then(res => setData(res.data))
                .catch(err => console.error("Failed to fetch dashboard data:", err));
        }
    }, [isLoaded, user]);

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

    if (!isLoaded) {
        return (
            <MainLayout>
                <div className="min-h-[calc(100vh-80px)] bg-stone-950 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 rounded-full border-emerald-500 border-t-transparent animate-spin"></div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title="My Dashboard | EcoLocator" />
            
            <div className="min-h-screen pb-24 font-sans bg-stone-950 text-stone-200">
                <div className="px-4 pt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    {/* Header Section */}
                    <div className="flex flex-col items-start justify-between gap-6 mb-10 md:flex-row md:items-end">
                        <div>
                            <h1 className="mb-2 text-4xl font-black tracking-tight text-white">
                                Welcome back, {user?.firstName || 'Eco Warrior'}!
                            </h1>
                            <p className="text-lg text-stone-400">
                                You have earned a total of <span className="font-bold text-emerald-400">{data.stats.points} Eco Points</span>.
                            </p>
                        </div>
                        <Link 
                            href="/pickup/create" 
                            className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                        >
                            + Schedule Pickup
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        
                        {/* Main Left Column */}
                        <div className="space-y-8 lg:col-span-2">
                            
                            {/* Carbon Savings Activity Chart */}
                            <div className="p-8 border bg-stone-900/50 border-stone-800 rounded-3xl backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-12">
                                    <h2 className="text-xl font-bold text-white">Carbon Savings Activity</h2>
                                    <span className="text-sm font-semibold text-stone-500">Last 7 Days</span>
                                </div>
                                
                                {/* The Bar Chart (Using the safe WEEKLY_IMPACT visual array) */}
                                <div className="flex items-end justify-between h-32 gap-2 px-2 mb-6">
                                    {WEEKLY_IMPACT.map((day, idx) => (
                                        <div key={idx} className="flex flex-col items-center flex-1 gap-3">
                                            <div className={`w-full max-w-[40px] rounded-t-lg transition-all ${day.active ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-stone-800'} ${day.height}`}></div>
                                            <span className="text-[10px] font-bold text-stone-500">{day.day}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Dynamic Stats Row */}
                                <div className="grid grid-cols-3 gap-4 pt-6 mt-8 border-t border-stone-800">
                                    <div>
                                        <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-400">Devices Recycled</p>
                                        <p className="text-2xl font-black text-white">{data.stats.devices}</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-400">CO₂ Offset (kg)</p>
                                        <p className="text-2xl font-black text-white">{data.stats.co2}</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-xs font-bold tracking-wider uppercase text-stone-400">Metals Yield</p>
                                        <p className="text-2xl font-black text-white">{data.stats.metals} <span className="text-sm font-medium text-stone-500">kg</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Active Pickups Table */}
                            <div className="p-8 border bg-stone-900/50 border-stone-800 rounded-3xl backdrop-blur-sm">
                                <h2 className="mb-6 text-xl font-bold text-white">Your Pickup History</h2>
                                
                                {data.myPickups.length === 0 ? (
                                    <div className="py-10 text-center border border-dashed border-stone-800 rounded-xl">
                                        <p className="mb-4 text-stone-500">You haven't scheduled any pickups yet.</p>
                                        <Link href="/pickup/create" className="font-bold text-emerald-400 hover:text-emerald-300">Schedule your first pickup &rarr;</Link>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="text-xs font-bold tracking-wider uppercase border-b text-stone-500 border-stone-800">
                                                    <th className="pb-4">Device</th>
                                                    <th className="pb-4">Date</th>
                                                    <th className="pb-4">Time Slot</th>
                                                    <th className="pb-4 text-right">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm text-stone-300">
                                                {data.myPickups.map((pickup, idx) => (
                                                    <tr key={idx} className="border-b border-stone-800/50 last:border-0">
                                                        <td className="py-4 font-semibold text-white capitalize">{pickup.device_type}</td>
                                                        <td className="py-4">{pickup.scheduled_date}</td>
                                                        <td className="py-4 capitalize">{pickup.time_slot}</td>
                                                        <td className="py-4 text-right">
                                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusStyle(pickup.status)}`}>
                                                                {pickup.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Sidebar: Dynamic Leaderboard */}
                        <div className="p-8 border bg-stone-900/50 border-stone-800 rounded-3xl backdrop-blur-sm h-fit">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-2xl">🏆</span>
                                <h2 className="text-xl font-bold text-white">Top Recyclers</h2>
                            </div>
                            
                            <div className="space-y-4">
                                {data.leaderboard.map((player, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                                            player.isCurrentUser 
                                            ? 'bg-emerald-900/20 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                                            : 'bg-stone-950/50 border-stone-800'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm ${
                                                idx === 0 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' : 
                                                idx === 1 ? 'bg-stone-300/20 text-stone-300 border border-stone-300/30' : 
                                                idx === 2 ? 'bg-orange-700/20 text-orange-500 border border-orange-700/30' : 
                                                'bg-stone-800 text-stone-500'
                                            }`}>
                                                {player.rank}
                                            </div>
                                            <div>
                                                <p className={`font-bold text-sm ${player.isCurrentUser ? 'text-emerald-400' : 'text-white'}`}>
                                                    {player.name}
                                                </p>
                                                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                                                    {player.badge}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-black text-white">{player.points.toLocaleString()}</p>
                                            <p className="text-[10px] text-emerald-500 font-bold">PTS</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}