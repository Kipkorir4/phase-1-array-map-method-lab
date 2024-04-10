const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  // Function to capitalize the first letter of a word
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Function to convert a string to title case
  function toTitleCase(str) {
    return str.split(' ').map(capitalize).join(' ');
  }

  // Iterate through each tutorial and format its title
  const titleCasedTutorials = tutorials.map(toTitleCase);

  return titleCasedTutorials;
}

// Test the function
console.log(titleCased());









