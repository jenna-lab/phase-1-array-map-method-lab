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
  return tutorials.map(function (tutorial) {
    let words_array = tutorial.split(` `);
    for (let i = 0; i < words_array.length; i++) {
      words_array[i] =
        words_array[i][0].toUpperCase() + words_array[i].slice(1);
    }
    let new_words_array = words_array.map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    });
    return new_words_array.join(` `);
  });
}
