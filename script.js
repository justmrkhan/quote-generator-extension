"use strict";

fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((quote) => {
    document.querySelector(".heading").textContent = quote.content;
    document.querySelector(".author").textContent = quote.author;
  });
