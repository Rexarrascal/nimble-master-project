module.exports.registerValidation = (email, password) => {
  const errors = [];

  if (email === "") {
    errors.push({message: "Please fill the username area."})
  }

  if (password ==="") {
    errors.push({message:"Please fill the password area"})
  }

  if (password.length < 6) {
    errors.push({message: 'Password must be minimum 6 chars'})
  }
  return errors;
}