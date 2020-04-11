const Discord = require('discord.js');
const { preifx, token } = require('./config.json');
const client = new Discord.Client();

client.login(token);

client.once('ready', () => {

    console.log('qorynTiinBot Online!');
    //The bots wake up message to the lordius-bots channel
    var lordiusBots = client.channels.cache.find(channel => channel.id === '692944191151407186');
    
    //lordiusBots.send('Hello world!')
});

client.on('message', message => {
    //Make sure the bot doesn't reply to itself
    if (message.author.bot) return;
    
    var lordiusBots = client.channels.cache.find(channel => channel.id === '692944191151407186');
    
    var general =  client.channels.cache.find(channel => channel.id === '692944191151407186');
    
    var ideasFeed =  client.channels.cache.find(channel => channel.id === '688932291401220151');
    //Check if the bot is online
    if(message.content.startsWith('check')){
        
        lordiusBots.send('Systems check...systems nominal');
        console.log('Systems check,...systems nominal');
        
    }
    //Only collects '📜' emojis
    const scroll = reaction => reaction.emoji.name === '📜'
    //Sets the reaction collector to await for messages with reactions and then respond after 15 seconds
    message.awaitReactions(scroll, { time: 86400000 })
    
        .then(collected => collected.map(s => ideasFeed.send(`The number of supporters for ${message.author} is ${s.count} for their idea '${message.content}'!`)));
    //CODEMARK
    const thumbsUp = reaction => reaction.emoji.name === ('📜','👍') 
    
    message.awaitReactions(thumbsUp, {time: 1000})
    
        .then(collected => collected.map(s => lordiusBots.send(`${message.author} your idea has been approved!`)));
    //END OF CODEMARK
});
