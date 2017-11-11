const fs = require("fs")
line1 = "Will you still love me when I'm no longer young and beautiful?"
line2 = "Will you still love me when I got nothing but my aching soul?"
fs.writeFile('lyrics-1.txt', line1+"\n"+line2, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
line3 = "I know you will, I know you will"
line4 = "I know that you will"
fs.writeFile('lyrics-2.txt', line3+"\n"+line4, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
fs.readFile('lyrics-1.txt', "utf-8", function(err, data1) {
    if (err) throw err;
    fs.readFile('lyrics-2.txt', "utf-8", function(err, data2) {
        if (err) throw err;
        fs.writeFile('lyrics-3.txt', data1+"\n"+data2+"\n", (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
});
var fn = []
for(var i=1; i<=10; i++) {
    fn.push(("folder-"+i).toString())
    fs.mkdirSync(fn[i-1].toString())
}
var fnn = []
for(var i=1; i<=10; i++) {
    fnn.push(("new-folder-"+i).toString())
    fs.renameSync((fn[i-1]).toString(), (fnn[i-1]).toString());
    fs.rmdirSync((fnn[i-1]).toString())
}
function pf(type, path) {
    if(!path) path="."
    fs.readdir(path, (err, data) => {
        if(err) {
          console.log('Error!', err);
        }
        for(var i=0; i<data.length; i++) {
            if(data[i].includes(type)) console.log(data[i])
        }
    });
}
var args = process.argv.slice(2)
pf(args[0],args[1])
pf(args[0],args[1])

// Challenges
// Only attempt these if you've finished all of the other exercises:
// Jabberwocky
// copy and paste the following poem into a JavaScipt file (if you're curious, you can read about this poem here). Then create 28 new files, and call them jabb-1.txt, jabb-2.txt, etc, all the way up to jabb-28.txt. Add one line of the poem, in order, to each file. Once you have all 28 files, create a master file called jabb-master.txt that contains the text of the entire poem.:
// Jabberwocky by Lewis Carroll
// var poem = '’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe. \n\n“Beware the Jabberwock, my son! \n      The jaws that bite, the claws that catch! \nBeware the Jubjub bird, and shun \n      The frumious Bandersnatch!” \n\nHe took his vorpal sword in hand; \n      Long time the manxome foe he sought— \nSo rested he by the Tumtum tree \n      And stood awhile in thought. \n\nAnd, as in uffish thought he stood, \n      The Jabberwock, with eyes of flame, \nCame whiffling through the tulgey wood, \n      And burbled as it came! \n\nOne, two! One, two! And through and through \n      The vorpal blade went snicker-snack! \nHe left it dead, and with its head \n      He went galumphing back. \n\n“And hast thou slain the Jabberwock? \n      Come to my arms, my beamish boy! \nO frabjous day! Callooh! Callay!” \n      He chortled in his joy. \n\n’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe.';
// Watch Me
// create a file called watch-me.txt that is initially empty. Create another empty file called new-text.txt. Use fs.watch so that whenever you add new text to the watch-me.txt file, that text is automatically also added to the new-text.txt file (you can manually open up the watch-me.txt file and add new text to it to test this out)
// create a JavaScript file that lets you enter a filename and some text into the command line in your terminal. The he script should create a new file that contains the text you entered. For example, the following command should create a new file called 'new-file.txt' that contains the text 'this is a test' (hint: use process.argv):
// node script.js new-file.txt this is a test