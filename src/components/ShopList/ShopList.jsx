import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addCart } from "redux/shopsSlice";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Box } from "@mui/material";


const ShopList = ({ item }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const addToCart = () => {
        dispatch(addCart(item));
        setIsAdded(true);
    };
  
    return(
        <Box sx={{ p: 8 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '300px'}}>
            <CardMedia component="div" />
                    <img src={item.img} alt='cosmetics' height="200" />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography>
                        {item.title}
                    </Typography>
                    <Typography>
                        Price: ${item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={addToCart}> {isAdded ? 'Added' : 'Add to cart'} </Button>
                </CardActions>
            </Card>
        </Box>

    )
};

export default ShopList;
