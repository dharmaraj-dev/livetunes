export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.AuthToken) {
    return { Authorization: user.AuthToken };
  } else {
    return {};
  }
}
