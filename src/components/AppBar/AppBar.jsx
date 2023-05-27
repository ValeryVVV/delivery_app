import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigation } from 'components/Navigation/Navigation';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from "react-redux";
import { getShops } from 'redux/selectors';
import { StyledLink } from 'components/styles/StyledLink/StyledLink';
import { Badge } from '@mui/material';

export const AppBarContainer = () => {
    const shop = useSelector(getShops);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <StyledLink to='/'><ShoppingBagIcon /></StyledLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Navigation />
          </Typography>
                <StyledLink to='/cart'>
                    <Badge color="secondary" badgeContent={shop.length}>
                        <ShoppingCartIcon fontSize='medium' />
                    </Badge>
                </StyledLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};