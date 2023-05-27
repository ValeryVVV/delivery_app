import React from "react";
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from "react-redux";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from "@mui/material";
import { styled } from '@mui/system';
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";


export const StyledButton = styled(Button)({
    width: '100px',
    color: 'black',
    border: '1px solid black',
});

export const ContainerList = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px'
});


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
    
      const visibleContacts = getVisibleContacts();



    return(
        <>
        <div>
        {visibleContacts.map(({ id, name, number, email, address }) => (
            <Accordion key={id}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ContainerList>
                        <Typography variant="h7">Name: {name}</Typography>
                        <Typography variant="h7">Number: {number}</Typography>
                        <Typography variant="h7">Email: {email}</Typography>
                        <Typography variant="h7">Address: {address}</Typography>
                    </ContainerList>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Are you sure you want to delete the contact?
                    <StyledButton sx={{ml: 2}} type="submit" onClick={() => dispatch(deleteContact(id))}>Delete</StyledButton>
                </Typography>
                    
                </AccordionDetails>
            </Accordion>
        ))}
      </div>
    </>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

export default ContactList;