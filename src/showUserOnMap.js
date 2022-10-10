import "./App.css";
import "./index.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useContext } from "react";

import { UserContext } from "./storeUsers";


export default function ShowUserOnMap(){ 

const { userDetails,setDetails} = useContext(UserContext)
const position = [ userDetails.location.latitude,userDetails.location.longitude]
       
return(
  <MapContainer  center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        I'm here<br /> 
      </Popup>
    </Marker>
  </MapContainer>
)

}