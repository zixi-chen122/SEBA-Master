import React from 'react'
import {
  GoogleMap,
  // Marker,
  InfoWindow,
  // ,useGoogleMap
} from '@react-google-maps/api';
import "./PriceTag.css"
import CheckOutButton from './CheckOutButton';

const containerStyle = {
  width: '100%',
  height: '100vh'
};
// 48.135124, 11.581981
const center = {
  lat: 48.135124,
  lng: 11.581981
};



function MyComponent(props) {
  const { resultList, hoveredIndex } = props
  // const {resultList} = props
  const mapRef = React.useRef(null)
  const [map, saveMap] = React.useState(null)
  // const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

  if (window.google) {
    console.log(window.google.maps)
    const size = new window.google.maps.Size(10, 10)
    console.log(size)
  }

  React.useEffect(() => {
    console.log(mapRef)
  })
  const onBoundsChanged = () => {
    // e.preventDefault();
    if (map) {
      // console.log(map.getBounds())
      props.onBoundsChanged(map.getBounds())
    }
  }
  const test = () => {
    console.log("oooooo>>>")
    setSelectedItem(null);
  }
  return (
    <GoogleMap
      ref={mapRef}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={(map) => { saveMap(map) }}
      onBoundsChanged={onBoundsChanged}
      options={{ gestureHandling: 'greedy' }}
      onClick={test}
    >
      <div className="PriceTag">
        {resultList.map((item, index) =>
          <InfoWindow 
            key={index}
            position={{ lat: item.coordinates.lat, lng: item.coordinates.lng }}
            onClick={() => {
              // console.log(selectedItem)
              setSelectedItem(item)
            }}
          >
            <div
              style={{padding:'5px', fontSize: 16, backgroundColor: (hoveredIndex === index) ? 'yellow' : 'white' }}
              onClick={() => {
                // console.log(selectedItem)
                setSelectedItem(item)
              }}
            >
              {item.price + '€'}
            </div>

          </InfoWindow>
        )}
      </div>
      {selectedItem && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedItem(null);
          }}
          position={{
            lat: selectedItem.coordinates.lat,
            lng: selectedItem.coordinates.lng
          }}
          options={{
            pixelOffset: new window.google.maps.Size(0, -30)
          }}
          zIndex={1000}
        >
          {/* <div>Shop</div> */}
          <div>
            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
              CopyShop{selectedItem.id}
            </div>
            <CheckOutButton 
              price={selectedItem.price}
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>

  )
}

export default React.memo(MyComponent)
