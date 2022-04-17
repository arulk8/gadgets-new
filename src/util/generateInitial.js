const getInitial = (email, firstName, lastName) => {
  let initial;
  if (!!firstName && !!lastName) {
    initial = firstName.substring(0, 1) + lastName.substring(0, 1);
  } else {
    initial = email.substring(0, 2);
  }
  return initial.toUpperCase();
};

export default getInitial;
