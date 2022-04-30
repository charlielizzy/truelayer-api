// const { listen } = require("express/lib/application");

// const { contentType } = require("express/lib/response");

const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", async () => {
  const identity_response = await fetch("/truelayer/fetch-identity-info");
  const identity_data = await identity_response.json();
  const identity_results = identity_data.results[0];
  //   console.log(identity_results);

  const accounts_response = await fetch("/truelayer/fetch-all-accounts");
  const accounts_data = await accounts_response.json();
  const accounts_results = accounts_data.results;
  //   console.log(accounts_results);

  const cards_response = await fetch("/truelayer/fetch-all-cards");
  const cards_data = await cards_response.json();
  const cards_results = cards_data.results;
  //   console.log(cards_results);

  fillCards(identity_results, accounts_results, cards_results);
});

const fillCards = (identity, accounts, cards) => {
  const identity_card = document.getElementById("fetch-info");

  const full_name = identity.full_name;
  const addresses = identity.addresses[0];
  //add for each loop here (for future if mutiple addresses)
  const address_line = addresses.address;
  const city = addresses.city;
  const zip = addresses.zip;
  const country = addresses.country;

  //add for each loop here (for future if mutiple emails)
  const email = identity.emails[0];

  //add for each loop here (for future if mutiple phone numbers)
  const phone1 = identity.phones[0];
  const phone2 = identity.phones[1];

  identity_card.innerHTML = `<strong>Name:</strong> ${full_name}
      <br/>
      <br/>
    <strong>Address:</strong> ${address_line},<br/>
    ${city},<br/>
    ${zip},<br/>
    ${country}
    <br/>
    <br/>
    <strong>Email:</strong> ${email},
    <br/>
    <br/>
    <strong>Phone:</strong> ${phone1}, ${phone2}`;

  const accounts_card = document.getElementById("all-accounts");

  accounts.forEach((account) => {
    const display_name = account.display_name;
    const account_type = account.account_type;
    const account_number = account.account_number.number;
    const sort_code = account.account_number.sort_code;

    const account_div = document.createElement("div");
    // account_div.classList.add("account_div");
    accounts_card.appendChild(account_div);
    account_div.innerHTML = `<strong>Account name:</strong> ${display_name}<br/>
    <strong>Account type:</strong> ${account_type} <br/>
    <strong>Account number:</strong> ${account_number}<br/>
    <strong>Sort code:</strong> ${sort_code}<br/><br/>`;
  });

  const cards_card = document.getElementById("all-cards");

  cards.forEach((card) => {
    const name_on_card = card.name_on_card;
    const card_type = card.card_type;
    const card_network = card.card_network;
    const card_number = card.partial_card_number;

    const cards_div = document.createElement("div");
    cards_card.appendChild(cards_div);
    cards_div.innerHTML = `<strong>Name on card:</strong> ${name_on_card}<br/>
    <strong>Card type:</strong> ${card_type}<br/>
    <strong>Card network:</strong> ${card_network}<br/>
    <strong>Card number:</strong> **** **** **** ${card_number}<br/><br/>`;
  });
};
