import React from 'react'
import {GoogleMap, LoadScript} from '@react-google-maps/api'


const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

function google() {
  return (
    <LoadScript
    googleMapsApiKey='AIzaSyDP7RFCOCUri8YMS5WfY1mjJ4tNBjz0kLY'
    >
        <GoogleMap 
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
        <></>
    </GoogleMap>

    </LoadScript>
  )
}

export default React.memo(google)
