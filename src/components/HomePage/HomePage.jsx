import { Typography } from "@mui/material";
import { styled } from '@mui/system';
import ShopList from "components/ShopList/ShopList";
import { StyledCartList } from "components/styles/StyledCartList/StyledCartList";
import { products } from "data";

export const Container = styled('div')({
    display: 'flex',
    marginTop: '20px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
});

  
  export default function Home() {
    return (
    <>
        <Container>
            <Typography variant="h3">Shops</Typography>
        </Container>
        <StyledCartList>
            {products.map((item) => {
                return <ShopList key={item.id} item={item} />
            })}
        </StyledCartList>
    </>
    );
  }