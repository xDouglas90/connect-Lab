import PropTypes from 'prop-types';

import { TopBar } from '@organisms';

import * as S from './styles';
import { Button, Logo } from '@atoms';

export const Layout = ({ children }) => {
  return (
    <>
      <TopBar>
        <Logo />
        <Button text='Login' />
      </TopBar>
      <S.Main>{children}</S.Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
