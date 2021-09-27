// material
import { Card, CardHeader, Box } from '@mui/material';
//
import MapView from './MapView';

// ----------------------------------------------------------------------


export default function AppMapConn() {

  return (
    <Card>
      <CardHeader title="Connections Map" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <MapView />
      </Box>
    </Card>
  );
}