import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Copyright from './copy-right-footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,

  // bgcolor: 'background.paper',
  bgcolor: 'white',
  color: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TicketModal(props: {
  cnt: number;
  activity_id: string;
  tickets: any;
}) {
  const [open, setOpen] = React.useState(false);
  const [refreshCnt, setRefreshCnt] = React.useState(0);

  React.useEffect(() => {}, [refreshCnt]);

  const handleOpen = async () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Button
        fullWidth
        onClick={handleOpen}
        variant="contained"
        style={{ marginBottom: '10px' }}
      >
        {`${props.cnt} 張`}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <p>{props.activity_id}</p>
            <p>
              {props.tickets.map((ticket: any, idx: any) => {
                return ticket.activity_id;
              })}
            </p>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
