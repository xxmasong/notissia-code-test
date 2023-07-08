import { FullSizeCenteredFlexBox } from '@/styles/styled';

function Main() {
  const isPortrait = true;

  return (
    <>
      <FullSizeCenteredFlexBox flexDirection={isPortrait ? 'column' : 'row'}>
        { /* TODO implement here */ }
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Main;
