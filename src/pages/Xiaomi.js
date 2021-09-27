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
import xiaomiID from './data/xiaomi_ids.json';
import xiaomiTelemetry from './data/xiaomi_telemetry.json';
import xiaomi from './data/xiaomi.json';

// ----------------------------------------------------------------------

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const systemRows = xiaomiID["system_app"];
const nonsystemRows = xiaomiID["nonsystem_app"];
const telemetryRows = xiaomiTelemetry["telemetry"];
const dataRows = xiaomiTelemetry["device_data"];

export default function XiaomiView() {

    return (
        <Page title="Xiaomi">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Redmi 9
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <ForceGraphView myData={xiaomi} />
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