const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serveravatar",
  aliases: [],
  description: "",
  usage: "",
  run: async (client, message, args) => {
    
    
    let embed = new Discord.MessageEmbed()
    
      embed.setDescription(`[Download](${message.guild.iconURL({ dynamic: true, size: 1024 })})`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("")
    
      message.channel.send(embed)
    
  }
}
