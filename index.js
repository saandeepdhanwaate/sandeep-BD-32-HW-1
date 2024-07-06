const express = require("express");
const app = express();
const port = 3000;

let users = [
  {
    id: 1,
    username: "ankit",
    fullName: "Ankit Kumar",
    email: "ankit@gmail.com",
  },
  {
    id: 2,
    username: "dhananjit",
    fullName: "Dhananjit Singh",
    email: "dhananjit.singh@gmail.com",
  },
];

let creditCards = [
  { number: "1234567890123456", holder: "John Doe", expiry: "12/24" },
  { number: "9876543210987654", holder: "Jane Smith", expiry: "06/23" },
];

let books = [
  { isbn: "9783161484100", title: "Example Book", author: "John Author" },
  { isbn: "9781234567897", title: "Another Book", author: "Jane Writer" },
];

let people = [
  { ssn: "123-45-6789", name: "John Doe", birthDate: "1990-01-01" },
  { ssn: "987-65-4321", name: "Jane Smith", birthDate: "1985-05-05" },
];

// username/find
function findUserName(user, username) {
  return user.username === username;
}

app.get("/username/find/:username", (req, res) => {
  let username = req.params.username;
  let result = users.find((user) => findUserName(user, username));

  res.json(result);
});

// credit-cards/find

function findCreditCard(ele, cardNumber) {
  return ele.number === cardNumber;
}
app.get("/credit-cards/find", (req, res) => {
  let cardNumber = req.query.cardNumber;
  let result = creditCards.find((ele) => findCreditCard(ele, cardNumber));
  res.json(result);
});

// emails/find
function findEmailAddres(ele, email) {
  return ele.email === email;
}
app.get("/emails/find", (req, res) => {
  let email = req.query.email;
  let result = users.find((ele) => findEmailAddres(ele, email));

  res.json(result);
});

// books/find
function findBookByISBN(ele, isbn) {
  return ele.isbn === isbn;
}
app.get("/books/find", (req, res) => {
  let isbn = req.query.isbn;
  let result = books.find((ele) => findBookByISBN(ele, isbn));
  res.json(result);
});

// ssn/find
function findPeopleSsn(ele, ssn) {
  return ele.ssn === ssn;
}
app.get("/ssn/find", (req, res) => {
  let ssn = req.query.ssn
  let result = people.find((ele) => findPeopleSsn(ele, ssn));
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
