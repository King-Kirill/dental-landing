import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {useRef, useEffect} from "react";
import './Map.css';

export default function Map({CLINIC}) {
  const ref = useRef(null);

  useEffect(() => {
    const map = L.map(ref.current, { scrollWheelZoom: false }).setView(CLINIC.coords, 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; участники OpenStreetMap",
    }).addTo(map);

    // divIcon — чтобы не зависеть от путей к картинкам маркера в сборщике
    const icon = L.divIcon({ className: "", html: '<div class="pin"></div>', iconSize: [30, 30], iconAnchor: [15, 30] });
    L.marker(CLINIC.coords, { icon })
      .addTo(map)
      .bindPopup(`<b>${CLINIC.name}</b><br>${CLINIC.address}`)
      .openPopup();

    return () => map.remove();
  }, []);

  return <div id="map" ref={ref} role="region" aria-label="Карта: как нас найти" />;
};