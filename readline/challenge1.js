var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function clear () {
    process.stdout.write('\u001B[2J\u001B[0;0f')
}

var words = [];
// adjective noun adverb verb noun
console.log('Challenge1 Mad Libs');
console.log('+-------------------+\n');
console.log('Press ENTER to begin.\n');
rl.on('line', function(input) {
    if (input.length) {
        words.push(input);
    }
    if(words.length === 0) {
        clear();
        console.log('Enter an adjective: ');
    } else if (words.length === 1) {
        console.log('Enter another adjective: ');
    } else if (words.length === 2) {
        console.log('Enter another one: ');
    } else if (words.length === 3) {
        console.log('Enter your name: ')
    } else if (words.length === 4){
        var rand=Math.floor(Math.random()*words.length-2)
        console.log(words[rand],words[words.length-1])
    } else {
        console.log('');
    }
});