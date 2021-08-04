import React from 'react';
import{Card, CardMedia,CardContent,CardActions,Typography, IconBotton} from '@material-ui/core'
import { AddShoppingCart, CropLandscapeSharp } from '@material-ui/icons';
import { classes } from 'istanbul-lib-coverage';

const product = ({product}) => {
  return (
   <Card className={classes.root}>
       <CardMedia className={classes.media} image='' title={product.name}/>
       <CardContent>
           <div className={classes.CardContent} >
               <Typography var="h5" gutterBottom>
                {product.name}
               </Typography>
               <Typography var="h5" gutterBottom>
                {product.name}
               </Typography>
           </div>
           <Typography variant="h2" color="textSecondary">{prodcut.description}</Typography>
       </CardContent>
       <CardActions disableSpacing className={classes.CardActions}>
        <IconBotton aria-label="Add to Cart"></IconBotton>
        <AddShoppingCart/>
       </CardActions>
   </Card>
  );
}

export default product;
