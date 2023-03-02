let quoteContainer = document.getElementById("quote");
let author = document.getElementById("author");
let button = document.getElementById("btn");
let previousQuotes = [];




let overlayWindow = document.getElementById("overlay");
let openOverlayButton = document.getElementById("openOverlayBtn");
let closeOverlayButton = document.getElementById("closeOverlayBtn");
let overlayContents = document.getElementById("overlayContents");
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
      throw new Error("Failed to fetch quote - check your internet connection");
    }
    return response.json();
  })
  .then((fetchResult) => {
    quoteContainer.innerText = `"${fetchResult.content}"`;
    author.innerText = `- ${fetchResult.author}`;
    addNewPreviousQuote(fetchResult);
      // previousQuotes.push(`"${fetchResult.content}" - ${fetchResult.author}`);

  })


const addNewPreviousQuote = (quote) => {
  previousQuotes.push(quote);

  const quoteElements = previousQuotes.map((quote) => {
    return `<p>"${quote.content}" - ${quote.author}</p>`;
  });

  //   // Set the overlayContents HTML to the joined quoteElements array
  overlayContents.innerHTML = quoteElements.join("");

  //   // Show the overlay window
  overlay.classList.add("show");
};

const openOverlay = () => {
  let overlayContents = document.getElementById("overlayContents");
  if (previousQuotes.length > 0) {
    const quoteElements = previousQuotes.map((quote) => {
      return `<p>"${quote.content}" - ${quote.author}</p>`;
    });
    overlayContents.innerHTML = quoteElements.join("");
  } else {
    // // If previousQuotes is empty, display a message
    overlayContents.innerText = "No previous quotes";
  }

  overlay.className = "show";
};

const closeOverlay = () => {
  overlay.className = "hide";
};