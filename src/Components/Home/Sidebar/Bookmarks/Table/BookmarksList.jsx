// *** NPM ***
import React, { useEffect, useState } from 'react'
import styles from './Table.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';




const BookmarksList = (props) => {
    
    console.log(props)

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return(
        <section className={styles.orderTable}>
            <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Закладки
                </Typography>
                <List dense={dense}>
                    {props.orders?.map(item=>
                            <ListItem>
                            <ListItemText
                                primary={item.deliver.name}
                                secondary={secondary ? 'Secondary text' : null}
                            />
                            </ListItem> 
                        )
                    }
                </List>
            </Grid>            
        </section>
    )
}

export default BookmarksList
