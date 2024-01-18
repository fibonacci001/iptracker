import { Box, Paper, Typography } from "@mui/material";
import { MapContainer, Marker,Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { Map } from "leaflet";
import './componentstyle.css'
import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';


const Mapcom = ({lat, lng, ip, isp, city}) => {





    const SetViewOnClick = (ip) => {
        const map = useMap();
        if (ip) {
          const zoom = 5;
        map.setView([lat, lng], zoom);  

        }
        return null;
    }

useEffect(() => {

}, [])



// const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })


    return <MapContainer center={[lat, lng]} zoom={5} scrollWheelZoom={false} className="mapp">
        <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, lng]}>
  <Popup>
        <Box>
         <br />
        
            <Typography variant="body1">current city</Typography> <Typography  variant="body2">{city}</Typography>
            <Typography variant="body1">ip address:</Typography> <Typography  variant="body2">{ip}</Typography>
            <Typography variant="body1">network provider:</Typography> <Typography  variant="body2">{isp}</Typography>
        </Box>
      </Popup>
    icon={<WifiProtectedSetupIcon />}
  </Marker>
  <SetViewOnClick ip={ip} />
    </MapContainer>;
}
 
export default Mapcom;