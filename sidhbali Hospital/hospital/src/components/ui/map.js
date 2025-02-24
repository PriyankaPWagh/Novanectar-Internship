import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../../css/map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const Dehradun = { lng: 78.294754, lat:  30.103368 };
  const zoom = 10;
  maptilersdk.config.apiKey = process.env.REACT_APP_MAP_API;
  console.log("API Key:", process.env.REACT_APP_MAP_API);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [Dehradun.lng, Dehradun.lat],
      zoom: zoom
    });
    new maptilersdk.Marker({color: "#FF0000"})
  .setLngLat([78.294754, 30.103368])
  .setPopup(new maptilersdk.Popup().setHTML(`<h1>Rishikesh,Dehradun<h1> <p>Exact location will be provided after booking</p>`))
  .addTo(map.current);

  
  }, [Dehradun.lng, Dehradun.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

