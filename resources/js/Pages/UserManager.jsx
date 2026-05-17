import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const MOCK_USERS = [
    { id: "USR-001", name: "Sarah J.", email: "sarah@example.com", role: "User", points: 12450 },
    { id: "USR-002", name: "David M.", email: "david@example.com", role: "User", points: 10200 },
    { id: "USR-003", name: "Admin Setup", email: "admin@ecolocator.com", role: "Admin", points: 99999 },
];

export default function UserManager() {
    const [users, setUsers] = useState(MOCK_USERS);
    const [searchQuery, setSearchQuery] = useState('');

    const promoteUser = (id) => {
        setUsers(users.map(u => u.id === id ? { ...u, role: 'Admin' } : u));
    };

    return (
        <MainLayout>
            <Head title="User Control | Admin" />
            
            <div className="relative min-h-screen pb-24 font-sans bg-stone-950">
                <div className="relative z-10 px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                                Accounts
                            </div>
                            <h1 className="text-3xl font-black text-white">User Management</h1>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search email or ID..." 
                            className="w-full px-4 py-2 text-white border rounded-lg bg-stone-900 border-stone-700 md:w-64 focus:ring-2 focus:ring-orange-500"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="overflow-hidden border shadow-2xl bg-stone-900/60 backdrop-blur-xl border-stone-800 rounded-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-xs font-bold tracking-wider uppercase border-b bg-stone-900/80 border-stone-800 text-stone-500">
                                    <th className="p-4">User ID</th>
                                    <th className="p-4">Name & Email</th>
                                    <th className="p-4">Role</th>
                                    <th className="p-4">Eco Points</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-stone-300">
                                {users.filter(u => u.email.includes(searchQuery.toLowerCase())).map(user => (
                                    <tr key={user.id} className="border-b border-stone-800/50 hover:bg-stone-800/20">
                                        <td className="p-4 font-mono text-stone-500">{user.id}</td>
                                        <td className="p-4">
                                            <span className="block font-bold text-white">{user.name}</span>
                                            <span className="text-xs text-stone-500">{user.email}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${user.role === 'Admin' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-stone-800 text-stone-400'}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="p-4 font-black text-emerald-400">{user.points.toLocaleString()}</td>
                                        <td className="p-4 space-x-3 text-right">
                                            <button className="px-2 py-1 text-xs font-semibold border rounded text-emerald-400 hover:text-emerald-300 border-emerald-500/30 bg-emerald-500/10">Add Points</button>
                                            {user.role !== 'Admin' && (
                                                <button onClick={() => promoteUser(user.id)} className="text-xs font-semibold transition-colors text-stone-400 hover:text-white">Make Admin</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}