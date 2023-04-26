import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ShopinStyle = () => {
  return (
    <Box sx={{ backgroundColor: "#212529", padding: "40px" }}>
      <Typography
        variant="h2"
        component="div"
        sx={{ color: "white", textAlign: "center" }}
      >
        Shop in style
      </Typography>
      <Typography
        variant="h6"
        component="div"
        sx={{ color: "white", textAlign: "center" }}
      >
        With this shop hompeage template
      </Typography>
    </Box>
  );
};

export default ShopinStyle;
