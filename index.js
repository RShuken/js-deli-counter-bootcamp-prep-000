var katzDeli = [];
var ticketNumber = 0;

function takeANumber(katzDeli, name){
  ticketNumber = ticketNumber += 1;
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var nowServing = katzDeli.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {

    var array = [];
    for (var i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:` + array;
  }
}
