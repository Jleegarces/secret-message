let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'program');
secretMessage[7] = 'right'
secretMessage.shift();
secretMessage[0] = 'Programming'
secretMessage.splice(5,10,'know')
console.log(secretMessage.join())