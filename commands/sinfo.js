const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setDescription(message.guild.name)
    .setThumbnail(message.guild.iconURL())
    .addField("Members", message.guild.membercount)
    .setFooter(
      message.guild.owner.user.tag,
      message.guild.owner.user.avatarURL()
    )
    .setTimestamp();
  message.channel.send(embed);
};
