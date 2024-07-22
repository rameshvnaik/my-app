import { useState } from 'react';
import React from 'react'
import { Card, CardContent, Typography, Button, IconButton, Grid, Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InventoryDisplayBar from '../InventoryDisplayBar/InventoryDisplayBar';
import './InventoryCard.scss'

const InventoryCard = ({ item, cardName }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }


    return (
        <>
            <Card className='card-section'>
                
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <Typography>{cardName}</Typography>
                                </Grid>
                                <Grid item>
                                    <p>23</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={toggleShowMore}>
                                {showMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                            </IconButton>
                        </Grid>
                    </Grid>

              


            </Card>

            {showMore &&
                <>

                    
                       <div className="inventory-container">
                       {item?.map((item) => (
                         <div className='inventorybar'>
                           <InventoryDisplayBar inventory={item} />
                         </div>
                       ))}
                     </div>
                    

                </>
            }

        </>
    )
}

export default InventoryCard