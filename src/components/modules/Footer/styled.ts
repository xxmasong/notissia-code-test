import { Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';

export const FooterWrapper = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '3.6rem',
  paddingRight: '6rem',
});

export const Text = styled(Typography)({
  fontFamily: 'Century Gothic',
  fontWeight: 'bold',
});