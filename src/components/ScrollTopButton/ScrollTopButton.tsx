import { useEffect, useState } from 'react';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { ButtonStyles } from 'components/ScrollTopButton/ScrollTopButton.styled';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ButtonStyles>
      <BsArrowUpSquareFill
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </ButtonStyles>
  );
};

export default ScrollButton;
