import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { decrementQuantity, deleteShop, incrementQuantity } from "redux/shopsSlice";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const cartItemTotal = item.price * item.quantity;
    return(
        <Box sx={{ py: 8 }}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '400px' }}
            >
                <CardMedia component="div"/>
                <img src={item.img} alt='cosmetics' height="200" />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>   
                    <Typography>
                        {item.title}
                    </Typography>
                    <Typography>${cartItemTotal}</Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                    <Button type="submit" onClick={() => dispatch(deleteShop(item.id))}>Delete</Button>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                        <RemoveCircleOutlineIcon sx={{pr: 1}} onClick={() => dispatch(decrementQuantity(item.id))} />
                            <Typography sx={{pr: 1}} >{item.quantity}</Typography>
                        <ControlPointIcon onClick={() => dispatch(incrementQuantity(item.id))} />
                    </Box>
                </CardActions>
            </Card>  
        </Box>
    )
}

export default CartItem;