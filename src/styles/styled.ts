import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const HeaderWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  paddingTop: '2rem',
  paddingBottom: '1rem',
});

const FooterWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '3rem',
});

const PaperLayoutWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
});

const PaperLayout = styled(Paper)({
  width: '92%',
  height: '100vh',
  paddingLeft: '2rem',
});

export { 
  HeaderWrapper,
  FooterWrapper,
  PaperLayoutWrapper,
  PaperLayout 
};
