import React, { useEffect, useState } from 'react';
import ProductListItem from '../product-list-item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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

    return (
        products.length > 0 ? 
        <div>
          <ProductList products={products} />
          <div className='pagination-container'>
            <Stack spacing={2}>
              <Pagination
                onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
                count={10} 
              />
            </Stack>
          </div>
        </div> :
        <div className='loading'>Loading...</div>
    );
}

export default ProductListContainer;
