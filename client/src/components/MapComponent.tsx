import { MapContainer, TileLayer, GeoJSON, Rectangle, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { AlertTriangle } from 'lucide-react';
import { renderToStaticMarkup } from 'react-dom/server';

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

interface AlertArea {
  bounds: L.LatLngBoundsExpression;
  center: [number, number];
  name: string;
  description: string;
  area_ha: number;
  detection_date: string;
  region: string;
}

const createAlertIcon = () => {
  const iconMarkup = renderToStaticMarkup(
    <div style={{
      width: '32px',
      height: '32px',
      backgroundColor: '#dc2626',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '3px solid white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
    }}>
      <AlertTriangle color="white" size={20} strokeWidth={3} />
    </div>
  );

  return L.divIcon({
    html: iconMarkup,
    className: 'custom-alert-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

export default function MapComponent({ geojsonUrl, className = "h-96" }: MapComponentProps) {
  const [geojsonData, setGeojsonData] = useState<any>(null);
  const [alertAreas, setAlertAreas] = useState<AlertArea[]>([]);

  useEffect(() => {
    if (geojsonUrl) {
      fetch(geojsonUrl)
        .then(response => response.json())
        .then(data => {
          setGeojsonData(data);
          
          const areas: AlertArea[] = data.features
            .filter((feature: any) => feature.properties.showAlert)
            .map((feature: any) => {
              const coords = feature.geometry.coordinates[0];
              const lats = coords.map((c: number[]) => c[1]);
              const lngs = coords.map((c: number[]) => c[0]);
              
              const minLat = Math.min(...lats);
              const maxLat = Math.max(...lats);
              const minLng = Math.min(...lngs);
              const maxLng = Math.max(...lngs);
              
              const padding = 0.15;
              
              return {
                bounds: [
                  [minLat - padding, minLng - padding],
                  [maxLat + padding, maxLng + padding]
                ] as L.LatLngBoundsExpression,
                center: [(minLat + maxLat) / 2, (minLng + maxLng) / 2] as [number, number],
                name: feature.properties.name,
                description: feature.properties.description,
                area_ha: feature.properties.area_ha,
                detection_date: feature.properties.detection_date,
                region: feature.properties.region
              };
            });
          
          setAlertAreas(areas);
        })
        .catch(error => console.error('Erro ao carregar GeoJSON:', error));
    }
  }, [geojsonUrl]);

  const maxBounds = L.latLngBounds(
    L.latLng(-33.75, -73.99),
    L.latLng(5.27, -34.79)
  );

  return (
    <div className={className}>
      <MapContainer
        center={[-14.2350, -51.9253]}
        zoom={4.5}
        minZoom={4}
        maxZoom={12}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        className="w-full h-full rounded-md"
        data-testid="map-container"
      >
        <TileLayer
          attribution='Imagery &copy; <a href="https://www.esri.com/">Esri</a>'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          maxZoom={19}
          noWrap={true}
        />
        {geojsonData && (
          <GeoJSON
            data={geojsonData}
            style={() => ({
              color: '#dc2626',
              weight: 2,
              opacity: 0.9,
              fillColor: '#dc2626',
              fillOpacity: 0.4
            })}
            onEachFeature={(feature, layer) => {
              if (feature.properties) {
                const { name, description, area_ha, detection_date, region } = feature.properties;
                layer.bindPopup(`
                  <div style="font-family: sans-serif;">
                    <b>${name}</b><br/>
                    ${description}<br/>
                    <small>Região: ${region}</small><br/>
                    <small>Área: ${area_ha} ha</small><br/>
                    <small>Detecção: ${detection_date}</small>
                  </div>
                `);
              }
            }}
          />
        )}
        
        {alertAreas.map((area, index) => (
          <div key={`alert-${index}`}>
            <Rectangle
              bounds={area.bounds}
              pathOptions={{
                color: '#dc2626',
                weight: 3,
                opacity: 1,
                fillOpacity: 0,
                dashArray: '10, 10'
              }}
            />
            <Marker 
              position={area.center}
              icon={createAlertIcon()}
            >
              <Popup>
                <div style={{ fontFamily: 'sans-serif' }}>
                  <b>{area.name}</b><br/>
                  <small style={{ color: '#dc2626', fontWeight: 'bold' }}>⚠️ ALERTA ATIVO</small><br/>
                  {area.description}<br/>
                  <small>Região: {area.region}</small><br/>
                  <small>Área: {area.area_ha} ha</small><br/>
                  <small>Detecção: {area.detection_date}</small>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
