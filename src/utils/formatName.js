export default function (fullName) {
  const fullNameLower = fullName.toLowerCase();
  const fullNameSplitted = fullNameLower.split(' ');

  for (let i = 0; i < fullNameSplitted.length; i++) {
    fullNameSplitted[i] =
      fullNameSplitted[i].charAt(0).toUpperCase() +
      fullNameSplitted[i].slice(1);
  }

  const fullNameJoined = fullNameSplitted.join(' ');

  return fullNameJoined;
}
