const axios = require('axios');

export async function searchUsers(username) {
  try {
    const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
}

export async function searchRepositories(name) {
  try {
    const res = await axios.get(`https://api.github.com/search/repositories?q=${name}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
}

