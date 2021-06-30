const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases:[],
  description: "",
  usage: "",
  run: async(client, message, args) => {
    
  let embed = new Discord.MessageEmbed()
  .setColor("")
  .setAuthor("help commands","")
  .setDescription(`
**General Commands**
\`userinfo\`,\`serverinfo\`,\`botinfo\`,
\`weather\`,\`avatar\`,\`serveravatar\`,
\`invite\`,\`roles\`,\`listemoji\`,
\`allbots\`,\`roleinfo\`,\`channels\`
**Moderation Commands**
\`backup\`,\`mute\`,\`unmute\`,
\`ban\`,\`unban\`,\`kick\`,
\`clear\`,\`lock\`,\`unlock\`,
\`channelhide\`,\`channelshow\`,
\`vkick\`,\`vmute\`,\`vunmute\`,
\`deafen\`,\`undeafen\`,\`moveall\`,
\`slowmode\`

[Invite]() , [Support]()
`)
    
  message.channel.send(embed);
    }
  }
