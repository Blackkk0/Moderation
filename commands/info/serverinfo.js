const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: [],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    
   const text = message.guild.channels.cache.filter(r => r.type === "text")
       .size;
     const voice = message.guild.channels.cache.filter(r => r.type === "voice")
       .size;
     const guild = message.guild;
     const channels = message.guild.channels.cache.size;
     const Roles = guild.roles.cache.size || "No Roles!";
     const Members = guild.memberCount;

    const embed = new MessageEmbed()
       .setTitle(guild.name + " Info")
       .setColor("")
       .setThumbnail(guild.iconURL())
       .addField(`**Server ID**`, `${guild.id}`, true)
       .addField(`**Created On**`, message.guild.createdAt.toLocaleString())
       .addField(`**Owned by**`, `${message.guild.owner}`, true)
       .addField(`**Members**`, Members, true)
       .addField(`**Server Online**`, `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size}`)
       .addField(`**Channels** (${channels})`, `${text} Text | ${voice} Voice `)
       .addField(`**Region**`, `${message.guild.region}`)
       .addField(`**Roles**`, Roles, true)

     message.channel.send(embed);
  }
}
