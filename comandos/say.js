const Discord = require("discord.js");

exports.run = (bot,message,args) => {
    message.delete();
    message.channel.send(args.join(" "))
}

exports.help = {
    name: "say"
}