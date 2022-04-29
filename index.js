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

const getSingleAccount = async (account_id) => {
  const truelayer = new Truelayer();
  const singleAccount = await truelayer.fetchSingleAccount(account_id);
  console.log(singleAccount);
};

//account account_id - 89c3139784a055b9b47998f9dce9122e

// getSingleAccount("89c3139784a055b9b47998f9dce9122e");

const getBalance = async (account_id) => {
  const truelayer = new Truelayer();
  const balance = await truelayer.fetchBalance(account_id);
  console.log(balance);
};

// getBalance("89c3139784a055b9b47998f9dce9122e");

const getAccountTransactions = async (account_id) => {
  const truelayer = new Truelayer();
  const accountTransactions = await truelayer.fetchAccountTransactions(
    account_id
  );
  console.log(accountTransactions);
};

getAccountTransactions("89c3139784a055b9b47998f9dce9122e");

const getDirectDebits = async (account_id) => {
  const truelayer = new Truelayer();
  const directDebits = await truelayer.fetchDirectDebits(account_id);
  console.log(directDebits);
};

// getDirectDebits("89c3139784a055b9b47998f9dce9122e");

const getIdentityInfo = async () => {
  const truelayer = new Truelayer();
  const identityInfo = await truelayer.fetchIdentityInfo();
  console.log(identityInfo);
};

// getIdentityInfo();

//card id - 2cbf9b6063102763ccbe3ea62f1b3e72

const getSingleCard = async (card_id) => {
  const truelayer = new Truelayer();
  const singleCard = await truelayer.fetchSingleCard(card_id);
  console.log(singleCard);
};

// getSingleCard("328f557c68aebd532cbbd05ce5bcb6c8");

const getCardBalance = async (card_id) => {
  const truelayer = new Truelayer();
  const cardBalance = await truelayer.fetchCardBalance(card_id);
  console.log(cardBalance);
};

// getCardBalance("328f557c68aebd532cbbd05ce5bcb6c8");

const getCardTransactions = async (card_id) => {
  const truelayer = new Truelayer();
  const cardTransactions = await truelayer.fetchCardTransactions(card_id);
  console.log(cardTransactions);
};

// getCardTransactions("328f557c68aebd532cbbd05ce5bcb6c8");
