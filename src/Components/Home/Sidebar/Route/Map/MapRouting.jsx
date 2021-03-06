// *** NPM ***
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

// *** OTHER ***
import L from 'leaflet'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'


L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconAnchor: [13,44]
});

const MapRouting = ({props}) => {
    
    const { selectFirstPosition, selectSecondPosition } = props
    console.log(selectFirstPosition.lat, selectSecondPosition.lat, selectFirstPosition.lon, selectSecondPosition.lon)
    const map = useMap();

    useEffect(() => {
        if (!map) return

        const routingControl = L.Routing.control({
            waypoints: [L.latLng(selectFirstPosition.lat, selectFirstPosition.lon), L.latLng(selectSecondPosition.lat, selectSecondPosition.lon)],
            show: false,
            draggableWaypoints: false,
        }).addTo(map);

        return () => map.removeControl(routingControl);
        }, [map, props]);

        return null;
}


export default MapRouting