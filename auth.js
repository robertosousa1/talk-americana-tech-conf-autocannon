require("dotenv/config");

const axios = require("axios");

async function auth() {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${process.env.API}/session`,
      data: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
    });

    return data.token
  } catch (error) {
    throw new Error('Authentication error')
  }  
}

auth();

module.exports = auth;
