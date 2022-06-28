import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import styles from './Inputs.module.scss'

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function Inputs(props) {
  const { selectFirstPosition, setSelectFirstPosition , selectSecondPosition, setSelectSecondPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [searchSecondText, setSearchSecondText] = useState("");
  const [listSecondPlace, setListSecondPlace] = useState([]);

  const [transport, setTransport] = useState(false)
  const [transportSecond, setTransportSecond] = useState(false)

  
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse", width:'600px' }}>
      {transportSecond? <div className={styles.route}>
        <div className={styles.route__time}>
          Время: 19 минут
        </div>
        <div className={styles.route__paragraph}>
          Красные казармы, 68
        </div>
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>
          Улица Соловьева
        </div >
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>Автобусы 121, 13, 19, 51, 59, 74</div>
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>
          Комсомольская площадь
        </div>
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>
          Комсомольский проспект, 72
        </div>
      </div> : <div></div>}
      
      {transport? <div className={styles.route}>
        <div className={styles.route__time}>
          Время: 12 минут
        </div>
        <div className={styles.route__paragraph}>
          Комсомольская проспект, 72
        </div >
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>
        Комсомольская площадь
        </div>
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>Автобусы 45, 50, 63</div>
        <ArrowDownwardIcon />
        <div className={styles.route__paragraph}>
          Куйбышева, 112 
        </div>
      </div> : <div></div>
      }
      <div >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          {listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    console.log(item)
                    setSelectFirstPosition(item);
                    setTransportSecond(false)
                    setTransport(true)
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
                      alt="Placeholder"
                      style={{ width: 33, height: 33 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <OutlinedInput
            style={{ width: "100%" }}
            value={searchSecondText}
            onChange={(event) => {
              setSearchSecondText(event.target.value);
            }}
          />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", padding: "0px 20px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Search
              const params = {
                q: searchSecondText,
                format: "json",
                addressdetails: 1,
                polygon_geojson: 0,
              };
              const queryString = new URLSearchParams(params).toString();
              const requestOptions = {
                method: "GET",
                redirect: "follow",
              };
              fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                .then((response) => response.text())
                .then((result) => {
                  console.log(JSON.parse(result));
                  setListSecondPlace(JSON.parse(result));
                })
                .catch((err) => console.log("err: ", err));
            }}
          >
            Search
          </Button>
        </div>
      </div>
      <div>
        <List component="nav" aria-label="main mailbox folders">
          {listSecondPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    console.log(item)
                    setSelectSecondPosition(item);
                    setTransportSecond(true)
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
                      alt="Placeholder"
                      style={{ width: 33, height: 33 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
      </div>
    </div>
  );
}
