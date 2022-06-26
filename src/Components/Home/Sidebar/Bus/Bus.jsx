import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './Bus.module.scss'

const Bus = (props) =>{

    console.log(props)
    useEffect(()=>{
        props.getItemsThunk()
    })
      
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);


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
                      <ArrowForwardIcon />
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
        </div>
    )
}

export default Bus