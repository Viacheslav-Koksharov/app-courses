import {
  ContainerStyles,
  ImageContainerStyles,
  TitleStyles,
} from 'components/Error/Error.styled';

const Error = ({ error = null, image = '', route = false }) => {
  return (
    <ContainerStyles>
      <ImageContainerStyles route>
        <img src={image} alt="the site is unavailable"></img>
      </ImageContainerStyles>
      {error && <TitleStyles>{error}</TitleStyles>}
    </ContainerStyles>
  );
};

export default Error;
