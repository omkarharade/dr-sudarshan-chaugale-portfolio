'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix Leaflet icons in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

export default function MapSection() {
  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <div className="w-full h-96 rounded-md overflow-hidden shadow">
      <MapContainer
        center={[15.8655504,74.5076743]} // Belagavi coordinates
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[15.8655504,74.5076743]}>
          <Popup>Clinic Location: Belagavi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
