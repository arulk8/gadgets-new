const passwordValidate = (password) => {
  let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;
  return re.test(password);
};

export default passwordValidate;
