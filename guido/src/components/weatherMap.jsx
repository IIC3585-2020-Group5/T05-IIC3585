import React from "react"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {useSelector} from "react-redux"
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const WeatherMap = () => {

  const { lat, lon, zoom, cards } = useSelector((state) => state.weatherCards)
  const position = [lat, lon]
  const currentCity = cards[cards.length - 1]

  return (
    <Map center={position} zoom={zoom} style={{height : '400px'}}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentCity? 
      <Marker position={position}>
        <Popup>
          {currentCity.name} <br /> Latitude: {lat} <br /> Longitude: {lon}.
        </Popup>
      </Marker> : null 
      }
    </Map>
  )
}


export default WeatherMap;


