import { ButtonStyled } from './Button.styled';
import { IButton } from '../../interfaces/Button.interface';

const Button = ({ id, style, children, onClick }: IButton) => {
  return (
    <ButtonStyled id={id} style={style} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
