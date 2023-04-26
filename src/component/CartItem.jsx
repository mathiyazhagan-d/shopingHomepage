import React from "react";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

function CartItem(props) {
  return (
    <Box margin={3}>
      <Box>
        <Typography variant="h5">
          {props.data.title}{" "}
          <HighlightOffSharpIcon
            sx={{ color: "red" }}
            onClick={() => props.handleRemoveCart(props.data.id)}
          />
        </Typography>
        <Typography variant="h6"> Rs. {props.data.price}</Typography>
      </Box>
    </Box>
  );
}

export default CartItem;
