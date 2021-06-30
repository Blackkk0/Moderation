 const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "unlock",
  aliases: [],
  description: "",
  usage: "",

run: async (client, message, args) => { 
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("**Please Check Your Permission**");
    message.channel
      .createOverwrite(message.guild.id, { SEND_MESSAGES: true })
      .then(() => {
        const embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("**Unlocked Channel 🔓**")
          .addField("**Guild name:**", message.guild.name)
          .addField("**Channel:**", `<#${message.channel.id}>`)
          .addField("**Unlocked by:**", `<@${message.author.id}>`, true)
          .setColor("");
        return message.channel.send(embed);
      });
  }
}
