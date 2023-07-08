import { Tab as MuiTab, Tabs, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack, styled } from '@mui/system';

export const HeaderWrapper = styled(Stack)({
  justifyContent: 'flex-start',
  flexDirection: 'column',
  paddingBottom: '0.1rem',
});

export const TitleBlock = styled(Box)({
  marginLeft: '0.4rem',
});

export const Title = styled(Typography)({
  fontWeight: 700,
});

export const Navigation = styled(Tabs)({  
  padding: '0',
  marginTop: '2rem',
  ".MuiTab-root": {
    color: 'black !important', 
    fontSize: '1rem',  
    fontWeight: 500, 
  },
  ".MuiTabs-indicator": {
    backgroundColor: '#2e7b7c',    
  }
});

export const Tab = styled(MuiTab)({ 
  justifyContent: 'flex-end', 
  marginBottom: '0.3rem',
  padding: '0',
  minWidth: '6rem',
  minHeight: '2.25rem',
  textTransform: 'none',
});
