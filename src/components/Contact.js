import { useState } from 'react';
import { HiMail, HiPhone } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const [position, setPosition] = useState([2.059, 45.343]); // Mogadishu, Somalia

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-medium mb-4">Contact Me</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-6">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <HiMail className="text-gray-400" />
          <a href="mailto:maashaajr@gmail.com" className="text-gray-600">
            maashaajr@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <HiPhone className="text-gray-400" />
          <a href="tel:+252619792712" className="text-gray-600">
            +252619792712
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-400" />
          <span className="text-gray-600">Warta Nabada, Mogadishu, Somalia</span>
        </div>
      </div>
      <LeafletMap center={position} zoom={13} style={{ height: '400px', marginTop: '20px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Contact;
