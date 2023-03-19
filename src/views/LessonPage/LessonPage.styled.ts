import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
`;
const ListItem = styled.li``;
const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  :hover {
    transform: scale(1.005);
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 550px;
  margin-bottom: 20px;
`;

const TextStyled = styled.p`
  margin: 0 0 15px 0;
  font-size: 16px;
`;
const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const SkillStyled = styled.p`
  margin: 0;
  font-size: 16px;
`;
const SkillItem = styled.li`
  padding: 3px;
  margin: 0 15px 15px 0;
  font-size: 16px;
  border: solid 1px black;
`;
export {
  List,
  ListItem,
  ImageContainer,
  LinkItem,
  TextStyled,
  SkillsList,
  SkillStyled,
  SkillItem,
};
