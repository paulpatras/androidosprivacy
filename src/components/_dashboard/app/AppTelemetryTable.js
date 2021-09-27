import {
  Card,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Divider,
  CardHeader
} from '@mui/material';


export default function TelemetryTable(data) {

  return (
        <Card>
          <CardHeader title="Telemetry" align="center" sx={{pb: 3}} />
          <Divider />
          <TableContainer >
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" width="30%">Endpoints</TableCell>
                  <TableCell align="center" width="70%">Telemetry Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.telemetryRows.map((row) => (
                  <TableRow
                    key={row.endpoint}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center" width="30%">
                      {row.endpoint}
                    </TableCell>
                    <TableCell align="center" width="70%">{row.info}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
              </TableContainer>

              <Divider>Device Data</Divider>

              <TableContainer>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" width="30%">Endpoints</TableCell>
                  <TableCell align="center" width="70%">Information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.dataRows.map((row) => (
                  <TableRow
                    key={row.endpoint}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center" width="30%">
                      {row.endpoint}
                    </TableCell>
                    <TableCell align="center" width="70%">{row.info}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>  
        </Card>
  );
}