import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import CartItemSummary from "../CartItemSummary";
import useStyles from "../../styles";
import { useDispatch } from "react-redux";
import { RESET_CART } from "../../redux/constants/action.type";
import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { calculateMVA, calculateDiscount, calculateTotalBill } from "../../services/util";

const CartItemList = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    
  const classes = useStyles();

    const [currency, setCurrency] = useState("");
    const [subTotal, setSubTotal] = useState(0);
    const [mva, setMva] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalBill, setTotalBill] = useState(0);
    
    useEffect(() => {
        if (cartItems && cartItems.length > 0) {
            setCurrency(cartItems[0].currency);

            let sTotal = 0;
            cartItems.forEach(item => {
                sTotal += +item.price * item.quantity;
            });

            setSubTotal(sTotal.toFixed(2));
        }
    }, [cartItems]);

    useEffect(() => {
        setMva(calculateMVA(subTotal));
        setDiscount(calculateDiscount(subTotal));
    }, [subTotal]);

    useEffect(() => {
        setTotalBill(calculateTotalBill(+subTotal, +mva, +discount));
    }, [mva, discount]);

  const clearCart = () => {
    dispatch({ type: RESET_CART, payload: {} });
  };

  const checkout = () => {
    alert("Checkout success");
    dispatch({ type: RESET_CART, payload: {} });
    };
    
    
  return (
    <Container sx={{ marginTop: "20px" }}>
      {cartItems?.length > 0 && (
        <Box sx={{ display: "grid", gridTemplateColumns: "3fr 30px 1fr" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 1, md: 1 }}
            justifyContent="flex-start"
            alignItems="center"
          >
            {cartItems.map((item, index) => (
              <CartItemSummary item={item} key={item.id} />
            ))}
          </Grid>
          <div></div>
          <Card
            sx={{
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Order summary
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px"
                }}
              >
                <Typography variant="body1">Subtotal</Typography>
                              <Typography variant="body1">{ currency + ' ' + subTotal}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginRight: "20px"
                }}
              >
                <Typography variant="body1">MVA (12%)</Typography>
                <Typography variant="body1">{ currency + ' ' +mva}</Typography>
                          </Box>
                          <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginRight: "20px"
                }}
              >
                <Typography variant="body1">Discount</Typography>
                <Typography variant="body1">{ currency + ' ' + discount}</Typography>
              </Box>
                      </Box>
                      <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginRight: "20px"
                }}
              >
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6">{ currency + ' ' + totalBill}</Typography>
              </Box>
                      <CardActions className={classes.parentFlexSpaceAround}>
              <Button
                size="medium"
                variant="contained"
                color="secondary"
                onClick={checkout}
              >
                Checkout
              </Button>
              <Button
                sx={{ pr: 2 }}
                size="small"
                variant="text"
                onClick={clearCart}
              >
                Clear cart
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
      {cartItems?.length == 0 && (
        <Card className={classes.parentFlexCenter} sx={{ height: "200px" }}>
          <ShoppingCartIcon
            fontSize="large"
            color="text.secondary"
            sx={{ marginRight: "5px" }}
          />
          <Typography variant="h4" color="text.secondary">
            Cart is empty
          </Typography>
        </Card>
      )}
    </Container>
  );
};

export default CartItemList;
