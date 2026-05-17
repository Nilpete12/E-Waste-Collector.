import { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import FacilityCard from './Partials/FacilityCard';
import MapContainer from './Partials/MapContainer';

// Temporary Mock Data
const MOCK_FACILITIES = [
    { id: 1, name: "GreenTech E-Waste Hub", address: "Sector 62, Noida, UP 201309", lat: 28.6258, lng: 77.3708, rating: 4.8, reviews: 124, isOpen: true, contact: "+91 98765 43210", acceptedDevices: ["Mobiles", "Laptops", "Batteries"] },
    { id: 2, name: "EcoReclaim Delhi", address: "Okhla Industrial Area, Phase 1, New Delhi", lat: 28.5273, lng: 77.2796, rating: 4.5, reviews: 89, isOpen: false, contact: "+91 91234 56789", acceptedDevices: ["TVs", "Large Appliances"] },
    { id: 3, name: "SafeScrap Solutions", address: "Cyber City, DLF Phase 2, Gurugram", lat: 28.4906, lng: 77.0892, rating: 4.9, reviews: 210, isOpen: true, contact: "+91 99887 76655", acceptedDevices: ["Mobiles", "Laptops", "Printers"] },
];

export default function Locator() {
    const [facilities, setFacilities] = useState(MOCK_FACILITIES);
    const [activeFacility, setActiveFacility] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <MainLayout>
            <Head title="Facility Locator | EcoLocator" />
            
            <div className="flex-grow flex flex-col md:flex-row h-[calc(100vh-80px)] bg-stone-950">
                
                {/* Left Sidebar: Search & Filters */}
                <div className="w-full md:w-1/3 lg:w-[400px] flex flex-col h-full border-r border-stone-800 bg-stone-950/80 backdrop-blur-xl z-10">
                    
                    <div className="p-6 border-b border-stone-800">
                        <h1 className="mb-6 text-2xl font-black text-white">Locate a Facility</h1>
                        
                        {/* Search Bar */}
                        <div className="relative mb-4">
                            <input 
                                type="text" 
                                placeholder="Search by city or PIN code..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-3 pr-4 text-white transition-all border bg-stone-900 border-stone-700 rounded-xl pl-11 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-stone-500"
                            />
                            <svg className="w-5 h-5 text-stone-500 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>

                        {/* Quick Filters */}
                        <div className="flex gap-3">
                            <button className="flex-1 py-2 text-sm font-semibold text-white transition-colors border rounded-lg bg-stone-800 hover:bg-stone-700 border-stone-700">
                                Open Now
                            </button>
                            <button className="flex items-center justify-center flex-1 gap-2 py-2 text-sm font-semibold transition-colors border rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Near Me
                            </button>
                        </div>
                    </div>

                    {/* Facility List (Scrollable) */}
                    <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar">
                        <p className="mb-2 text-sm font-semibold tracking-wider uppercase text-stone-500">
                            {facilities.length} Facilities Found
                        </p>
                        {facilities.map((facility) => (
                            <FacilityCard 
                                key={facility.id} 
                                facility={facility} 
                                isActive={activeFacility?.id === facility.id}
                                onClick={() => setActiveFacility(facility)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side: Map */}
                <div className="relative flex-1 p-4 bg-stone-900">
                    <MapContainer 
                        facilities={facilities} 
                        activeFacility={activeFacility} 
                        setActiveFacility={setActiveFacility} 
                    />
                </div>

            </div>
        </MainLayout>
    );
}