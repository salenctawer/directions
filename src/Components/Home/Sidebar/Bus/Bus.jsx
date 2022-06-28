import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './Bus.module.scss'
import { useNavigate } from "react-router-dom";



const Bus = (props) =>{

    useEffect(()=>{
        props.getItemsThunk()
    })
      
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    let redirect = useNavigate()

    const onArrowClick = (item) => (e) =>{
      props.changeBusUrl(item.id)
      redirect(`/bus-route-${item.id}`)
    }

    return(
        <div className={styles.bus}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Автобусные маршруты города Пермь
          </Typography>
            <List dense={dense}>
              {props.itemsBus?.map( item =>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <ArrowForwardIcon onClick={onArrowClick(item)}/>
                    </IconButton>
                  }
                >
                  {
                    
                  }
                  <ListItemText
                    primary={`${item.id}. ${item.checks[1]} - ${item.checks[15]}`}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
        </Grid>
        <div className={styles.arrow}>
          <span>1</span>
          <ArrowForwardIcon />
        </div>
        </div>
    )
}

export default Bus