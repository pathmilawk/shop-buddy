import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import ItemCountButton from "../ItemCountButton";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/constants/action.type";

const ProductCardSummary = (props) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const updateCount = (count) => {
    setCounter(count);
  };

  const addToCart = () => {
    if (counter > 0) {
      const payload = props.product;
      payload.quantity = counter;
      dispatch({ type: ADD_TO_CART, payload });
      setCounter(0);
    }
  };

  return (
    <Grid item xs={2} sm={2} md={3}>
      <Card className={classes.productCardSummary}>
        <CardMedia
          className={classes.productCardSummaryImage}
          component="img"
          height="140"
          image={props.product.imageUrl}
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {props.product.productName}
          </Typography>
          <Box className={classes.parentFlexSpaceBetween}>
            <Typography gutterBottom variant="h5" component="div">
              {props.product.currency + ' ' + props.product.price}
            </Typography>
            <ItemCountButton counter={counter} updateCount={updateCount} />
          </Box>
        </CardContent>
        <CardActions className={classes.parentFlexRight}>
          <Button
            sx={{ pr: 2 }}
            size="small"
            variant="text"
            component={Link}
            to={`products/${props.product.id}`}
          >
            View product
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="secondary"
            onClick={addToCart}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCardSummary;
