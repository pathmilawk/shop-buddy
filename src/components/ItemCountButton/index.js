import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useStyles from "../../styles";

const ItemCountButton = (props) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    props.updateCount(counter);
  }, [counter]);

  useEffect(() => {
    setCounter(props.counter);
  }, [props.counter]);
    
  const handleIncrement = (event) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (event) => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <ButtonGroup
      size="small"
      aria-label="small outlined button group"
      onMouseDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      <Button onClick={(e) => handleDecrement(e)} disabled={counter === 0}>-</Button>
      <Button className={classes.counterCount}>{counter}</Button>
      <Button onClick={(e) => handleIncrement(e)}>+</Button>
    </ButtonGroup>
  );
};

export default ItemCountButton;
