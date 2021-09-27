// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import AppMapConn from '../components/_dashboard/app/AppMapConn';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Overview</Typography>
        </Box>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={12}>
            <AppMapConn />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
