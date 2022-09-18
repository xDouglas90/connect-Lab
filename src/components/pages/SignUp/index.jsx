import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { Button, Input, Link, Title } from '@atoms';
import { Layout } from '@templates';

import * as S from './styles';

const STATE_URL =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';

export const SignUp = () => {
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState('');

  const { data } = useQuery('states', async () => {
    const response = await axios.get(`${STATE_URL}?orderBy=nome`);
    return setStateList([...response.data]);
  });

  const getSelectedStateId = (e) => {
    const inputState = stateList.filter(
      (state) => state.nome === e.target.value
    );
    setSelectedStateId(inputState[0].id);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${STATE_URL}${selectedStateId}/municipios`
      );

      setCityList(data);
    };
    getData();
  }, [cityList, selectedStateId]);

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

            <Input
              autoComplete="off"
              label="Estado*"
              name="state"
              placeholder="Seu estado"
              list="state-name"
              onChange={getSelectedStateId}
            />
            <datalist id="state-name">
              {stateList.map((state) => (
                <option key={state.id} value={state.nome}>
                  {state.sigla}
                </option>
              ))}
            </datalist>

            <Input
              autoComplete="off"
              label="Cidade*"
              name="city"
              placeholder="Sua cidade"
              list="city-name"
            />
            <datalist id="city-name">
              {!!cityList &&
                cityList.map((city) => (
                  <option key={city.id} value={city.nome} />
                ))}
            </datalist>

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

        <Link text="Login" url="/login" />
      </S.Form>
    </Layout>
  );
};
