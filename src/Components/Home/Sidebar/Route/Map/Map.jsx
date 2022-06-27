// *** NPM ***
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

// *** OTHER ***
import styles from './Map.module.scss'
import 'leaflet/dist/leaflet.css'
import MapRouting from './MapRouting'


const Map = (props) => {
    const { selectFirstPosition, selectSecondPosition } = props
    const position = (selectFirstPosition.lat ? [selectFirstPosition.lat, selectFirstPosition.lon] : [55.7522, 59.6156])
    return(
        <section className={styles.infoMap}>

            <MapContainer center={position} zoom={1} className={styles.mapLayout} style={{ width: "100%", height: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                />
                {selectFirstPosition.lat && <MapRouting props={props} />}
                
            </MapContainer>
        </section>
    )
}

export default Map