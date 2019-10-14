const quotes = [
  {
    quote: "My uncle, what a worthy man…",
    source: "Alexander Pushkin (1799-1837)",
    citation: "Eugene Onegin",
    year: 1833
  },
  {
    quote: "The Poet's soul did not bear // The shameful hurts of low breed",
    source: "Mikhail Lermontov (1814-1841)",
    citation: "Death Of the Poet",
    year: 1837
  },
  {
    quote: "I do not want to study, I want to marry!",
    source: "Denis Fonvizin (1744-1792)",
    citation: "The Minor",
    year: 1782
  },
  {
    quote: "Manuscripts don’t burn!",
    source: "Mikhail Bulgakov (1891-1940)",
    citation: "The Master and Margarita",
    year: 1967
  },
  {
    quote: "Whether I am a trembling creature or whether I have the right?",
    source: "Fyodor Dostoevsky (1821–1881)",
    citation: "Crime and Punishment",
    year: 1866
  },
  {
    quote: "There is yet powder in the powder-flasks!",
    source: "Nikolay Gogol (1809-1852)",
    citation: "Taras Bulba",
    year: 1835
  },
  {
    quote: "Time for business, an hour for fun",
    source: "Tsar Alexis of Russia (1629—1676)",
    citation: "",
    year: ""
  }
];

console.log(quotes);

// Function to randomly return a quote object from the 'quotes' array of objects
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    return(quotes[randomNumber]);
};

// Function calling the 'getRandomQuote' function and initiating necessary variables
function printQuote() {
  let quote = getRandomQuote();
  let htmlString = "";

  // Concatenating the HTML components
  htmlString += "<p class='quote'>" + quote.quote + "</p><br>";
  htmlString += "<p class='source'>" + quote.source;

  // Checking that the Quote object contains a 'citation' and 'year' property,
  // and if so then this shall be concatenated to the HTML string as this will go into the 'quote-box' div element.
  if(quote.citation != "") {
    htmlString += "<span class='citation'>" + quote.citation + "</span>";
    if (quote.year != "") {
      htmlString += "<span class = 'year'>" + quote.year + "</span>";
    }
  } 
  
  // Closing the tags respectively for each html string
  htmlString += "</p>";
  
  // Setting the 'innerHTML' of the 'quote-box' and 'quote-box2' div to the respective HTML strings.
  document.getElementById('quote-box').innerHTML = htmlString;
};

// Initialising the function.
printQuote();

// Initialising 'timer' variable as necessary before creating the function that will allow the quotes to change randomly every 5 secs.
let timer;

function myTimer() {
  timer = setInterval(printQuote, 4500);
}

// Initialising function.
myTimer();

// Function to stop the timer to allow users to stay on a certain quote.
function timerStop() {
  clearInterval(timer);
}