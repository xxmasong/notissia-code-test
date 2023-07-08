import { Divider } from '@mui/material';
import { PaperLayout, PaperLayoutWrapper } from './styled';
import { Stack } from '@mui/system';
import { ReactNode } from 'react';

export type PaperContainerAttributes = {
  children: ReactNode;
}

function PaperContainer({ children }: PaperContainerAttributes) {
  return (
    <PaperLayoutWrapper>  
      <PaperLayout variant="outlined" square>
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
        >
          { children }
        </Stack>
      </PaperLayout>
    </PaperLayoutWrapper> 
  );
}


export default PaperContainer;
