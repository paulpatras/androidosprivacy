import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    Divider,
    Grid
} from '@mui/material';
// components
import Page from '../components/Page';
import IdentifierTable from '../components/_dashboard/app/AppIdentifierTable';
import TelemetryTable from '../components/_dashboard/app/AppTelemetryTable';
import ForceGraphView from '../components/_dashboard/app/AppForceGraph';
//
import iD from './data/realme_ids.json';
import telemetry from './data/realme_telemetry.json';
import graphData from './data/realme.json';

// ----------------------------------------------------------------------

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const systemRows = iD["system_app"];
const nonsystemRows = iD["nonsystem_app"];
const telemetryRows = telemetry["telemetry"];
const dataRows = telemetry["device_data"];

export default function RealmeView() {

    return (
        <Page title="Realme">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Realme 6 Pro
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <ForceGraphView myData={graphData} />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <IdentifierTable systemRows={systemRows} nonsystemRows={nonsystemRows} />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <TelemetryTable telemetryRows={telemetryRows} dataRows={dataRows} />
          </Grid>
        </Grid>
      </Container>
    </Page>
    );
}
