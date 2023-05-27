import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)({
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: '700',
    color: '#ffff'
});