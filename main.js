let intro = '', n = '', desc = '', message = '';

// This will loop forever:
function init() {   
  for (let i=0; i === 0; i = i) { 
    var input = window.prompt("In one word, how are you feeling?");
    input = input.toLowerCase();
    input = input.split('');
    input = input.trim();
    input = input.filter(n => n.toLowerCase() !== n.toUpperCase() || n === '-');

    if (input.includes(' ') || typeof input !== 'string') { 
      continue;
    }
    getResponse(input);
    alert(`${intro} Here's a${n} ${desc}: \n\n${message}`);
  }
}


function getResponse(n) { 
  if (happyInputs.includes(n)) { 
    intro = `That's great!`;
    n = '';
    desc = 'random joke';
    message = getRandom(joke)
    return;
  } else if (sadInputs.includes(n)) { 
    intro = `I'm sorry to hear that.`;
    n = 'n';
    desc = `inspirational quote to make you feel better`;
    message = getRandom(inspiration);
    return;
  } else { 
    intro = `I don't know what to make of that! But.`;
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

function getRandom(type) { 
  return type[Math.floor(Math.random() * type.length)];
}
