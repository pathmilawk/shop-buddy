import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import LinkMUI from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import useStyles from "../../styles";
import ItemCountButton from "../ItemCountButton";
import { ADD_TO_CART } from "../../redux/constants/action.type";

const ProductCardFull = (props) => {
  const classes = useStyles();
  const { id } = useParams();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(products.find((prd) => prd.id === +id));
  }, [products]);

  const [counter, setCounter] = useState(0);

  const updateCount = (count) => {
    setCounter(count);
  };

  const addToCart = () => {
    if (counter > 0) {
      const payload = product;
      payload.quantity = counter;
      dispatch({ type: ADD_TO_CART, payload });
      setCounter(0);
    }
  };

  return (
    <Container sx={{paddingTop: "10px"}}>
      <Breadcrumbs aria-label="breadcrumb" sx={{paddingLeft: "10px"}}>
        <LinkMUI
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Products
        </LinkMUI>
        <Typography
          sx={{ display: "flex", alignItems: "center" }}
          color="text.primary"
        >
          {product?.productName}
        </Typography>
      </Breadcrumbs>

      <Card variant="outlined" sx={{ margin: "10px" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 30px 1fr" }}>
          <CardMedia
            className={classes.productCardFullImage}
            component="img"
            height="480"
            image={product?.imageUrl}
            alt=""
          />
          <div></div>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="text.secondary"
              >
                {product?.productName}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
              {product?.currency + ' ' + product?.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product?.productDescription}
              </Typography>
            </Box>
            <Box>
              <ItemCountButton counter={counter} updateCount={updateCount} />
              <CardActions className={classes.parentFlexSpaceBetween}>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={addToCart}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default ProductCardFull;
