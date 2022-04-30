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

  async fetchAccountBalance(account_id) {
    try {
      const response = await axios.get(
        `${this.url}/accounts/${account_id}/balance`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchAccountTransactions(account_id) {
    try {
      const response = await axios.get(
        `${this.url}/accounts/${account_id}/transactions`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchDirectDebits(account_id) {
    try {
      const response = await axios.get(
        `${this.url}/accounts/${account_id}/direct_debits`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchIdentityInfo() {
    try {
      const response = await axios.get(`${this.url}/info`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchSingleCard(card_id) {
    try {
      const response = await axios.get(`${this.url}/cards/${card_id}`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchCardBalance(card_id) {
    try {
      const response = await axios.get(`${this.url}/cards/${card_id}/balance`, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async fetchCardTransactions(card_id) {
    try {
      const response = await axios.get(
        `${this.url}/cards/${card_id}/transactions`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async verifyAccountHolder(name) {
    try {
      const response = await axios.post(
        "https://api.truelayer-sandbox.com/verification/v1/verify",
        { name: name },
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      return response.data.verified;
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async sendPayment(
    amount,
    currency_code,
    account_holder_name,
    reference,
    sort_code,
    account_number
  ) {
    try {
      const response = await axios.post(
        "https://pay-api.truelayer-sandbox.com/single-immediate-payments",
        {
          amount: amount,
          currency: currency_code,
          beneficiary_name: account_holder_name,
          beneficiary_reference: reference,
          beneficiary_sort_code: sort_code,
          beneficiary_account_number: account_number,
          remitter_reference: "pm remit ref",
          redirect_uri: "http://localhost:3000/callback",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYMENT_TOKEN}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log("Error: ", error);
    }
  }
};
