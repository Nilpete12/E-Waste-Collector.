import { Link } from '@inertiajs/react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

export default function MainLayout({ children }) {
    const { user, isSignedIn, isLoaded } = useUser();

    // 🚀 Automatically sync user to Laravel DB
    useEffect(() => {
        if (isLoaded && isSignedIn && user) {
            axios.post('/api/user/sync', {
                clerk_id: user.id,
                name: user.fullName || user.firstName || 'Eco User',
                email: user.primaryEmailAddress?.emailAddress,
                role: user.publicMetadata?.role || 'user'
            }).catch(err => console.error("Sync failed", err));
        }
    }, [isLoaded, isSignedIn, user]);
    
    return (
        // The flex-col and min-h-screen ensure the footer is always pushed to the bottom
        <div className="flex flex-col min-h-screen font-sans bg-stone-950 text-stone-300 selection:bg-emerald-500/30 selection:text-emerald-200">
            
            {/* Glassmorphism Sticky Header */}
            <nav className="sticky top-0 z-50 transition-all border-b bg-stone-950/70 backdrop-blur-xl border-white/5">
                <div className="px-0 mx-auto max-w-7xl sm:px-6 lg:px-0">
                    <div className="flex items-center justify-between h-20">
                        
                        {/* Brand Logo */}
                        <div className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-300">
                                <svg className="w-6 h-6 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <Link href="/" className="text-2xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400">
                                EcoLocator
                            </Link>
                        </div>
                        
                        {/* Navigation Links */}
                        <div className="items-center hidden gap-8 text-sm font-medium md:flex text-stone-400">
                            <Link href="/" className="transition-colors hover:text-white">Home</Link>
                            <Link href="/locator" className="transition-colors hover:text-emerald-400">Find a Facility</Link>
                            <Link href="/education" className="transition-colors hover:text-emerald-400">Rewards Calculator</Link>
                            
                            {/* Auth Section */}
                            <div className="flex items-center pl-8 border-l border-stone-800">
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button className="relative group overflow-hidden rounded-lg bg-white/10 px-6 py-2.5 text-white font-semibold transition-all hover:bg-white/20 active:scale-95 border border-white/5">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <div className="flex items-center gap-5 px-4 py-2 border rounded-full bg-stone-900/50 border-stone-800">
                                        <Link href="/dashboard" className="text-white transition-colors hover:text-emerald-400">Dashboard</Link>
                                        <UserButton 
                                            afterSignOutUrl="/" 
                                            appearance={{
                                                elements: { avatarBox: "w-8 h-8 border-2 border-emerald-500/50" }
                                            }}
                                        />
                                    </div>
                                </SignedIn>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Page Content (flex-grow fills the available space) */}
            <main className="flex flex-col flex-grow">{children}</main>

            {/* Mega Footer (Takes up significant screen real estate) */}
            <footer className="relative pt-24 pb-12 mt-auto overflow-hidden border-t bg-stone-950 border-stone-800/50">
                {/* Footer Ambient Glow */}
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                        
                        {/* Brand Column */}
                        <div className="pr-4 lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500">
                                    <span className="text-lg font-black text-stone-950">E</span>
                                </div>
                                <span className="text-xl font-bold text-white">EcoLocator</span>
                            </div>
                            <p className="max-w-sm mb-6 leading-relaxed text-stone-400">
                                Transforming obsolete electronics into tangible ecological impact. We are building the infrastructure to responsibly recycle the world's e-waste.
                            </p>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">Platform</h4>
                            <ul className="space-y-4 text-sm text-stone-400">
                                <li><Link href="/locator" className="transition-colors hover:text-emerald-400">Facility Map</Link></li>
                                <li><Link href="/education" className="transition-colors hover:text-emerald-400">Device Calculator</Link></li>
                                <li><Link href="/dashboard" className="transition-colors hover:text-emerald-400">User Dashboard</Link></li>
                            </ul>
                        </div>

                        {/* Legal Column */}
                        <div>
                            <h4 className="mb-6 text-sm font-bold tracking-wider text-white uppercase">Legal & Help</h4>
                            <ul className="space-y-4 text-sm text-stone-400">
                                <li><Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="transition-colors hover:text-white">Terms of Service</Link></li>
                                <li><Link href="/contact" className="transition-colors hover:text-white">Contact Support</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm border-t border-stone-800/50 md:flex-row text-stone-500">
                        <p>&copy; {new Date().getFullYear()} EcoLocator Technologies. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Platform Status: Operational
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}