// material
import { Card, CardHeader, Box } from '@mui/material';
//
import MapView from './MapView';

// ----------------------------------------------------------------------


export default function AppMapConn() {

  return (
    <Card>
      <CardHeader title="Connections Map" />
        <MapView />
    </Card>
  );
}