import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import PinForm from './PinForm';
import fetchAddress from '../utils/fetchAddress';

import customPin from '../assests/custom-pin.png';

const customIcon = new L.Icon({
  iconUrl: customPin,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const MapComponent = ({ addPin }) => {
  const [position, setPosition] = useState(null);
  const [formPosition, setFormPosition] = useState({ top: '20px', left: '20px' });

  const MapClickHandler = () => {
    const map = useMap();

    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });

        // Calculate the screen position of the clicked point
        const point = map.latLngToContainerPoint([lat, lng]);
        setFormPosition({ top: `${point.y}px`, left: `${point.x}px` });
      },
    });

    return null;
  };

  const handleAddPin = async (remark) => {
    if (!position) return;
    const address = await fetchAddress(position.lat, position.lng);
    addPin({ lat: position.lat, lng: position.lng, remark, address });
    setPosition(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position && <Marker position={position} icon={customIcon} />}
        <MapClickHandler />
      </MapContainer>

      {position && (
        <div
          className="remark-form-container"
          style={{
            position: 'absolute',
            top: formPosition.top,
            left: formPosition.left,
            transform: 'translate(-50%, -100%)', 
            zIndex: 1000,
          }}
        >
          <PinForm onSubmit={handleAddPin} />
        </div>
      )}
    </div>
  );
};

export default MapComponent;
