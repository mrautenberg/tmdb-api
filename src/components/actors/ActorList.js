import ActorItem from './ActorItem';
import styled from 'styled-components';

const StyledUL = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`;

function ActorList(props) {
  return (
    <StyledUL>
      {props.data.map(function (item) {
        return <ActorItem key={item.id} item={item} />;
      })}
    </StyledUL>
  );
}

export default ActorList;
