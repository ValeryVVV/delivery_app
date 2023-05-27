import { styled } from '@mui/system';
import { Box, Typography } from "@mui/material";
import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactLists/ContactLists";

export const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
    flexDirection: 'row'
});

export default function PhonebookContacts() {
    return (
        <>
        <Typography variant="h5" sx={{mt: 5, textAlign: 'center'}}>Contacts</Typography>
        <Typography variant="h6" sx={{mt: 1, textAlign: 'center'}}>Please leave your details, we will contact you.</Typography>
        <Container>
            <ContactForm />
            <Box sx={{m: 5}}><ContactList /></Box>
        </Container>
        </>
    )

};