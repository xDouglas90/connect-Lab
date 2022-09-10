import { Logo as LogoImg } from '@images';

import * as S from './styles';

export const Logo = () => {
  return (
    <S.Wrapper>
      <S.Icon src={LogoImg} alt="" />
      <S.Name>Connect Lab</S.Name>
    </S.Wrapper>
  );
};
