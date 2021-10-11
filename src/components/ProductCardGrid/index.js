import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "../../styles";
import ProductCardSummary from "../ProductCardSummary";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/product.action";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

const ProductCardGrid = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      alignItems="center"
    >
      {products?.length > 0 &&
        products.map((product, index) => {
          if (props.searchString && props.searchString.length > 0) {
            if (
              product.productName
                .toLowerCase()
                .includes(props.searchString.toLowerCase())
            ) {
              return <ProductCardSummary product={product} key={product.id} />;
            }
          } else
            return <ProductCardSummary product={product} key={product.id} />;
        })}
      {products?.length == 0 && (
        <Box className={classes.parentFlexCenter} sx={{ margin: "50px"}}>
          <ProductionQuantityLimitsIcon
            fontSize="large"
            color="text.secondary"
            sx={{ marginRight: "5px" }}
          />
          <Typography variant="h4" color="text.secondary">
            No products found
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default ProductCardGrid;
