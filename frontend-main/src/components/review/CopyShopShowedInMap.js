import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

function MyComponent({ coordinates }) {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={10}
    >
      <Marker
        position={coordinates}
      />

    </GoogleMap>
  )
}

export default React.memo(MyComponent)