const dotenv = require("dotenv");
dotenv.config();
const Truelayer = require("./TrueLayer");
const axios = require("axios");
const express = require("express");
const app = express();
const truelayer = new Truelayer();
app.use(express.json());

app.listen(8080, () => {
  console.log("listening on 8080");
});

app.get("/truelayer/fetch-all-cards", async (req, res) => {
  const allCards = await truelayer.fetchAllCards();
  res.send(allCards);
});

app.get("/truelayer/fetch-all-accounts", async (req, res) => {
  const allAccounts = await truelayer.fetchAllAccounts();
  res.send(allAccounts);
});

//account account_id - 89c3139784a055b9b47998f9dce9122e
//card id - 2cbf9b6063102763ccbe3ea62f1b3e72

app.get("/truelayer/fetch-single-account/:account_id", async (req, res) => {
  const singleAccount = await truelayer.fetchSingleAccount(
    req.params.account_id
  );
  res.send(singleAccount);
});

app.get("/truelayer/fetch-account-balance/:account_id", async (req, res) => {
  const accountBalance = await truelayer.fetchAccountBalance(
    req.params.account_id
  );
  res.send(accountBalance);
});

app.get(
  "/truelayer/fetch-account-transactions/:account_id",
  async (req, res) => {
    const accountTransactions = await truelayer.fetchAccountTransactions(
      req.params.account_id
    );
    res.send(accountTransactions);
  }
);

app.get("/truelayer/fetch-direct-debits/:account_id", async (req, res) => {
  const directDebits = await truelayer.fetchDirectDebits(req.params.account_id);
  res.send(directDebits);
});

app.get("/truelayer/fetch-identity-info", async (req, res) => {
  const identityInfo = await truelayer.fetchIdentityInfo();
  res.send(identityInfo);
});

app.get("/truelayer/fetch-single-card/:card_id", async (req, res) => {
  const singleCard = await truelayer.fetchSingleCard(req.params.card_id);
  res.send(singleCard);
});

app.get("/truelayer/fetch-card-balance/:card_id", async (req, res) => {
  const cardBalance = await truelayer.fetchCardBalance(req.params.card_id);
  res.send(cardBalance);
});

app.get("/truelayer/fetch-card-transactions/:card_id", async (req, res) => {
  const cardTransactions = await truelayer.fetchCardTransactions(
    req.params.card_id
  );
  res.send(cardTransactions);
});

app.post("/truelayer/verify-account", async (req, res) => {
  const verified = await truelayer.verifyAccountHolder(req.body.name);
  res.send(verified);
});

app.post("/truelayer/send-payment", async (req, res) => {
  const payment = await truelayer.sendPayment(
    req.body.amount,
    req.body.currency_code,
    req.body.account_holder_name,
    req.body.reference,
    req.body.sort_code,
    req.body.account_number
  );
  res.send(payment);
});

app.use(express.static("public"));
