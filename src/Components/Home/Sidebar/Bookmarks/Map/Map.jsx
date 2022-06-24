// *** NPM ***
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

// *** OTHER ***
import styles from './Map.module.scss'
import 'leaflet/dist/leaflet.css'
import MapRouting from './MapRouting'


const Map = (props) => {
    const { pick_position } = props.currentLocations 
    const position = ( pick_position.x ? [pick_position.x, pick_position.y] : [55.7522, 59.6156])
    return(
        <section className={styles.infoMap}>

            <MapContainer center={position} zoom={3} className={styles.mapLayout} style={{ width: "100%", height: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                {pick_position.x && <MapRouting props={props} />}
                
            </MapContainer>
        </section>
    )
}

export default Map