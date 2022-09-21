// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//get user example: https://api.github.com/users/devkapilbansal
//https://docs.github.com/es/rest/search#search-repositories
//search repositories: "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"
//search user: "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
//search user repositories: "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"
const axios = require('axios');



export async function fetchDataAsync() {
  try {
    const res = await axios.get("https://api.github.com/users/devkapilbansal");
    return res.data.name;
  } catch (err) {
    return err.message;
  }
}

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
