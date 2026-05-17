import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function AdminLayout({ children }) {
    const { isLoaded, isSignedIn, user } = useUser();

    useEffect(() => {
        // Only run the check once Clerk has finished loading the user data
        if (isLoaded) {
            if (!isSignedIn) {
                // Not logged in at all? Kick to home page.
                router.visit('/'); 
            } else if (user?.publicMetadata?.role !== 'admin') {
                // Logged in, but NOT an admin? Kick to regular user dashboard.
                router.visit('/dashboard'); 
            }
        }
    }, [isLoaded, isSignedIn, user]);

    // Show a sleek "Verifying" screen while Clerk checks the database
    if (!isLoaded || !isSignedIn || user?.publicMetadata?.role !== 'admin') {
        return (
            <MainLayout>
                <div className="min-h-[calc(100vh-80px)] bg-stone-950 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-12 h-12 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
                        <p className="text-sm font-bold tracking-widest text-orange-500 uppercase animate-pulse">
                            Verifying Security Clearance...
                        </p>
                    </div>
                </div>
            </MainLayout>
        );
    }

    // If they pass the checks, render the Admin page!
    return <MainLayout>{children}</MainLayout>;
}