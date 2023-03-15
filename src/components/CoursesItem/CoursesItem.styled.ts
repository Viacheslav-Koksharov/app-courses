import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListItem = styled.li`
  width: calc((100% - 10px) / 2);
  height: 480px;
  margin: 0 10px 10px 0;
  &:nth-child(2n) {
    margin-right: 0px;
  }
  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  :hover {
    transform: scale(1.005);
  }
`;
const LinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const Title = styled.h5`
  margin: 0 0 15px 0;
  font-size: 20px;
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
  ListItem,
  ImageContainer,
  LinkItem,
  Title,
  TextStyled,
  SkillsList,
  SkillStyled,
  SkillItem,
};
