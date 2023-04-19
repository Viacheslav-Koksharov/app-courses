import { ContainerStyles } from 'components/Container/Container.styled';

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
