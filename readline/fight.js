var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var badGuy = {
    name: 'Gabriel',
    hitPoints: 50
}

var user = {
    name: '',
    hitPoints: 50,
    bonus: 0
}

console.log('Beat up the '+ badGuy.name + '! (game)');
console.log('Press ENTER to begin.');
rl.on('line', function (input) {
    // check input
    if (input.toLowerCase() === 'kick') {
        // 2/3 chance to miss
        if(Math.floor(Math.random()*3)<1) {
            var kick = Math.floor(Math.random()*15+1);
            badGuy.hitPoints -= kick+user.bonus;
            user.bonus=0
            console.log('You kick ' + badGuy.name + ' for ' + kick + ' damage.');
            console.log(badGuy.name + ' has ' + badGuy.hitPoints + ' left.');
        } else {
            console.log('You MISS !!!')
        }
        console.log(badGuy.name,'attacked you')
        var dmg = Math.floor(Math.random()*15+1);
        user.hitPoints-=dmg
        console.log('You lost:',dmg,'hit points.');
        console.log('You have:',user.hitPoints,"left");
    } else if (input.toLowerCase() === 'punch') {
        // 1/3 chance to miss
        if(Math.floor(Math.random()*3)<2) {
            var punch = Math.floor(Math.random()*5+5);
            badGuy.hitPoints -= punch+user.bonus;
            user.bonus=0
            console.log('You punch ' + badGuy.name + ' for ' + punch + ' damage.');
            console.log(badGuy.name + ' has ' + badGuy.hitPoints + ' left.');
        } else {
            console.log('You MISS !!!')
        }
        console.log(badGuy.name,'attacked you')
        var dmg = Math.floor(Math.random()*5+5);
        user.hitPoints-=dmg
        console.log('You lost:',dmg,'hit points.');
        console.log('You have:',user.hitPoints,"left");
    } else if(input.toLowerCase() === 'find') {
        var chance=Math.floor(Math.random()*5)
        if(chance>1 && chance<4) {
            var hp=Math.floor(Math.random()*20+1)
            user.hitPoints+=hp
            console.log('User gained:',hp,'points')
        } else if(chance==4){
            var b=Math.floor(Math.random()*5+1)
            user.bonus+=b
            console.log('User gained:',b,'bonus damage')
        } else {
            console.log('Nothing found')
        }
        console.log(badGuy.name,'attacked you')
        var dmg = Math.floor(Math.random()*5+5);
        user.hitPoints-=dmg
        console.log('You lost:',dmg,'hit points.');
        console.log('You have:',user.hitPoints,"left");
    } else if(input.toLowerCase() === 'check') {
        console.log('You HP:',user.hitPoints)
        console.log('You current bonus damage:',user.bonus)
    } else {
        if(user.name==='') user.name=input
    }
    if (user.name==='') {
        console.log('Enter your name')
    } else {
        // see if user won
        if (badGuy.hitPoints <= 0) {
            console.log('You beat up the ' + badGuy.name + '!');
            console.log('YOU WIN !!!');
            rl.close();
        } else if(user.hitPoints<=0) {
            console.log(badGuy.name,'beats you up');
            console.log('DEFEAT !!!');
            rl.close()
        }
        else {
            // ask for more input
            rl.setPrompt('You can PUNCH or KICK or Find or Check: ');
            rl.prompt();
        }
    }
});