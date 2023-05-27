import React from "react";

import { useSelector } from "react-redux";
import { Typography, Box, Divider } from "@mui/material";
import { getShops } from "redux/selectors";
import { StyledButton } from "components/ContactLists/ContactLists";
import { StyledCartFooter } from "components/styles/StylesCartFooter/StylesCartFooter";


const CartFooter = ({ item }) => {
    const shop  = useSelector(getShops);

    const cartTotal = shop.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

    return(
        <Box>
            <Divider /> 
            <StyledCartFooter>
                <Typography sx={{fontWeight: 'bold'}}>Total: ${cartTotal.toLocaleString()}</Typography>
                <StyledButton sx={{fontWeight: 'bold'}} variant="outlined">Submit</StyledButton>
            </StyledCartFooter>
        </Box>

    )
};

export default CartFooter;
