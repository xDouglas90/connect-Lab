import { v4 as keyGen } from 'uuid';

export default [
  { _id: keyGen(), description: 'Energia' },
  { _id: keyGen(), description: 'Segurança eletrônica' },
  { _id: keyGen(), description: 'Comunicação' },
  { _id: keyGen(), description: 'Controle de Acesso' },
];
