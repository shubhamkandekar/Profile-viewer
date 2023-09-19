import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "../osm-provider";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9131/9131502.png",
  iconSize: [40, 40],
});
const ProfilePage = ({ data }) => {
  const { id } = useParams();
  const contact = data.find((contact) => contact.id === id);
  const { latitude, longitude } = contact?.location?.coordinates || {};
  const initialCenter = { lat: latitude || 0, lng: longitude || 0 };

  const [center] = useState(initialCenter);
  const [showMap, setShowMap] = useState(false);

  const ZOOM_LEVEL = 13;
  const mapRef = useRef();
  if (!contact) {
    return <div>Contact not found</div>;
  }

  if (data.length === 0) {
    return <div>Contact list is not available.</div>;
  }

  return (
    <div className="h-full w-full">
      <div className="flex flex-col lg:flex-row justify-center  sm:gap-y-5">
        <div
          id="profile-container"
          className="lg:w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative">
            <img
              alt="user"
              className="w-full h-64 object-cover"
              src={contact.picture.large}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-white text-2xl font-semibold">
                {contact.name.first} {contact.name.last}
              </h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 font-semibold text-sm mb-2">
              Email: {contact.email}
            </p>
            <p className="text-gray-700">Phone: {contact.cell}</p>
            <p className="text-gray-700">City: {contact.location.city}</p>
          </div>
          <div className="p-6">
            <button
              onClick={() => setShowMap((prevState) => !prevState)}
              className="text-white bg-gradient-to-r from-purple-600 via-red-400 to-yellow-500 p-2 rounded-md text-sm font-semibold mt-2"
            >
              {showMap ? "Hide Map" : "Locate on Map"}
            </button>
          </div>
        </div>
        <div className="h-56  w-56 ">
          {showMap && (
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />
              {center && (
                <Marker position={center} icon={customIcon}>
                  <Popup>welcome to:{contact.location.city}</Popup>
                </Marker>
              )}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
