import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import './product-list-item.css';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const ProductListItem = ({ product }) => {
  const { title, description, price, images } = product;

  return (
    <Paper
      className='paper'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        height: 200,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid 
        className='grid-item'
        container spacing={2}
      >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={images[0]} />
          </ButtonBase>
        </Grid>
        <Grid
          className='text-block'
          item xs={12} 
          sm container
        >
          <Grid item xs container direction="column" spacing={2}>
            <Grid
              sx={{
                minWidth: 100
              }}
              item xs
            >
              <Typography 
                sx={{
                  height: 50,
                  overflow: 'auto'
                }}
                gutterBottom variant="subtitle1" 
                component="div"
              >
                {title}
              </Typography>
              <Typography 
                className='product-description'
                sx={{
                  height: 100,
                  overflow: 'auto'
                }}
                variant="body2" gutterBottom
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography 
              sx={{
                paddingLeft: 1
              }}
              variant="subtitle1" 
              component="div"
            >
              {price}$
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductListItem;
