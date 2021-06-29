const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "o/Help | <Command Name>",
  run: async(client, message, args) => {
    
  let embed = new MessageEmbed
    
  message.channel.send(embed);
  
    }
}
