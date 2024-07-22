import { useState } from 'react';
import React from 'react'
import { Card, Typography, IconButton, Grid } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InventoryDisplayBar from '../InventoryDisplayBar/InventoryDisplayBar';
import './InventoryCard.scss'

const InventoryCard = ({ item, cardName }) => {


    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    const calculateQuantity = () => {
        let totalQuantity = 0;
        item.forEach(category => {
            category.category.forEach(subCategory => {
                subCategory.items.forEach(item => {
                    if (item.qty > 0) {
                        totalQuantity += item.qty;
                    }
                });
            });
        });
        return totalQuantity;
    }


    return (
        <>
            <Card className='card-section'>

                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography className='card-header'>{cardName}</Typography>
                            </Grid>
                            <Grid item>
                                <p className='total-assets'>{calculateQuantity()}</p>
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