export const validation = (email, password) => {
  const checkedEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const checkedPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  if (!checkedEmail) return "Email ID is not valid";
  if (!checkedPassword) return "Password is not valid";
  return null;
};
