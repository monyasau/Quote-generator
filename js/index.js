let quoteContainer = document.getElementById("quote");
let author= document.getElementById("author")
let button = document.getElementById("btn");

//   quoteContainer.innerText = "Loading...";
// fetch("https://api.quotable.io/random")
//   .then((response) => response.json())
//   .then((fetchResult) => (quoteContainer.innerText = '" ' + fetchResult.content + ' "'));

// let quoteContainer = document.getElementById("quote");
// // // let container = document.querySelector("quote");

// getQuote = () => {
//   fetch("https://api.quotable.io/random")
//     .then((response) => response.json())
//     .then((fetchResult) => (quoteContainer.innerText = '" ' + fetchResult.content + ' "'));
// };

// button.addEventListener("click", getQuote());

// const quoteContainer = document.getElementById("quote");
//   quoteContainer.innerText = "Loading...";
// fetch("https://api.quotable.io/random")
//   .then((response) => response.json())
//   .then((fetchResult) => (quoteContainer.innerText = '" ' + fetchResult.content + ' "'));

quoteContainer.innerText = "Loading...";
fetch("https://api.quotable.io/random")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    return response.json();
  })
  .then((fetchResult) => {
    quoteContainer.innerText = `"${fetchResult.content}"`;
    author.innerText = `- ${fetchResult.author}`;
  })
  .catch((error) => {
    quoteContainer.innerText = "Failed to fetch quote";
    console.error(error);
  });

const getQuote = () => {
  quoteContainer.innerText = "Loading...";
  fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      return response.json();
    })
    .then((fetchResult) => {
      quoteContainer.innerText = `"${fetchResult.content}"`;
      author.innerText = `- ${fetchResult.author}`;
    })
    .catch((error) => {
      quoteContainer.innerText = "Failed to fetch quote";
      console.error(error);
    });
};

button.addEventListener("click", getQuote);
