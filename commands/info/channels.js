const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "roles",
  aliases: [],
 
  run: async(client, message, args) => {

let channels = message.guild.channels.cache.map(r => `> ${r.name} `).join("\n"); 
 let embed = new Discord.MessageEmbed()
  .setTitle("Server Channels") 
 .setDescription(" ```javascript\n" + channels + "``` ");
  message.channel.send(embed); 

  { 
 let roles = new Discord.MessageEmbed()
  .setTitle(`Command: channels `)
  .addField("Usage", `${prefix}channels`) 
 .addField("Information", "Show All Channels For Server");
  message.channel.send(channels);

        }
     }
  }
