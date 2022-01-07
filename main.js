let intro = '', n = '', desc = '', message = '';

// This will loop forever:
function init() {   
  for (let i=0; i === 0; i = i) { 
    var input = window.prompt("In one word, how are you feeling?");
    input = cleanUp(input); // lowercase, remove special characters & trim
    if (!input.length) { 
      continue;
    }

    getResponse(input);
    alert(`${intro}Here's a${n} ${desc}: \n\n${message}`);
  }
}

// compare user input with array catalogs, change message
function getResponse(n) { 
  if (happyInputs.includes(n)) { 
    intro = `That's great! `;
    n = '';
    desc = 'random joke';
    message = getRandom(joke)
    return;
  } else if (sadInputs.includes(n)) { 
    intro = `I'm sorry to hear that. `;
    n = 'n';
    desc = `inspirational quote to make you feel better`;
    message = getRandom(inspiration);
    return;
  } else { 
    intro = `I don't know what to make of that! But. `;
    if (otherValid.includes(n)) { 
      intro = '';
    }

    if ((Math.floor(Math.random() * 2))) { 
      n = '';
      desc = 'random joke';
      message = getRandom(joke);
      return;
    } else {
      n = 'n';
      desc = 'inspirational quote';
      message = getRandom(inspiration);
      return;
    }
  }

}

function getRandom(type) { // get random element from provided array
  return type[Math.floor(Math.random() * type.length)];
}

function cleanUp(s) { 
  s = s.toLowerCase();
  s = s.trim();
  s = s.split('');
  s = s.filter(n => n.toLowerCase() !== n.toUpperCase() || n === '-' || n === ' ');
  s = s.join('');
  return s;
}