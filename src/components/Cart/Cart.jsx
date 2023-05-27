import { Typography } from "@mui/material";
import CartItem from "components/ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "redux/selectors";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/system';
import { StyledButton } from "components/styles/StyledButton/StyledButton";
import { StyledCartList } from "components/styles/StyledCartList/StyledCartList";
import CartFooter from "components/ShoppingCartFooter/ShoppingCartFooter";
import { removeAllShops } from "redux/shopsSlice";
import { CartContainer } from "components/styles/CartContainer/CartContainer";

export const Container = styled('div')({
    display: 'flex',
    marginTop: '100px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
});

const Cart = () => {
  const shop  = useSelector(getShops);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
        {shop.length > 0 ? (
            <>
                <CartContainer>
                    <StyledButton sx={{}} onClick={() => dispatch(removeAllShops())} variant="outlined">
                        Remove All
                    </StyledButton>
                </CartContainer>
                <StyledCartList>
                    {shop.map((item) => {
                        return <CartItem key={item.id} item={item} />
                    })}
                </StyledCartList>
                <CartFooter />
            </>
        ) : (
            <>
                <Container>
                    <Typography variant="h3">Your shopping cart is empty!</Typography>
                    <StyledButton onClick={() => navigate("/")} variant="outlined">Add cart</StyledButton>
                </Container>
            </>
      )}
    </>
  );
};

export default Cart;
