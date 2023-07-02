function IsvalidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
export default IsvalidEmail;