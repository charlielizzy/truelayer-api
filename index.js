const dotenv = require("dotenv");
dotenv.config();
const Truelayer = require("./TrueLayer");

const getAllCards = async () => {
  const truelayer = new Truelayer();
  const allCards = await truelayer.fetchAllCards();
  console.log(allCards);
};

// getAllCards();

const getAllAccounts = async () => {
  const truelayer = new Truelayer();
  const allAccounts = await truelayer.fetchAllAccounts();
  console.log(allAccounts);
};

// getAllAccounts();

const getSingleAccount = async (id) => {
  const truelayer = new Truelayer();
  const singleAccount = await truelayer.fetchSingleAccount(id);
  console.log(singleAccount);
};

getSingleAccount("89c3139784a055b9b47998f9dce9122e");
