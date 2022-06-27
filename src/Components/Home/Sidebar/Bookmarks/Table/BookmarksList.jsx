// *** NPM ***
import React, { useEffect, useState } from 'react'
import styles from './Table.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Table, Select } from 'antd';




const BookmarksList = (props) => {
    
    const { orders, setCurrentActiveLocation } = props

    
    const clickHandler = (item) => (e) =>{
        setCurrentActiveLocation({
            pick_position: item.pick.position,
            deliver_position: item.deliver.position,            
        })
    }


    return(
        <section className={styles.orderTable}>
            {
                orders?.map(item=>
                    <div className={styles.row}>
                        <ListItem onClick={clickHandler(item)}>
                            <ListItemText
                            primary={item.pick.name}
                            />
                            <ListItemText
                            primary={item.deliver.name}
                            />
                        </ListItem>  
                    </div>
                )
            }           
        </section>
    )
}

export default BookmarksList
