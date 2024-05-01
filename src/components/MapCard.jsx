import MapIcon from '@mui/icons-material/Map';
import { GoogleMap, Polyline } from 'react-google-map-wrapper';

import { CardBase } from './CardBase';

export function MapCard({ polyline }) {
  // This function decodes a polyline string into an array of coordinates (Created by Github Copilot)
  function decodePolyline(polyline) {
    let index = 0,
      lat = 0,
      lng = 0,
      coordinates = [],
      shift = 0,
      result = 0,
      byte = null,
      latitude_change,
      longitude_change;

    while (index < polyline.length) {
      byte = null;
      shift = 0;
      result = 0;
      do {
        byte = polyline.charCodeAt(index++) - 63;
        result |= (byte & 31) << shift;
        shift += 5;
      } while (byte >= 32);

      latitude_change = result & 1 ? ~(result >> 1) : result >> 1;
      shift = result = 0;

      do {
        byte = polyline.charCodeAt(index++) - 63;
        result |= (byte & 31) << shift;
        shift += 5;
      } while (byte >= 32);

      longitude_change = result & 1 ? ~(result >> 1) : result >> 1;
      lat += latitude_change;
      lng += longitude_change;

      coordinates.push({ lat: lat / 100000, lng: lng / 100000 });
    }

    return coordinates;
  }
  const coordinates = decodePolyline(polyline);

  // Finding initial center of the map
  const latMedian = coordinates.reduce((acc, coord) => acc + coord.lat, 0) / coordinates.length;
  const lngMedian = coordinates.reduce((acc, coord) => acc + coord.lng, 0) / coordinates.length;

  return (
    <CardBase title='Map' img={<MapIcon sx={{ height: '65px', width: '65px', padding: '14.5px' }} />}>
      {/* Use of third-party library to render Google Maps */}
      <GoogleMap className='map' initialZoom={14} initialCenter={{ lat: latMedian, lng: lngMedian }}>
        <Polyline path={decodePolyline(polyline)} strokeColor='#FF0000' strokeOpacity={1} strokeWeight={2} geodesic />
      </GoogleMap>{' '}
    </CardBase>
  );
}
