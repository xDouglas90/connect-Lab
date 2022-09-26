export default function () {
  const date = new Date();

  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full' }).format(date);
}
