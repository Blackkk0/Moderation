const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: [],
  description: "",
  usage: "",
  run: async(client, message, args) => {
let embed = new Discord.MessageEmbed()
      .setColor("")
      .setTitle(`link Bot`)
      .setURL(
        ""
      )
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(embed);
  }
}
