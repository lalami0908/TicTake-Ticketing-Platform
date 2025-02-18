import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import LoadingSpin from 'react-loading-spin';
import Copyright from './copy-right-footer';
import { createOrder } from '../axios/index';
import { payOrder } from '../axios/index';
import { history } from '../index';

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
  bgcolor: 'white',
  color: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BuyTicketModal(props: {
  activity_id: string;
  activity_name: string;
  activity_remaining_inventory: number;
  setRefreshCnt: any;
  refreshCnt: number;
}) {
  const [actualOrder, SetActualOrder] = React.useState(false);
  const [ticketKey, SetTicketKey] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = async () => {
    setOpen(true);
    const activity = {
      activity_id: props.activity_id,
    };
    await createOrder(activity, SetActualOrder, SetTicketKey);
    var cnt = props.refreshCnt + 1;

    props.setRefreshCnt(cnt);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    const order = {
      ticket_id: encodeURIComponent(ticketKey),
    };
    await payOrder(order, setOpen, SetActualOrder);
    history.go(0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Button
        fullWidth
        onClick={handleOpen}
        variant="contained"
        style={{ marginBottom: '10px' }}
        disabled={props.activity_remaining_inventory == 0 ? true : false}
      >
        {'BUY !!!'}
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
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
                {props.activity_name}
              </Typography>

              {actualOrder ? (
                <div>
                  <p>訂單建立成功</p>
                  <p>訂單編號：{ticketKey}</p>
                  <Box component="form" onClick={handleSubmit} sx={{ mt: 3 }}>
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                      馬上付款
                    </Button>
                  </Box>
                </div>
              ) : (
                <div>
                  <p>正在建立訂單</p>
                  <Typography component="h1" variant="h4">
                    <Button
                      type="submit"
                      fullWidth
                      variant="outlined"
                      sx={{
                        mt: 3,
                        mb: 2,
                        bgcolor: 'white',
                        borderColor: 'white',
                      }}
                    >
                      <LoadingSpin />
                    </Button>
                  </Typography>
                </div>
              )}
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
