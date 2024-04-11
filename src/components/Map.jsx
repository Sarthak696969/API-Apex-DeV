import React from "react";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = (props) => {
  const [datas, setDatas] = React.useState(null); // Declare datas as a state variable
  
  React.useEffect(() => {
    setDatas(props.data); // Update datas with props.data
  }, [props.data]); 
  
  
  return (
    <div className="h-screen w-full overflow-hidden">
      <MapContainer
        className=""
        center={['19.0928172','72.8569577']}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       { datas  &&
  datas['address'].map((d, index) => {
    const temp =[datas['lat'][index], datas['long'][index]]
    console.log('inside map tempest',temp); // Move the console.log statement here
    return (
      <Marker key={index} position={temp}>
        <Popup>
          {datas['address'][index]}
        </Popup>
      </Marker>
    );
  })
}

        
      </MapContainer>
    </div>
  );
};

export default Map;
