import ItemCard from '../ItemCard/ItemCard';
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

function Mymoves() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://test.api.boxigo.in/sample-data/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const value = data.Customer_Estimate_Flow;
        setData(value);
      }
      catch (error) {
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <Grid container spacing={2}>
        {data && data.map((item, i) => (
          <Grid item xs={12} key={i}>
            <ItemCard item={item} key={i} />
          </Grid>
        ))}
      </Grid>


    </div>
  );
}

export default Mymoves;
