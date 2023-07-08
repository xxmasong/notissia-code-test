import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const PaperLayoutWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const PaperLayout = styled(Paper)({
  backgroundColor: '#ffffff',
  width: 'calc(100% - 6rem)',
  height: '100vh !important',
  overflow: 'auto',
  paddingTop: '3rem',
  paddingLeft: '1.875rem',
  paddingRight: '1.875rem',
});
