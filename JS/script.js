/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Create array of quote objects with various properties - Source: https://www.rbth.com/arts/329726-7-russian-quotes-proverbs
const quotes = [
  {
    quote: "‘My uncle, what a worthy man…’",
    source: "Alexander Pushkin (1799-1837)",
    citation: "Eugene Onegin",
    year: 1833,
    russian: "'Мой дядя самых честных правил'",
    used: "To characterize somebody who thinks of himself as a moral standard for everyone.",
    popular: "The first lines of <i>Eugene Onegin</i>, a novel in verse by Pushkin, have been uttered  by Russians since the 19th century: “My uncle, what a worthy man, // Falling ill like that, and dying; // It summons respect, one can // Admire it, as if he were trying.” Considered “the ultimate Russian novel,” <i>Eugene Onegin</i> is full of other quotes now used in Russian everyday speech."
  },
  {
    quote: "‘The Poet's soul did not bear // The shameful hurts of low breed,’",
    source: "Mikhail Lermontov (1814-1841)",
    citation: "Death Of the Poet",
    year: 1837,
    russian: "'Не вынесла душа поэта // Позора мелочных обид'",
    used: "When a Russian is just fed up and has had enough.",
    popular: "Lermontov’s poem <i>Death of The Poet</i>, written after Pushkin’s demise, condemned his critics and enviers, stating that the “shameful hurts” provoked the poet to fight against worldly nonsense, and as a result, he is killed. This poem had been part of the school curriculum since early Soviet times, so every Russian knows it."
  },
  {
    quote: "‘I do not want to study, I want to marry!’",
    source: "Denis Fonvizin (1744-1792)",
    citation: "The Minor",
    year: 1782,
    russian: "'Не хочу учиться, а хочу жениться!'",
    used: "To mock somebody who either makes plans too hastily or doesn’t pay enough attention to preparation.",
    popular: "Fonvizin’s <i>The Minor</i> is a classic Russian play taught in schools about education and growing up. This quote is widely used by teachers to reprimand their pupils for laziness, so it’s massively known."
  },
  {
    quote: "‘Manuscripts don’t burn!’",
    source: "Mikhail Bulgakov (1891-1940)",
    citation: "The Master and Margarita",
    year: 1967,
    russian: "'Рукописи не горят!'",
    used: "To express the conviction that art is prevalent over time and power, and sometimes, to express an opinion that the truth shall prevail no matter what.",
    popular: "In Bulgakov’s <i>The Master and Margarita</i>, these words are spoken by Woland, Satan in the disguise of a professor. Woland demands the Master’s novel, but the Master says he’s burnt it in a stove. “Manuscripts don’t burn,” Woland replies and finds a copy of the novel on the Master’s table. One of the most-read novels in Russia, <i>The Master and Margarita</i> made this quote proverbial."
  },
  {
    quote: "'Whether I am a trembling creature or whether I have the right?'",
    source: "Fyodor Dostoevsky (1821–1881)",
    citation: "Crime and Punishment",
    year: 1866,
    russian: "'Тварь я дрожащая или право имею?'",
    used: "When a person finally dares to do something they were frightened of or reluctant of doing for a long time.",
    popular: "In <i>Crime and Punishment</i>, Rodion Raskolnikov speaks these words in an attempt to justify his murder of the old pawnbroker woman, who, according to Raskolnikov, is “a louse, a useless, loathsome, harmful creature” sucking money and life from her debtors."
  },
  {
    quote: "‘There is yet powder in the powder-flasks!’",
    source: "Nikolay Gogol (1809-1852)",
    citation: "Taras Bulba",
    year: 1835,
    russian: "'Есть еще порох в пороховницах!'",
    used: "When a person finally dares to do something they were frightened of or reluctant of doing for a long time.",
    popular: "One of the most uplifting quotes, this one is also perceived as a proverb. But initially, these are the words of Taras Bulba, the old Cossack who asks his fellows if they’re ready to fight, and they answer: “There is yet powder in the flasks, father; the Cossack force is not weakened yet: the Cossacks yield not!” After this, a fierce battle ensues… This quote sure carries a combatant mood many Russians love to entertain."
  },
  {
    quote: "'Time for business, an hour for fun'",
    source: "Tsar Alexis of Russia (1629—1676)",
    citation: "",
    year: "",
    russian: "'Делу – время, потехе – час'",
    used: "The meaning of one of the most famous Russian sayings is similar to that of “All work and no play makes Jack a dull boy”: there must be time for fun as well as time for work. But this saying is often misinterpreted even by Russians (see below).",
    popular: "This is a quote from a falcon hunting manual written in the 17th century by Tsar Alexis of Russia. In 17th century Russian, “hour” meant both “an hour” and “time” in general. So Tsar Alexis was saying that there must be time for work and fun in a man’s life (advocating his passionate love for falcon hunting, apparently). In contemporary Russian, it seems that this quote says that there must be time for business, but only an hour for fun – this is an incorrect interpretation. The quote has become so popular since the 17th century that even most Russians think it’s a proverb!"
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
  let htmlString2 = "";

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

  // Checking that the Quote object contains the 'russian', 'used' and 'popular' properties,
  // which are then concatenated to the HTML2 string as this will go into the 'quote-box2' div element.
  if (quote.russian != "") {
    htmlString2 += "<p class = 'russian'><b>In Russian: " + quote.russian + "</b></p>";
      if (quote.used != "") {
        htmlString2 += "<br>";
        htmlString2 += "<p class = 'used'><b>When it is used?</b><br><br>" + quote.used + "</p>";
          if (quote.popular != "") {
            htmlString2 += "<br>";
            htmlString2 += "<p class = 'popular'><b>Why so popular?</b><br><br>" + quote.popular + "</p>";
          }
      }
  }
  
  // Closing the tags respectively for each html string
  htmlString += "</p>";
  htmlString2 += "</p>";
  
  // Setting the 'innerHTML' of the 'quote-box' and 'quote-box2' div to the respective HTML strings.
  document.getElementById('quote-box').innerHTML = htmlString;
  document.getElementById('quote-box2').innerHTML = htmlString2;
};

// Initialising the function.
printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


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

// Invoking the 'printQuote' function and the timer interval when clicking the "Show another quote" button.
document.getElementById('loadQuote').addEventListener("click", printQuote && myTimer, false);

// Invoking the 'timerStop' function and stopping the timer interval when clicking the "Stay on this Quote" button.
document.getElementById('stayQuote').addEventListener("click", timerStop, false);