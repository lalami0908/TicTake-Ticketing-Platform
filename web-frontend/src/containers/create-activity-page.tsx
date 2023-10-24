import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CreateActivityModal from '../components/create-activity-modal';
import Copyright from '../components/copy-right-footer';

function PricingContent() {
  return (
    <React.Fragment>
      <div style={{ paddingTop: '100px' }}>
        <CreateActivityModal />
        <Container
          maxWidth="md"
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="space-evenly"
          ></Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default function SearchForActivitiesPage() {
  return <PricingContent />;
}
