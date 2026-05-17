// resources/js/app.jsx
import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ClerkProvider } from '@clerk/clerk-react';

const appName = import.meta.env.VITE_APP_NAME || 'E-Waste Locator';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <App {...props} />
            </ClerkProvider>
        );
    },
    progress: { color: '#10b981' }, // Emerald green loading bar
});