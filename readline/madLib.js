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
console.log('Mad Libs');
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
        console.log('Enter a name: ');
    } else if (words.length === 2) {
        console.log('Enter a adverb: ');
    } else if (words.length === 3) {
        console.log('Enter a verb: ')
    } else if(words.length === 4) {
        console.log('Enter a noun: ')
    } else if(words.length === 5) {
        console.log(words[0],words[1],words[2],words[3],words[4])
        rl.close()
    } else {
        console.log('');
    }
});