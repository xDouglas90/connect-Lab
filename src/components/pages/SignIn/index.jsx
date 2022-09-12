import { Button, Input, Link, Title } from '@atoms';
import { Layout } from '@templates';

import * as S from './styles';

export const SignIn = () => {
  return (
    <Layout>
      <S.Container>
        <Title text="Acessar" />
        <Input
          label="E-mail"
          name="email"
          placeholder="Seu e-mail"
          type="email"
        />
        <Input
          label="Senha"
          name="password"
          placeholder="Sua senha"
          type="password"
        />
        <Button isPrimary text="Acessar" />
        <Link text='Cadastrar' url='#' />
      </S.Container>
    </Layout>
  );
};
