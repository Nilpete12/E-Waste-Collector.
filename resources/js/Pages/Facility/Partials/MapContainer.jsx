import { useEffect } from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom hook to fly to the selected facility smoothly
function MapController({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) map.flyTo(center, 14, { duration: 1.5 });
    }, [center, map]);
    return null;
}

export default function MapContainer({ facilities, activeFacility, setActiveFacility }) {
    const defaultCenter = [28.6139, 77.2090]; // Default to New Delhi coordinates
    const mapCenter = activeFacility ? [activeFacility.lat, activeFacility.lng] : defaultCenter;

    return (
        <div className="relative z-0 w-full h-full overflow-hidden border shadow-2xl rounded-2xl border-stone-800">
            <LeafletMap center={mapCenter} zoom={12} style={{ height: '100%', width: '100%', minHeight: '500px' }} 
    className="z-0 rounded-xl"
>
                {/* CartoDB Dark Matter Map Tiles for Dark Mode! */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                
                <MapController center={activeFacility ? [activeFacility.lat, activeFacility.lng] : null} />

                {facilities.map((facility) => (
                    <Marker 
                        key={facility.id} 
                        position={[facility.lat, facility.lng]}
                        eventHandlers={{ click: () => setActiveFacility(facility) }}
                    >
                        <Popup className="custom-popup">
                            <div className="p-1">
                                <h4 className="font-bold text-stone-900">{facility.name}</h4>
                                <p className="mt-1 text-xs text-stone-600">{facility.contact}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </LeafletMap>
        </div>
    );
}