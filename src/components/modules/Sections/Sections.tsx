
import { Grid } from '@mui/material';
import { SectionWrapper } from './styled';
import Card from './Card';
import { contentData, DataAttributes, linkData } from './data';

function Sections() {
  return (
    <SectionWrapper>
      <Grid container item direction="row" lg={9} >
        {contentData.map((data: DataAttributes, i) => (
          <Grid item lg={6} key={data.mode + i}>
            <Card data={data} />
          </Grid>
        ))}
      </Grid>
      <Grid item md={3} >
        {linkData.map((data: DataAttributes, i) => (
          <Grid item md={12} key={data.mode + i}>
            <Card data={data} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

export default Sections;
