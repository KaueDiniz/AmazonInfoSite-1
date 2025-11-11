import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapComponentProps {
  geojsonUrl?: string;
  className?: string;
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'high':
      return '#dc2626';
    case 'medium':
      return '#f59e0b';
    case 'low':
      return '#fbbf24';
    default:
      return '#059669';
  }
};

export default function MapComponent({ geojsonUrl, className = "h-96" }: MapComponentProps) {
  const [geojsonData, setGeojsonData] = useState<any>(null);

  useEffect(() => {
    if (geojsonUrl) {
      fetch(geojsonUrl)
        .then(response => response.json())
        .then(data => setGeojsonData(data))
        .catch(error => console.error('Erro ao carregar GeoJSON:', error));
    }
  }, [geojsonUrl]);

  return (
    <div className={className}>
      <MapContainer
        center={[-3.4653, -62.2159]}
        zoom={5}
        className="w-full h-full rounded-md"
        data-testid="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        {geojsonData && (
          <GeoJSON
            data={geojsonData}
            style={(feature) => {
              const severity = feature?.properties?.severity || 'default';
              return {
                color: getSeverityColor(severity),
                weight: 2,
                opacity: 0.8,
                fillOpacity: 0.5
              };
            }}
            onEachFeature={(feature, layer) => {
              if (feature.properties) {
                const { name, description, area_ha, detection_date, severity } = feature.properties;
                const severityLabel = severity === 'high' ? 'Alta' : severity === 'medium' ? 'Média' : 'Baixa';
                layer.bindPopup(`
                  <div style="font-family: sans-serif;">
                    <b>${name}</b><br/>
                    ${description || ''}<br/>
                    <small>Área: ${area_ha} ha</small><br/>
                    <small>Detecção: ${detection_date}</small><br/>
                    <small><b>Severidade: ${severityLabel}</b></small>
                  </div>
                `);
              }
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
