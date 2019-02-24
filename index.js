// add solution here
function theBeatlesPlay(musicians, instruments) {
  var  emptyArray = [];
  for (var i = 0; musicians.length > i; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
 
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    num++;
  } while (num < 15) 
  return emptyArray;
}