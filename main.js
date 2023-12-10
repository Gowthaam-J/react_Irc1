// main.js
const fs = require('fs');
const getOOrEOne = require('./primeChecker');

function printPrimesInRange(start, end) {
  let htmlContent = '<html><head><title>ODD or EVEN NUMBER</title></head><body>';

  for (let number = start; number <= end; number++) {
    const result = getOOrEOne(number);

    if (result !== -1) {
      htmlContent += `<p>${number} is a ODD.</p>`;
    }
    else{
    htmlContent += `<p>${number} is a EVEN.</p>`;
  }
}
  htmlContent += '</body></html>';

  // Write the HTML content to a file
  fs.writeFileSync('ODDorEVEN.html', htmlContent);

  console.log('ODD numbers have been written to ODDorEVEN.html');
}

// Specify the range you want to check for prime numbers
const startRange = 1;
const endRange = 20;

printPrimesInRange(startRange, endRange);
