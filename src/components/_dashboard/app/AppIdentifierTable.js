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


// ----------------------------------------------------------------------


export default function IdentifierTable(data) {

  console.log("hello");
  console.log(data.systemRows);
  return (
        <Card>
        <CardHeader title="Identifiers" align="center"/>
          <Divider>System App</Divider>
          <TableContainer >
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" width="30%">Xiaomi System App Endpoints</TableCell>
                  <TableCell align="center" width="70%">identifiers Sent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { data.systemRows.map((row) => (
                  <TableRow
                    key={row.endpoint}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center" width="30%">
                      {row.endpoint}
                    </TableCell>
                    <TableCell align="center" width="70%">{row.identifiers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
              </TableContainer>

              <Divider>Non System App</Divider>

              <TableContainer>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" width="30%">Third-party System App Endpoints</TableCell>
                  <TableCell align="center" width="70%">Identifiers Sent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.nonsystemRows.map((row) => (
                  <TableRow
                    key={row.endpoint}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center" width="30%">
                      {row.endpoint}
                    </TableCell>
                    <TableCell align="center" width="70%">{row.identifiers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>  
        </Card>
  );
}