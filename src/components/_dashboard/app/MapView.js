import React, { Component } from 'react';
import { useState } from "react";
import { Box, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { TileLayer, MapContainer, Polyline, Popup, GeoJSON, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import geo from './combined_geo_conns.json';
import Legend from './Legend';
import * as helpers from "@turf/helpers";
import { default as bezierSpline } from "@turf/bezier-spline";
import icon from 'leaflet/dist/images/marker-icon.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [15, 25],
    iconAncher: [0, 25]
});

L.Marker.prototype.options.icon = DefaultIcon;

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

function GenMidPoint(point1, point2) {

    var p1 = point1;
    var p2 = point2
    if ((point2[1] - point1[1]) < 0) {
        console.log("hello");
        p1 = point2;
        p2 = point1;
    }

    var offsetX = p2[1] - p1[1],
        offsetY = p2[0] - p1[0];

    var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
        theta = Math.atan2(offsetY, offsetX);

    var thetaOffset = (3.14 / 30);

    var r2 = (r / 2) / (Math.cos(thetaOffset)),
        theta2 = theta + thetaOffset;

    var midpointX = (r2 * Math.cos(theta2)) + p1[1],
        midpointY = (r2 * Math.sin(theta2)) + p1[0];

    var midpointLatLng = [midpointY, midpointX];
    return midpointLatLng;
};


// let xiaomilineList = [];
// geo["Xiaomi"].forEach((item, index) => {

//     xiaomilineList.push(<Polyline key={"key"+index} 
//                           positions={[srcLoc, [item[2], item[3]]]}
//                           pathOptions={XiaomiOptions} >
//                   <Popup>
//                     <div className='poup-text'>{item[1]}</div>
//                   </Popup>
//                 </Polyline>)
// });

// let realmelineList = [];
// geo["Realme"].forEach((item, index) => {

//     realmelineList.push(<Polyline key={"key"+index} 
//                           positions={[srcLoc, [item[2], item[3]]]}
//                           pathOptions={RealmeOptions} >
//                   <Popup>
//                     <div className='poup-text'>{item[1]}</div>
//                   </Popup>
//                 </Polyline>)
// });

// let huaweilineList = [];
// geo["Huawei"].forEach((item, index) => {

//     huaweilineList.push(<Polyline key={"key"+index} 
//                           positions={[srcLoc, [item[2], item[3]]]}
//                           pathOptions={HuaweiOptions} >
//                   <Popup>
//                     <div className='poup-text'>{item[1]}</div>
//                   </Popup>
//                 </Polyline>)
// });


// class MapView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentLocation: { lat: 45.342649, lng: -25 },
//             zoom: 2.5,
//         }
//     }

//     render() {
//         const { currentLocation, zoom } = this.state;

//         return (
//             <Box sx={{ p: 3, pb: 1 }} dir="ltr">
//             <MapContainer center={currentLocation} zoom={2.5} style={ {height: 480} } >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//         />
//         {samsunglineList}
//         {samsungMarkerList}
// {/*        {xiaomilineList}
//         {huaweilineList}
//         {realmelineList}*/}
//         <Legend />
//       </MapContainer>
//       </Box>
//         );
//     }
// }

function NewlineText() {
  return <br/>;
}


function MapView() {
    const currentLocation = { lat: 45.342649, lng: -25 };
    const [samsunghide, setsamsungHide] = useState(true);
    const togglesamsungHide = () => {
        setsamsungHide((oldState) => !oldState);
    };

    const [realmehide, setrealmeHide] = useState(true);
    const togglerealmeHide = () => {
        setrealmeHide((oldState) => !oldState);
    };

    const [huaweihide, sethuaweiHide] = useState(true);
    const togglehuaweiHide = () => {
        sethuaweiHide((oldState) => !oldState);
    };

    const [xiaomihide, setxiaomiHide] = useState(true);
    const togglexiaomiHide = () => {
        setxiaomiHide((oldState) => !oldState);
    };



    let samsunglineList = [];
    let samsungMarkerList = [];
    geo["Samsung"].forEach((item, index) => {

        var endPoint = [item[2], item[3]];
        var midPoint = GenMidPoint(srcLoc, endPoint);

        const line = helpers.lineString(
            [srcLoc, midPoint, endPoint].map(lngLat => [lngLat[1], lngLat[0]])
        );
        const curved = bezierSpline(line);
        console.log(typeof(item[1]));

        var samsungline = samsunghide && (<GeoJSON key={"samsunglinekey"+index} data={curved} style={SamsungOptions} />);
        samsunglineList.push(samsungline);
        var samsungmarker = samsunghide && (<Marker key={"samsungmarkerkey"+index} position={endPoint}>
                            <Popup>
                                <div dangerouslySetInnerHTML={{"__html": item[1]}} />
                            </Popup>
                           </Marker>);
        samsungMarkerList.push(samsungmarker);


    });

    let realmelineList = [];
    let realmeMarkerList = [];
    geo["Realme"].forEach((item, index) => {

        var endPoint = [item[2], item[3]];
        var midPoint = GenMidPoint(srcLoc, endPoint);

        const line = helpers.lineString(
            [srcLoc, midPoint, endPoint].map(lngLat => [lngLat[1], lngLat[0]])
        );
        const curved = bezierSpline(line);

        var realmeline = realmehide && (<GeoJSON key={"realmelinekey"+index} data={curved} style={RealmeOptions} />);
        realmelineList.push(realmeline);
        var realmemarker = realmehide && (<Marker key={"realmemarkerkey"+index} position={endPoint}>
                            <Popup>
                                <div dangerouslySetInnerHTML={{"__html": item[1]}} />
                            </Popup>
                           </Marker>);
        realmeMarkerList.push(realmemarker);


    });

    let xiaomilineList = [];
    let xiaomiMarkerList = [];
    geo["Xiaomi"].forEach((item, index) => {

        var endPoint = [item[2], item[3]];
        var midPoint = GenMidPoint(srcLoc, endPoint);

        const line = helpers.lineString(
            [srcLoc, midPoint, endPoint].map(lngLat => [lngLat[1], lngLat[0]])
        );
        const curved = bezierSpline(line);

        var xiaomiline = xiaomihide && (<GeoJSON key={"xiaomilinekey"+index} data={curved} style={XiaomiOptions} />);
        xiaomilineList.push(xiaomiline);
        var xiaomimarker = xiaomihide && (<Marker key={"xiaomimarkerkey"+index} position={endPoint}>
                            <Popup>
                                <div dangerouslySetInnerHTML={{"__html": item[1]}} />
                            </Popup>
                           </Marker>);
        xiaomiMarkerList.push(xiaomimarker);


    });

    let huaweilineList = [];
    let huaweiMarkerList = [];
    geo["Huawei"].forEach((item, index) => {

        var endPoint = [item[2], item[3]];
        var midPoint = GenMidPoint(srcLoc, endPoint);

        const line = helpers.lineString(
            [srcLoc, midPoint, endPoint].map(lngLat => [lngLat[1], lngLat[0]])
        );
        const curved = bezierSpline(line);

        var huaweiline = huaweihide && (<GeoJSON key={"huaweilinekey"+index} data={curved} style={HuaweiOptions} />);
        huaweilineList.push(huaweiline);
        var huaweimarker = huaweihide && (<Marker key={"huaweimarkerkey"+index} position={endPoint}>
                            <Popup>
                                <div dangerouslySetInnerHTML={{"__html": item[1]}} />
                            </Popup>
                           </Marker>);
        huaweiMarkerList.push(huaweimarker);


    });

    return (

        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="samsung"
          control={<Checkbox onChange={togglesamsungHide} sx={{color:SamsungOptions.color, '&.Mui-checked': {color: SamsungOptions.color}}} defaultChecked />}
          label="samsung"
          labelPlacement="end"
        />
        <FormControlLabel
          value="xiaomi"
          control={<Checkbox onChange={togglexiaomiHide} sx={{color:XiaomiOptions.color, '&.Mui-checked': {color: XiaomiOptions.color}}} defaultChecked />}
          label="xiaomi"
          labelPlacement="end"
        />
        <FormControlLabel
          value="realme"
          control={<Checkbox onChange={togglerealmeHide} sx={{color:RealmeOptions.color, '&.Mui-checked': {color: RealmeOptions.color}}} defaultChecked />}
          label="realme"
          labelPlacement="end"
        />
        <FormControlLabel
          value="huawei"
          control={<Checkbox onChange={togglehuaweiHide} sx={{color:HuaweiOptions.color, '&.Mui-checked': {color: HuaweiOptions.color}}} defaultChecked />}
          label="huawei"
          labelPlacement="end"
        />
      </FormGroup>
        <MapContainer center={currentLocation} zoom={2.5} style={ {height: 480} } >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {samsunglineList}
        {samsungMarkerList}
        {xiaomilineList}
        {xiaomiMarkerList}
        {huaweilineList}
        {huaweiMarkerList}
        {realmelineList}
        {realmeMarkerList}
        {/*<Legend />*/}
      </MapContainer>
      </Box>
    );
}

export default MapView;