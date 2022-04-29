const axios = require("axios");

module.exports = class Truelayer {
  constructor() {
    this.url = "https://api.truelayer-sandbox.com/data/v1";
  }

  async fetchAllCards() {
    try {
      const response = await axios.get(`${this.url}/cards`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchAllAccounts() {
    try {
      const response = await axios.get(`${this.url}/accounts`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchSingleAccount(account_id) {
    try {
      const response = await axios.get(`${this.url}/accounts/${account_id}`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
};
