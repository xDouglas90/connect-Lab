import { Button, Input, Link, Title } from '@atoms';
import { Layout } from '@templates';

import * as S from './styles';

export const SignUp = () => {
  return (
    <Layout>
      <S.Form autocomplete="off">
        <Title text="Cadastrar" />
        <S.FieldsContainer>
          <S.Column>
            <Input
              label="Nome completo*"
              name="full-name"
              placeholder="Seu nome"
            />
            <Input
              label="URL foto perfil"
              name="picture"
              placeholder="Sua foto"
            />
            <Input
              label="Senha*"
              name="password"
              placeholder="Sua senha"
              type="password"
            />
            <Input label="CEP*" name="zip-code" placeholder="Seu CEP" />
            <Input label="Cidade*" name="city" placeholder="Sua cidade" />
            <Input
              label="Numero*"
              name="number"
              placeholder="Número de sua residência"
              type="number"
            />
          </S.Column>
          <S.Column>
            <Input
              label="E-mail*"
              name="email"
              placeholder="Seu e-mail"
              type="email"
            />
            <Input label="Telefone" name="phone" placeholder="Seu telefone" />
            <Input
              label="Confirmação de senha*"
              name="password-confirmation"
              placeholder="Sua confirmação de senha"
              type="password"
            />
            <Input
              label="Logradouro/Endereço*"
              name="address"
              placeholder="Seu logradouro/endereço"
            />
            <Input
              label="Complemento"
              name="address-complement"
              placeholder="Seu complemento"
            />
            <Input label="Bairro*" name="district" placeholder="Seu bairro" />
          </S.Column>
        </S.FieldsContainer>
        <Button isPrimary text="Cadastrar" type="submit" />
        <Link text="Login" url="#" />
      </S.Form>
    </Layout>
  );
};
