
import { Content, ContentCard, Icon, LinkCard, Title } from './styled';
import { DataAttributes } from './data';
import { Link } from 'react-router-dom';

function Card({data}: {data: DataAttributes} ) {
  const isContent = (data.mode === 'content');
  const isLink = (data.mode === 'link');

  return (
    <> 
      {isContent && 
        <ContentCard variant="outlined">
          <Title variant='h6'>{data.title}</Title>
          <Content variant='body1' sx={{color: '#858585'}}>
            {data.content.slice(0, 156) + (data.content.length > 156 ? '...' : '')}
          </Content>
        </ContentCard>
      }
      {isLink && 
        <LinkCard variant="outlined">
          <Title variant='h6'>
            {data.title}
            {data.icon && (
              <Icon alt={data.title} 
                src={new URL(`../../../assets/${data.icon}`, import.meta.url).href} 
              />
            )}             
          </Title>
          <Content variant='subtitle1'>
            <Link to={data.content}>
              {data.content.slice(0, 26) + (data.content.length > 26 ? '...' : '')}
            </Link>
          </Content>
        </LinkCard>
      }
    </>    
  );
}

export default Card;
