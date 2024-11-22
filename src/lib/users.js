import axios from "axios";

export async function login(formData) {
  const res = await axios.post("/v2/users/login", formData);
  const data = res.data;
  return data;
}

export function getUser() {
  let user = null;
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    user = null;
  }

  return user;
}

export function saveUser(user) {
  if (typeof user !== "object") {
    console.error(`Save user error, passed in user: ${user}`);
    return false;
  }
  localStorage.setItem("user", JSON.stringify(user));
  return true;
}
