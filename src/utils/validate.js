export default function validate(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username is Required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is Required';
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = 'Email address is Invalid';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be more than or equal to 6 characters';
  }

  if (!values.password2.trim()) {
    errors.password2 = 'Password is Required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Password do not match';
  }
  return errors;
}
