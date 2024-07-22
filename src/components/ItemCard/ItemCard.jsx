import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import './ItemCard.scss'
import HomeIcon from '@mui/icons-material/Home';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import RouteIcon from '@mui/icons-material/Route';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InventoryCard from '../InventoryCard/InventoryCard';
import CustomButton from '../CustomButton/CustomButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function ItemCard({ item }) {

    const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Card className='Item-card'>
            {item &&
                <CardContent>
                    <Grid container spacing={4}>

                        <Grid item md={6} className='grid-items'>
                            <div>
                                <h5>From</h5>
                                <p>{item.moving_from}</p>
                            </div>
                            <div>
                                <p><ArrowCircleRightIcon style={{ color: 'red' }} /></p>
                            </div>
                        </Grid>
                        <Grid item md={6} className='grid-items'>
                            <div>
                                <h5>To</h5>
                                <p>{item.moving_to}</p>
                            </div>
                            <div>

                                <h5>Request#</h5>
                                <p>{item.estimate_id}</p>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item md={1} className='grid-blocks'>
                            <HomeIcon className='icon' />
                            <h6>{item.property_size}</h6>
                        </Grid>
                        <Grid item md={1} className='grid-blocks'>
                            <KeyboardCommandKeyIcon className='icon' />
                            <h6>{item.property_size}</h6>

                        </Grid>
                        <Grid item md={1} className='grid-blocks'>
                            <RouteIcon className='icon' />
                            <h6>{item.distance}</h6>

                        </Grid>
                        <Grid item md={2.5} className='grid-blocks'>
                            <WorkHistoryIcon className='icon' />
                            <h6>{item.moving_on}</h6>


                        </Grid>
                        <Grid item md={1.5} className='grid-blocks'>
                            Is flexible
                        </Grid>

                        <Grid item md={2.5} className='grid-blocks'>
                            <Button className='view-button' onClick={handleViewMore}>
                                View More Details
                            </Button>
                        </Grid>
                        <Grid item md={2.5} className='grid-blocks'>
                            <Button className='quote-button' >
                                Quotes Awaiting
                            </Button>
                        </Grid>


                    </Grid>

                    {showMore && (
                        <>
                            <div>
                                <Typography variant="body1">Inventory Details</Typography>


                                <InventoryCard item={item.items.inventory} cardName={"Living Room"} />
                                <InventoryCard item={item.items.inventory} cardName={"Bed Room"} />
                                <InventoryCard item={item.items.inventory} cardName={"Kitchen"} />
                                <InventoryCard item={item.items.inventory} cardName={"Bath Room"} />



                            </div>
                            <div className='house-details-section'>
                                <Grid container gap={4} alignItems={'center'}>
                                    <h4>House Details</h4>
                                    <CustomButton name={"Edit house details"} color='black' />
                                </Grid>


                                <div>
                                    <Typography className='header'> Existing house details</Typography>
                                    <Grid container>
                                        <Grid item md={3}>
                                            <h5>Floor No</h5>
                                            <p>{item.old_floor_no}</p>
                                        </Grid>
                                        <Grid item md={3}>
                                            <h5>Elevator Available</h5>
                                            <p>{item.old_elevator_availability}</p>
                                        </Grid>

                                        <Grid item md={3}><h5>Parking Required</h5>
                                            <p>{item.packing_service}</p>
                                        </Grid>

                                        <Grid item md={3}><h5>Distance fron truck to door</h5>
                                            <p>{item.old_parking_distance}</p>
                                        </Grid>


                                    </Grid>


                                </div>
                                <hr></hr>
                                <div>
                                    <Typography className='header'>New house details</Typography>
                                    <Grid container>
                                    <Grid item md={3}>
                                            <h5>Floor No</h5>
                                            <p>{item.new_floor_no}</p>
                                        </Grid>
                                        <Grid item md={3}>
                                            <h5>Elevator Available</h5>
                                            <p>{item.new_elevator_availability}</p>
                                        </Grid>

                                        <Grid item md={3}><h5>Parking Required</h5>
                                            <p>{item.packing_service}</p>
                                        </Grid>

                                        <Grid item md={3}><h5>Distance fron truck to door</h5>
                                            <p>{item.new_parking_distance}</p>
                                        </Grid>
                                    </Grid>
                                </div>


                            </div>

                        </>
                    )}

                </CardContent>}
        </Card>
    );
}

export default ItemCard;
