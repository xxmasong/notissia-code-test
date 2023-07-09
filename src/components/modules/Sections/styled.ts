import { Card, Typography } from '@mui/material';
import { Stack, styled } from '@mui/system';

export const SectionWrapper = styled(Stack)({
  justifyContent: 'flex-start',
  flexDirection: 'row',
  paddingTop: '0.8rem',
  paddingBottom: '0.5rem',
});

export const ContentCard = styled(Card)({
  width: '29.5rem',
  height: '9.5rem',
  marginLeft: '0.4rem',
  marginRight: '1.75rem',
  marginBottom: '1.5rem',
  padding: '0.5rem 0.75rem 2rem 1rem',
  backgroundColor: '#fafafa',
});

export const LinkCard = styled(Card)({
  width: '20.5rem',
  height: '6.5rem',
  marginLeft: '1rem',
  marginBottom: '1rem',
  paddingTop: '1.5rem',
  paddingLeft: '1rem',
  backgroundColor: '#fafafa',
  "&:hover": {
    backgroundColor: '#dff1f1',
  }
});

export const Title = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.96rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

export const Content = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: 1,
  "a": {
    fontSize: '0.9rem',
    fontWeight: 500,
    lineHeight: 1,
    color: '#569a99',
    "&:hover": {
      color: '#569a99',
    }
  }
});

export const Icon = styled('img')({
  width: '1.5rem',
  height: '1.3rem',
  marginLeft: '0.5rem',
});





