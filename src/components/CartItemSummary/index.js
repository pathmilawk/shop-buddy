import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStyles from "../../styles";
import ItemCountButton from "../ItemCountButton";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../redux/constants/action.type";

const CartItemSummary = (props) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setCounter(props.item.quantity);
  }, [props.item]);

  const updateCount = (count) => {
    const previousCount = counter;
    setCounter(count);
    if (count > 0) {
      const payload = props.item;
      payload.quantity = count;
      dispatch({ type: ADD_TO_CART, payload });
    } else if (previousCount > 0) {
      removeFromCart();
    }
  };

  const removeFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: props.item.id });
  };

  return (
    <Grid item xs={1} sm={1} md={1}>
      <Card className={classes.cartItemSummary}>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 20px 5fr 1fr" }}>
          <CardMedia
            className={classes.cartItemSummaryImage}
            component="img"
            height="140"
            image={props.item.imageUrl}
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
                variant="h6"
                component="div"
                color="text.secondary"
              >
                {props.item.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.item?.quantity} items
              </Typography>
            </Box>

            <Typography gutterBottom variant="h6" component="div">
              {props.item.currency +
                " " +
                (props.item.price * props.item.quantity).toFixed(2)}
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ItemCountButton counter={counter} updateCount={updateCount} />
            <Button
              size="medium"
              variant="outlined"
              color="error"
              onClick={removeFromCart}
            >
              Remove
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

export default CartItemSummary;
