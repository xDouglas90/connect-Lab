import * as yup from 'yup';
import regExp from './regExp';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(regExp.email, 'Digite um email válido')
    .required('Necessário preencher o e-mail'),
  password: yup
    .string()
    .min(8, 'Senha deve conter no mín. 8 caracteres')
    .required(),
});

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(regExp.name, 'Números não são permitidos no nome')
    .min(2, 'Nome inválido')
    .required('Necessário preencher o nome completo'),
  photoUrl: yup
    .string()
    .nullable()
    .notRequired()
    .matches(regExp.url, { message: 'URL inválida', excludeEmptyString: true })
    .min(4, 'URL inválida'),
  email: yup
    .string()
    .matches(regExp.email, 'Digite um email válido')
    .required('Necessário preencher o e-mail'),
  password: yup
    .string()
    .min(8, 'Senha deve conter no mín. 8 caracteres')
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Não confere com a senha digitada')
    .required('Necessário confirmação de senha'),
  phone: yup
    .string()
    .matches(regExp.phone, 'Digite um número válido')
    .min(8, 'Verifique a quantidade de números')
    .nullable(),
  zipCode: yup
    .string()
    .min(8, 'Deve possuir no mín. 8 dígitos')
    .max(9, 'Deve possuir no máx. 9 dígitos quando tiver "-"')
    .matches(regExp.BRZipCode, 'Necessário que seja um CEP válido')
    .required('Necessário preencher o CEP'),
  street: yup
    .string()
    .min(1, 'Deve possuir no mín. 1 caractere')
    .required('Necessário preencher logradouro/endereço'),
  number: yup
    .string()
    .min(1, 'Deve possuir no mín. 1 caractere')
    .required('Necessário preencher o número'),
  neighborhood: yup
    .string()
    .min(2, 'Deve possuir no mín. 2 caractere')
    .required('Necessário preencher o bairro'),
  city: yup
    .string()
    .min(2, 'Deve possuir no mín. 2 caractere')
    .required('Necessário preencher a cidade'),
  state: yup
    .string()
    .min(4, 'Deve possuir no mín. 4 caractere')
    .required('Necessário preencher o estado'),
  complement: yup.string('Necessário que seja um texto').notRequired(),
});
