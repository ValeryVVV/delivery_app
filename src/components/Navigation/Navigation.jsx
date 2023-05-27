import { StyledLink } from 'components/styles/StyledLink/StyledLink';

export const Navigation = () => {

  return (
    <nav>
        <StyledLink to="/">
            Shops
        </StyledLink>
        <StyledLink to="/cart">
            Shopping Cart
        </StyledLink>
        <StyledLink to="/contacts">
            Contacts
        </StyledLink>
    </nav>
  );
};