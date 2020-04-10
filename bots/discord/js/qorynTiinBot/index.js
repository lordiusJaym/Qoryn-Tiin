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
    //Check if the bot is online
    if(message.content.startsWith('check')){
        
        lordiusBots.send('Systems check...systems nominal');
        console.log('Systems check,...systems nominal');
        
    }
    //NEED TO CODE:
    //Bot finds messages with the scroll reaction
    
    //Bot reacts with scroll emoji to message that starts with 'react'
    if(message.content.startsWith('react')){
        
        message.react('📜');
    }
    //CODEMARK: Responds to users message with reaction saying it collected the emoji, it then after a certian amount of time it tells how many reactions it collected
    //ISSUES: The message only says one reaction is collected even though several react, responds to every message even withought reactions
    //PINNED CODE:lordiusBots.send(`The number of supporters for ${message.author} is ${collected.size} for their idea '${message.content}'!`))
    //Only collects '📜' emojis
    const filter = reaction => reaction.emoji.name === '📜'
    //Sets the reaction collector to await for messages with reactions and then respond after 15 seconds
    message.awaitReactions(filter, { time: 15000 })
    
        .then(collected => lordiusBots.send(`Collected ${collected.size}`))
    //END OF CODEMARK
});
