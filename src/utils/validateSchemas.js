import * as yup from 'yup';

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginSchema = yup.object().shape({
  email: yup.string().matches(emailRegExp, 'Digite um email válido').required(),
  password: yup
    .string()
    .min(8, 'Senha deve conter no mín. 8 caracteres')
    .required(),
});
