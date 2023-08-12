import React, { useEffect, useState } from 'react';
import ProductListItem from '../product-list-item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import './product-list.css';
import { getProducts } from '../../services/product';


const ProductList = ({products}) => {

  return (
    <div className="product-list">
      <Box sx={{ flexGrow: 1 }}>
        <Grid className='product-list-grid' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }}>
          {products.map((product, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductListItem
                key={product.id}
                product={product}
              />   
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [priceValue, setPriceValue] = useState([0, 1000]);

  useEffect(() => {
    async function getData() {
     const products = await getProducts(offset);
     setProducts(products);
    }
    getData();
  }, [offset]);

  const pageChangeHandler = (event, pageNumber) => {
    setOffset(pageNumber - 1)
  }

  function valuetext(priceValue) {
    return `${priceValue}$`;
  }

  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  const filteredProducts = [...products].filter(item => item.price > priceValue[0] && item.price < priceValue[1]);

  return (
      products.length > 0 ? 
      <div>
        <div className='price-range-slider'>
          <Box sx={{ width: 280 }}>
            <Slider
              max={1000}
              getAriaLabel={() => 'Temperature range'}
              value={priceValue}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </div>
        <ProductList products={filteredProducts} />
        <div className='pagination-container'>
          <Stack spacing={2}>
            <Pagination
              onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
              count={5} 
            />
          </Stack>
        </div>
      </div> :
      <div className='loading'>Loading...</div>
  );
}

export default ProductListContainer;
