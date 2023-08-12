// Predefined array of quotes
const quotes = [
    "\"The only way to do great work is to love what you do.\"",
    "\"Life is what happens when you're busy making other plans.\"",
    "\"The future belongs to those who believe in the beauty of their dreams.\"",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\"",
    "\"In the end, it's not the years in your life that count. It's the life in your years.\"",
    "\"Believe you can and you're halfway there.\"",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\"",
    "\"It does not matter how slowly you go as long as you do not stop.\"",
    "\"The only person you are destined to become is the person you decide to be.\""
  ];
  const writer = [
    "- Steve Jobs",
    "- John Lennon",
    "- Eleanor Roosevelt",
    "- Winston Churchill",
    "- Abraham Lincoln",
    "- Theodore Roosevelt",
    "- Franklin D. Roosevelt",
    "- Confucius",
    "- Ralph Waldo Emerson"
  ];
  
  // Function to get a random quote from the array
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return randomIndex;
  }

  // Function for the quotes to fade-in
  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";
  
    let op = 0.1;
    const timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      op += 0.1;
    }, 50);
  }

  // Function to display the random quote
  function displayRandomQuote() {
    const quoteText = document.getElementById("quote-text");
    const quoteWriter = document.getElementById("quote-writer");

    

    
    var quoteNumber = getRandomQuote();
    quoteText.textContent = quotes[quoteNumber];
    quoteWriter.textContent = writer[quoteNumber];
    fadeIn(quoteText);
    fadeIn(quoteWriter);
  

  }
  
  
  // Event listener for the "Generate Quote" button
  document.getElementById("generate-btn").addEventListener("click", displayRandomQuote);
  