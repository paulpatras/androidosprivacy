import React, { Component } from 'react';
import { TileLayer, MapContainer, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geo from './combined_geo_conns.json';
import Legend from './Legend';

const srcLoc = [53.342649, -6.265299];

const XiaomiOptions = { 
  color: '#B1E693',
  weight: 3
}
const SamsungOptions = { 
  color: '#6D8299',
  weight: 3
}
const RealmeOptions = { 
  color: '#FE8F8F',
  weight: 3
}
const HuaweiOptions = { 
  color: '#D4B499',
  weight: 3
}


let samsunglineList = [];
geo["Samsung"].forEach((item, index)=>{
  
  samsunglineList.push(<Polyline key={"key"+index} 
                          positions={[srcLoc, [item[2], item[3]]]}
                          pathOptions={SamsungOptions} >
                  <Popup>
                    <div className='poup-text'>{item[1]}</div>
                  </Popup>
                </Polyline>)
});


let xiaomilineList = [];
geo["Xiaomi"].forEach((item, index)=>{
  
  xiaomilineList.push(<Polyline key={"key"+index} 
                          positions={[srcLoc, [item[2], item[3]]]}
                          pathOptions={XiaomiOptions} >
                  <Popup>
                    <div className='poup-text'>{item[1]}</div>
                  </Popup>
                </Polyline>)
});

let realmelineList = [];
geo["Realme"].forEach((item, index)=>{
  
  realmelineList.push(<Polyline key={"key"+index} 
                          positions={[srcLoc, [item[2], item[3]]]}
                          pathOptions={RealmeOptions} >
                  <Popup>
                    <div className='poup-text'>{item[1]}</div>
                  </Popup>
                </Polyline>)
});

let huaweilineList = [];
geo["Huawei"].forEach((item, index)=>{
  
  huaweilineList.push(<Polyline key={"key"+index} 
                          positions={[srcLoc, [item[2], item[3]]]}
                          pathOptions={HuaweiOptions} >
                  <Popup>
                    <div className='poup-text'>{item[1]}</div>
                  </Popup>
                </Polyline>)
});


class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 45.342649, lng: -25 },
      zoom: 2.5,
    }
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <MapContainer center={currentLocation} zoom={2.5} style={ {height: 480} } >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {samsunglineList}
        {xiaomilineList}
        {huaweilineList}
        {realmelineList}
        <Legend />
      </MapContainer>
    );
  }
}

export default MapView;
