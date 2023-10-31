export default function authHeader() {
  const token = localStorage.getItem(btoa('token'));

  if (token != null) {
    return { Authorization: atob(token) };
  } else {
    return {};
  }
}


export function authToken() {
  const token = localStorage.getItem(btoa('token'));
  if (token != null) {
    return token;
  } else {
    return {};
  }
}
