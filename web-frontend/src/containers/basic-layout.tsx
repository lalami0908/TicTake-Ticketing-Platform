// eslint-disable-next-line @typescript-eslint/naming-convention
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { logOut } from '../axios/index';

type Props = {
  children: React.ReactNode;
};

export default function basicLayout({ children }: Props) {
  return (
    <div>
      <AppBar
        position="static"
        color="inherit"
        elevation={0}
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <SmartToyIcon fontSize="large" style={{ marginRight: '10px' }} />
          <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Tictake
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/search-for-activities"
              sx={{ my: 1, mx: 1.5 }}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              search for activities
            </Link>

            <Link
              variant="button"
              color="text.primary"
              href="/create-activity"
              sx={{ my: 1, mx: 1.5 }}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              Create Activity
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/show-my-tickets"
              sx={{ my: 1, mx: 1.5 }}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              My Tickets
            </Link>
          </nav>
          <Button
            href="#"
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
            style={{ backgroundColor: 'white', color: 'black' }}
            onClick={() => {
              logOut();
            }}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}
