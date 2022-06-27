// *** NPM ***
import React, { useEffect, useState } from 'react'
import styles from './Table.module.scss'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';



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
            <div className={styles.titlesContainer}>
                <span>
                    От куда
                </span>
                <span>
                    Куда
                </span>
            </div>

            {
                orders?.map(item=>
                    <div className={styles.row}>
                        <ListItem onClick={clickHandler(item)} className={styles.listItem}>
                            <div>
                                <ListItemText
                                primary={item.pick.name}
                                />
                            </div>
                            <ArrowForwardIcon />
                            <div>
                                <ListItemText
                                primary={item.deliver.name}
                                />
                            </div>
                        </ListItem>  
                    </div>
                )
            }
            <Button variant="contained" style={{marginTop:'600px'}}>Создать маршрут</Button>           
        </section>
    )
}

export default BookmarksList
