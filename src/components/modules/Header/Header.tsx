import { HeaderWrapper, Navigation, Tab, Title, TitleBlock } from './styled';

function Header() {
  return (
    <HeaderWrapper>
      <TitleBlock>
        <Title variant="h4">Dashboard 1</Title>
      </TitleBlock>
      <Navigation value="">
        <Tab label="Overview" value="" />
      </Navigation>
    </HeaderWrapper>
  );
}

export default Header;
