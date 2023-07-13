"use strict";

fetch("https://api.quotable.io/quotes/random")
  .then((response) => response.json())
  .then((quote) => {
    document.querySelector(".heading").textContent = quote[0].content;
    document.querySelector(".author").textContent = `${quote[0].author}`;
  });
