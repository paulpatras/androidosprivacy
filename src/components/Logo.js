import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
import logoSVG from './logo.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Box component="img" src={logoSVG} sx={{ width: 40, height: 40, ...sx }} />;
}
