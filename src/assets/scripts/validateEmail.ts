const validateEmail = (email: string): boolean => {
  const isMailAtValid: boolean = !(email.indexOf('@') <= 0 || email.indexOf('@') !==  email.lastIndexOf('@'));
  const isMailDotValid: boolean = !(email.lastIndexOf('.') <= email.indexOf('@') + 1 || email.lastIndexOf('.') === email.length - 1);
  return isMailAtValid && isMailDotValid
}

export default validateEmail;
