const Discord = require('discord.js') ;
const bot = new Discord.Client();

bot.login('NDY3ODE2Njg4NTg3Mzc0NTk1.Dk4GTw.odQxEIAlkpsl6IuU7ZpTxuU9ZFM');

bot.on('message', message => {
    if (message.content.startsWith('/convite')){
        message.channel.send('Aqui está: https://discord.gg/uEpwc9k.');
    }
        if (message.content.startsWith('/ajuda')){
        message.channel.send('Chame um ajudante ou superios, pode mencionar eles.');
    }
        if (message.content.startsWith('/loja')){
        message.channel.send('Opa, aqui está nossa loja: https://blastcraft.com.br/.');
    }
        if (message.content.startsWith('/aleexey')){
        message.channel.send('Opa, aqui está o canal dele: https://www.youtube.com/channel/UCvCRTD0r6niKowGIUACV8NQ.');
    }
        if (message.content.startsWith('/criador')){
        message.channel.send('NitrooPVP#4025');
    } 
});

bot.on('ready', () => {
    bot.user.setActivity('Sendo configurado!')
    bot.user.setActivity('Meu comando " / ".')
});