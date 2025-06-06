import animojiImage from '@/assets/images/animoji.png';

import { Container, StyledImg } from './logo-animoji.styles';

export const LogoAnimoji = () => (
  <Container>
    {/* <StyledLogo /> */}
    <StyledImg
      src={animojiImage}
      alt={'Animoji representation of Hamed'}
      size={40}
    />
  </Container>
);
