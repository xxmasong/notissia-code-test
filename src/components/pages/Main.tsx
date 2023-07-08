import { PaperContainer, SectionsContainer } from '@/components/organisms';
import { Footer, Header } from '@/components/molecules';
import { Divider } from '@mui/material';

function Main() {
  return (
    <PaperContainer>
      <Header />
      <Divider />
      <SectionsContainer />
      <Divider />
      <Footer />
    </PaperContainer>
  );
}

export default Main;
