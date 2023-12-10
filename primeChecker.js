
function isODDorEven(number) {
  if (number%2== 0) {
    return false;
  }

  return true;
}

function getOOrEOne(inputNumber) {
  if (isODDorEven(inputNumber)) {
    return inputNumber;
  } else {
    return -1;
  }
}

module.exports = getOOrEOne;
