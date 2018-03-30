// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console;

  // Given the card number, check for the string.length 
  //then check for the first 2 digits
  // return network the cardlloglees to
  let slicedPrefix = cardNumber.slice  (0,4);
  let slicedPrefix2 = cardNumber.slice(0,6);
  let switchPrefix = ['4903','4905','4911','4936', '6333', '6759'];
  let switchPrefix2 = ['564182', '633110'];
  if ((switchPrefix.includes(slicedPrefix) || switchPrefix2.includes(slicedPrefix2)) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch'; 
  } 
  if (cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }
  let prefix = cardNumber[0] + cardNumber[1];
  if (cardNumber.length === 16 && (parseInt(prefix) > 50 && parseInt(prefix) < 56)) {
    return 'MasterCard';
  }
  if (cardNumber.length === 14 && (prefix === '38' || prefix === '39')) {
    return 'Diner\'s Club';
  }
  if (cardNumber.length === 15 && (prefix === '34' || prefix === '37')) {
    return 'American Express';
  }


  if (prefix === '65' && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }
//---------------------old Maestro
  prefix = cardNumber.slice(0,4);
  let maestroPrefix = ['5020','5018','5038','6304'];

  if ((maestroPrefix.includes(prefix)) && (cardNumber.length > 11 && cardNumber.length < 20)) {
    return 'Maestro';
  } 
//----------------------old Discover
  if ( prefix === '6011' && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  }
  prefix = cardNumber.slice(0,3);
  if ( (cardNumber.length === 16 || cardNumber.length === 19) && (parseInt(prefix) > 643 && parseInt(prefix) < 650 )) {
    return 'Discover';
}
  if (cardNumber.length > 15 && cardNumber.length < 20) {
    if ((parseInt(cardNumber.slice(0,6)) >= 622126 && parseInt(cardNumber.slice(0,6)) <= 622925 ) 
       || (parseInt(cardNumber.slice(0,3)) >= 624  && parseInt(cardNumber.slice(0,3)) <= 626 ) 
       || (parseInt(cardNumber.slice(0,4)) >= 6282 && parseInt(cardNumber.slice(0,4)) <= 6288 )) { 
       return 'China UnionPay';
      }
    } 
  //-----------------------Maestro
  // let maestroCard = function (cardNumber) {
  //   let maestroPrefix = ['5020','5018','5038','6304'];
  //   if ((cardNumber.length > 11 && cardNumber.length < 20)
  //     && maestroPrefix.includes(cardNumber.slice(0,4))) {
  //     return 'Maestro';
  //   }
  // };

  //  maestroCard(cardNumber);

  //-----------------------Discover
  // let discoverCard = function (cardNumber) {
  //   if (cardNumber.length === 16 || cardNumber.length === 19) {
  //     if ((cardNumber.slice(0,2) === 65) 
  //     || (cardNumber.slice(0,3) >= 644  && cardNumber.slice(0,3) <= 649 ) 
  //     || (cardNumber.slice(0,4) === 6011)) { 
  //      return 'Discover';
  //     }
  //   }
  // };
  // discoverCard(cardNumber);

  //-----------------------China Union Pay
// let chinaCardLength = [16,17,18,19];
  // let chinaUnionPayCard = function(cardNumber) {          //   cardNumber = '6221261234567891'
    
  // };

  // chinaUnionPayCard(cardNumber);
};