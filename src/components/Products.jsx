import React from 'react';
import Grid from '@material-ui/core';

const products =[
    {id: 1, name:"Large tote bag", description:"Large custom tote bag." },
    {id: 2, name: "small tote bag", description: "small custom tote bag"}
];



const products = () => {
  return (
    <main>
      <Grid container justify="center" space={4}>
        {products.map((product)=>(
            <Grid item key={product.id} S={small} M={medium} L={large}>
            
            </Grid>
        ) )}
      </Grid>
    </main>
  );
}

export default Products;
