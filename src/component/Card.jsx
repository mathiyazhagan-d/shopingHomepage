import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button,  CardActions } from "@mui/material";
import { useState } from "react";

export default function ShopCard({ data, handleAddToCart, cartitems }) {
  const [btn, setbtn] = useState(true);

  return (
    <Box sx={{ maxWidth: 300 }} margin={4}>
      <Card>
        <CardMedia
          component="img"
          width="18rem"
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price INR ₹{data.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.features.processor}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.features.display}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.features.battery}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data.features.os}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data.features.camera}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ alignItems: "center" }}>
            <Button
              disabled={cartitems.some((obj) => obj.id === data.id)}
              onClick={() => handleAddToCart(data.id)}
              variant="contained"
            >
              {btn ? "Add to cart" : "Added to cart"}
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
